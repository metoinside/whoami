import React from 'react'
import config from '../config'

export default function Footer() {
  return (
    <footer>
      <h5>{config.footer.copright}</h5>
      <nav>
        <ul className="social">
          <li>
            <a href={config.facebook}>
              <img src="/facebook.svg" alt="Facebook profile" />
            </a>
          </li>
          <li>
            <a href={config.twitter}>
              <img src="/twitter.svg" alt="Twitter profile" />
            </a>
          </li>
          <li>
            <a href={config.instagram}>
              <img src="/instagram.svg" alt="Instagram profile" />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  )
}
