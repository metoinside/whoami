import React from 'react'
import Link from 'next/link'

import useWindowSize from '../utils/hook'

const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
]

export default function MyArticles(props) {
  const [getData, setData] = React.useState({ load: false })

  const getPost = async () => {
    const response = await fetch(
      'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@metoinside'
    )
    const data = await response.json()
    const dataSon = data.items.filter(item => item.categories.length > 0)
    setData({ load: true, data: dataSon.slice(0, 6), url: data.feed.link })
  }

  const changeDateFormat = (sendDate) => {
    const pubDate = new Date(sendDate)
    return `${pubDate.getDate()} ${
      months[pubDate.getMonth() + 1]
    } ${pubDate.getFullYear()}`
  }

  React.useEffect(() => {
    getPost()
  }, [])

  const size = useWindowSize()
  const mobil = size.width <= 767

  return (
    <section
      id="Articles"
      className={`${!props.isOpen ? 'closeResMenu' : null}`}
    >
      <section className="articlesIMG">
        <img
          src={`${!mobil ? '/articles.svg' : '/resArticles.svg'}`}
          alt="Articles"
        />
      </section>
      <section className="articlesContent">
        <h2>{props.data.length !== 0 ? props.data[0].data.title[0].text : "My Articles"}</h2>
        <ul>
          {getData.load &&
            getData.data.map((item, index) => (
              <li key={index}>
                <h4>
                  <Link href={item.link} prefetch={false}>
                    <a>{item.title}</a>
                  </Link>
                </h4>
                <div className="bottom">
                  {changeDateFormat(item.pubDate)} 
                  {/* <i>.</i> 3 Min Reading */}
                </div>
              </li>
            ))}
        </ul>
        <button onClick={() =>
            (location.href = props.medium && props.medium)
          }>See All Articles</button>
      </section>
    </section>
  )
}
