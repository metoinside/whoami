import React, { useRef, useState } from 'react'

import config from '../config'

export default function Newsletter(props) {
  const inputMail = useRef(null)
  const [message, setMessage] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    const res = await fetch('/api/subscribe', {
      body: JSON.stringify({
        email: inputMail.current.value
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })

    const { error } = await res.json()

    if (error) {
      setMessage(error)

      return
    }
    inputMail.current.value = ''
    setMessage('Success! 🎉 You are now subscribed to the newsletter.')
  }


  return (
    <section
      id="Newsletter"
      className={`${!props.isOpen ? 'closeResMenu' : null}`}
    >
      <img src="/newsletter.svg" alt="sign up to newsletter" />
      <h3>{props.data && props?.data?.title[0].text}</h3>
      <p>{props.data && props?.data?.content[0].text}</p>
      <form className="newsletterForm" onSubmit={onSubmit}>
        <input
          type="email"
          placeholder="Your email address..."
          required
          ref={inputMail}
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
        />

        <button type="submit">
          {props.data && props?.data?.button_text[0].text}<img src="/angleButton.svg" />
        </button>
      </form>
      {message
        ? message
        : null}
    </section>
  )
}
