import React, { useState } from 'react'

import useWindowSize from '../utils/hook'

export default function Specialties(props) {
  const [isVisible, setVisible] = useState(0)

  const size = useWindowSize()
  const mobil = size.width <= 767

  const clickCollapse = (e) => {
    isVisible !== e ? setVisible(e) : setVisible(0)
  }

  return (
    <section
      id="Specialties"
      className={`${!props.isOpen ? 'closeResMenu' : null}`}
    >
      <section className="specialtiesIMG">
        <img
          src={props.data ? props.data[isVisible]?.data?.specialties_img.url : '/specialties.svg'}
          alt="specialties"
        />
      </section>
      <section className="specialtiesContent">
        <h2>Specialties</h2>
        <ul id="collapse">
          {props.data &&
            props.data.map((item, index) => (
              <li key={index}>
                <span
                  onClick={() => clickCollapse(index)}
                  className={isVisible === index ? 'openCollapse' : null}
                >
                  {item.data.specialties_title[0].text}
                </span>
                {isVisible === index && (
                  <p>{item.data.specialties_content[0].text}</p>
                )}
              </li>
            ))}
        </ul>
      </section>
    </section>
  )
}
