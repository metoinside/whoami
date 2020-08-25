import React, { useState, useRef } from 'react'

import useWindowSize from '../utils/hook'

export default function WhatIDid(props) {
  const email = useRef()
  const name = useRef()
  const surname = useRef()
  const message = useRef()
  const subject = useRef()

  const [sentMessage, setSentMessage] = useState(null)

  const size = useWindowSize()
  const mobil = size.width <= 767

  const onSubmit = async (e) => {
    e.preventDefault()
    let sonData = {
      email: email.current.value,
      name: name.current.value,
      surname: surname.current.value,
      message: message.current.value,
      subject: subject.current.value
    }
    const res = await fetch('/api/sendMail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(sonData)
    })
    const text = await res.text()
    setSentMessage(text)
  }

  return (
    <section
      id="Contact"
      className={`${!props.isOpen ? 'closeResMenu' : null}`}
    >
      <section className="didIMG">
        <img
          src={props.data ? props.data.image.url : null}
          alt="Contat me"
          width={`${mobil ? '327' : 'auto'}`}
          height={`${mobil ? '327' : 'auto'}`}
        />
      </section>
      <section className="contactContent">
        <h2>{props.data && props.data.title[0].text}</h2>
        <p>{props.data && props.data.content[0].text}</p>
        <form onSubmit={onSubmit}>
          <input type="text" placeholder="Name" required ref={name} />
          <input type="text" placeholder="Surname" ref={surname} />
          <input
            type="email"
            placeholder="Email"
            required
            ref={email}
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          />
          <input type="text" placeholder="Subject" ref={subject} />
          <textarea rows="3" placeholder="Message" required ref={message} />
          <button type="submit">
            {props.data && props.data.button[0].text}{' '}
            <img src="/angleButton.svg" />
          </button>
        </form>
        {sentMessage && sentMessage}
      </section>
    </section>
  )
}
