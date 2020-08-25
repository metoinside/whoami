import React, { useState } from 'react'

import useWindowSize from '../utils/hook'

export default function WhatIDid(props) {
  const size = useWindowSize()
  const mobil = size.width <= 767

  return (
    <section
      id="Speaking"
      className={`${!props.isOpen ? 'closeResMenu' : null}`}
    >
      <section className="speakingContent">
        <h2>{props.data && props.data.title[0].text}</h2>
        <p>{props.data && props.data.content[0].text}</p>
        <button
          type="submit"
          onClick={() => (location.href = `mailto:${props?.email}`)}
        >
          {props.data && props.data.title[0].text}<img src="/angleButton.svg" />
        </button>
      </section>
      <section className="didIMG">
        <img
          src={props.data ? props.data.image.url : null}
          alt="Speaking and meetings"
          width={`${mobil ? '327' : 'auto'}`}
          height={`${mobil ? '327' : 'auto'}`}
        />
      </section>
    </section>
  )
}
