import React, { useState } from "react";

export default function About(props) {
  return (
    <section
      id="About"
      className={`${!props.isOpen ? "closeResMenu" : null}`}
      style={{ zIndex: props.isVisible ? 199 : "inherit" }}
    >
      <section className="aboutText">
        <h2>{props.data[0]?.data.baslik[0].text}</h2>
        <p>{props.data[0]?.data.about[0].text}</p>
        {props.data[0].data.button_text.length === 1 && (
          <button
            onClick={() =>
              (location.href = props.data[0]?.data.button_link[0].url)
            }
          >
            {props.data[0].data.button_text[0].type === "images" ? (
              <img
                src={
                  props.data &&
                  props.data[0]?.data.button_text[0].type !== "image"
                    ? props.data[0]?.data?.button_text[1]?.url
                    : props.data[0]?.data?.button_text[0]?.url
                }
                alt="upwork profile"
              />
            ) : props.data &&
              props.data[0]?.data?.button_text[1]?.type !== "paragraph" ? (
              props.data[0]?.data.button_text[0].text
            ) : (
              props.data[0]?.data.button_text[1].text
            )}
          </button>
        )}
        {props.data[0].data.button_text.length === 2 && (
          <button
            onClick={() =>
              (location.href = props.data[0]?.data.button_link[0].url)
            }
          >
            <img
              src={
                props.data &&
                props.data[0]?.data.button_text[0].type !== "image"
                  ? props.data[0]?.data?.button_text[1]?.url
                  : props.data[0]?.data?.button_text[0]?.url
              }
              alt="upwork profile"
            />
            {props.data &&
            props.data[0]?.data?.button_text[1]?.type !== "paragraph"
              ? props.data[0]?.data.button_text[0].text
              : props.data[0]?.data.button_text[1].text}
          </button>
        )}
      </section>
      <section
        id={props.isVisible ? "aboutVideo" : null}
        className="aboutVideo"
      >
        {!props.isVisible && (
          <img
            src={props.data[0]?.data?.profile?.url}
            className="bioPhoto"
            alt="Metin Akın"
            width="586"
            height="408"
          />
        )}
        {!props.isVisible && (
          <img
            onClick={() => props.setVisible(true)}
            src="/play.svg"
            className="playButton"
            alt="play the video"
          />
        )}
        {props.isVisible && (
          <div
            className="not"
            dangerouslySetInnerHTML={{
              __html: props.data[0]?.data.youtube_iframe[0].text,
            }}
          ></div>
        )}
      </section>
    </section>
  );
}
