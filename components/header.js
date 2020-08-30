import React from "react";
import Scrollchor from "react-scrollchor";

import config from "../config";
import useWindowSize from "../utils/hook";

export default function Header(props) {
  const size = useWindowSize();
  const mobil = size.width <= 767;

  var data = props.constants;

  const closeMenu = () => props.setOpen(false);

  return (
    <header>
      <div className="header">
        {mobil && !props.isOpen ? (
          <div onClick={() => props.setOpen(true)} className="openMenu"></div>
        ) : (
          mobil && (
            <div
              onClick={() => props.setOpen(false)}
              className="closeMenu"
            ></div>
          )
        )}
        <h1>
          <a href="/">{data.logo[0].text ? data.logo[0].text : "Metin Akın"}</a>
        </h1>
        {mobil && props.isOpen ? (
          <nav className="mobil">
            <ul>
              <li>
                <a href="/">HOME</a>
              </li>
              <li>
                <Scrollchor to="#Specialties" beforeAnimate={closeMenu}>
                  SPECIALTES
                </Scrollchor>
              </li>
              <li>
                <Scrollchor to="#Testimonials" beforeAnimate={closeMenu}>
                  TESTIMONIALS
                </Scrollchor>
              </li>
              <li>
                <Scrollchor to="#WhatIDid" beforeAnimate={closeMenu}>
                  WHAT I DID
                </Scrollchor>
              </li>
              <li>
                <Scrollchor to="#Articles" beforeAnimate={closeMenu}>
                  BLOG
                </Scrollchor>
              </li>
              <li>
                <Scrollchor to="#Contact" beforeAnimate={closeMenu}>
                  CONTACT ME
                </Scrollchor>
              </li>
            </ul>
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
        ) : (
          <nav>
            <ul>
              <li>
                <a href="/">HOME</a>
              </li>
              <li>
                <Scrollchor to="#Specialties">SPECIALTES</Scrollchor>
              </li>
              <li>
                <Scrollchor to="#Testimonials">TESTIMONIALS</Scrollchor>
              </li>
              <li>
                <Scrollchor to="#WhatIDid">WHAT I DID</Scrollchor>
              </li>
              <li>
                <Scrollchor to="#Articles">BLOG</Scrollchor>
              </li>
              <li>
                <Scrollchor to="#Contact">CONTACT ME</Scrollchor>
              </li>
            </ul>
            <span>.</span>
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
        )}
      </div>
    </header>
  );
}
