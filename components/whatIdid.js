import React, { useState } from 'react'

import config from '../config'
import useWindowSize from '../utils/hook'

export default function WhatIDid(props) {
  const [isVisible, setVisible] = useState(0)
  const data = [
    {
      id: 1,
      title: 'Create the TedX Izmit',
      content:
        'I create TedX Izmit. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      id: 2,
      title: 'Create the Kocaeli Türkçe Toastmasters',
      content:
        'Development, Management, Analysis, agile, scrum, use cases, user stories, PRDs, user experience, product evangelism'
    },
    {
      id: 3,
      title: 'Manage the Siyamder',
      content:
        'Operations, Analytics, Customer Support, agile, scrum, use cases, user stories, PRDs, user experience, product evangelism'
    },
    {
      id: 4,
      title: "Let's do it! Türkiye Conferance Conductor",
      content:
        'SaaS, Consumer Internet, Mobile, agile, scrum, use cases, user stories, PRDs, user experience, product evangelism'
    }
  ]

  const size = useWindowSize()
  const mobil = size.width <= 767

  const clickCollapse = (e) => {
    isVisible !== e ? setVisible(e) : setVisible(0)
  }

  return (
    <section
      id="WhatIDid"
      className={`${!props.isOpen ? 'closeResMenu' : null}`}
    >
      <section className="didContent">
        <h2>What I Did</h2>
        <ul id="collapse">
          {props.data &&
            props.data.map((item, index) => (
              <li key={index}>
                <span
                  onClick={() => clickCollapse(index)}
                  className={isVisible === index ? 'openCollapse' : null}
                >
                  {item.data.whatidid_title[0].text}
                </span>
                {isVisible === index && (
                  <p>{item.data.whatidid_content[0].text}</p>
                )}
              </li>
            ))}
        </ul>
      </section>
      <section className="didIMG">
        <img
          src={props.data && props.data[isVisible]?.data.whatidid_images.url}
          alt="what i did"
          width={`${mobil ? '327' : 'auto'}`}
          height={`${mobil ? '327' : 'auto'}`}
        />
      </section>
    </section>
  )
}
