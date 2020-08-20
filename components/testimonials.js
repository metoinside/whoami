import React from 'react'

import config from '../config'
import Star from './assets/star'
import useWindowSize from '../utils/hook'
import Data from '../utils/datas'

export default function Testimonials(props) {
  const data = [
    {
      id: 1,
      star: 5.0,
      title:
        'Metin is a very honest guy, he goes out of his way to accomplish the task even i it means doing extra work and effort.',
      content:
        'If there is something that he promised to do and he does it but is not satisfied with the outcome he will not charge for it. He is available for communication and is really good in what he does. We recommend him and are looking forward to working with him in the future.'
    },
    {
      id: 2,
      star: 5.0,
      title:
        'It was a pleasure working with Metin. He was very responsive, accepting and accommodating of feedback, turned the project around very quickly and with high quality. I hope to work with Metin again in the future.',
      content: null
    },
    {
      id: 3,
      star: 5,
      title:
        "Metin has been the most wonderful freelancer I've ever worked with. His attention to details and ability to work on short notice have been great help to us. I would recommend him without any doubt",
      content: null
    }
  ]

  const size = useWindowSize()
  const mobil = size.width <= 767


  return (
    <section
      id="Testimonials"
      className={`${!props.isOpen ? 'closeResMenu' : null}`}
    >
      <section className="testimonialsContent">
        <h2>{config.testimonials.h2}</h2>
        <ul id="works">
          {props.data && props.data.map((item, index) => (
            <li key={index}>
              <div className="star">
                {Array.from({ length: item.data.star_sayisi }, (_, index) => (
                  <Star key={index} />
                ))}
                <span>{item.data.star_sayisi.toFixed(2)}</span>
              </div>
              <h3>
                "
                {`${item.data.title[0].text.slice(0, 164)}${
                  item.data.title[0].text.length > 165 && '...'
                }`}
                "
              </h3>
              <p>{item.data.content[0].text}</p>
            </li>
          ))}
        </ul>

        <button onClick={() => (location.href = props.upwork && props.upwork)}>
          Read All Testimonials!
        </button>
      </section>
      <section className="testimonialsIMG">
        <img
          src={`${!mobil ? '/testimonials.svg' : '/resTestimonials.svg'}`}
          alt="Testimonials"
        />
      </section>
    </section>
  )
}
