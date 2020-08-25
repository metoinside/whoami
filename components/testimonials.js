import React from "react";

import config from "../config";
import Star from "./assets/star";
import useWindowSize from "../utils/hook";

export default function Testimonials(props) {
  const size = useWindowSize();
  const mobil = size.width <= 767;

  return (
    <section
      id="Testimonials"
      className={`${!props.isOpen ? "closeResMenu" : null}`}
    >
      <section className="testimonialsContent">
        <h2>{config.testimonials.h2}</h2>
        <ul id="works">
          {props.data &&
            props.data.map((item, index) => (
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
                    item.data.title[0].text.length > 165 && "..."
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
          src={`${!mobil ? "/testimonials.svg" : "/resTestimonials.svg"}`}
          alt="Testimonials"
        />
      </section>
    </section>
  );
}
