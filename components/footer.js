import React from "react";
import config from "../config";
export default function Footer(props) {
  var data = props.constants;
  return (
    <footer>
      <h5>{data ? data.footer_text[0].text : config.footer.copright}</h5>
      <nav>
        <ul className="social">
          <li>
            <a href={data ? data.facebook : config.facebook}>
              <img src="/facebook.svg" alt="Facebook profile" />
            </a>
          </li>
          <li>
            <a href={data ? data.twitter : config.twitter}>
              <img src="/twitter.svg" alt="Twitter profile" />
            </a>
          </li>
          <li>
            <a href={data ? data.instagram : config.instagram}>
              <img src="/instagram.svg" alt="Instagram profile" />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
