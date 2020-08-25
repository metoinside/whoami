import React, { useEffect, useState } from "react";
import Head from "next/head";
import Prismic from "prismic-javascript";
import { Preloader, Puff } from "react-preloader-icon";

import Header from "./header";
import About from "./about";
import Specialties from "./specialties";
import Testimonials from "./testimonials";
import Newsletter from "./newsletter";
import WhatIDid from "./whatIdid";
import MyArticles from "./myArticles";
import Contact from "./contact";
import Speaking from "./speaking";
import Footer from "./footer";

const apiEndpoint = process.env.PRISMIC_WEB_API;
const accessToken = process.env.PRISMIC_API_KEY;

const Client = Prismic.client(apiEndpoint, { accessToken });

function Layout() {
  const [isOpen, setOpen] = useState(false);
  const [data, setData] = useState(null);
  const [load, setLoad] = useState(true);
  const [constants, setConstants] = useState(null);
  const [isVisible, setVisible] = useState(false);

  const fetchData = async () => {
    const response = await Client.query(
      Prismic.Predicates.any("document.type", [
        "homepage",
        "constants",
        "contact_me",
        "header",
        "homepage0",
        "my_articles",
        "speaking",
        "newsletter",
        "testimonials",
        "what_i_did",
      ])
    );
    if (response) {
      setData(response.results);
      console.log(response.results);
      response.results.length !== 0 &&
        setConstants(
          response.results.filter((item) => item.type == "constants")
        );
      setLoad(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (load) {
    return (
      <>
        <Head>
          <title>
            {(constants && constants[0]?.data?.title[0]?.text) || "Metin Akın"}
          </title>
        </Head>
        <Preloader
          use={Puff}
          size={90}
          strokeWidth={5}
          strokeColor="#000"
          duration={2000}
        />
      </>
    );
  }

  if (isVisible) {
    return (
      <div id="fullWidthVideo">
        <Head>
          <title>
            {(constants && constants && constants[0]?.data?.title[0]?.text) ||
              "Metin akın"}
          </title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta
            name="title"
            content={
              (constants && constants && constants[0]?.data?.title[0]?.text) ||
              "Metin akın"
            }
          />
          <meta
            name="description"
            content={constants && constants[0]?.data?.description[0]?.text}
          />
          <meta
            name="keywords"
            content={constants && constants[0]?.data?.keywords[0]?.text}
          />
          <meta property="og:url" content="http://metoinside.com/" />
          <meta property="og:type" content="profile" />
          <meta
            property="og:description"
            content={constants && constants[0]?.data?.description[0]?.text}
          />
          <meta
            property="og:image"
            content={constants && constants[0]?.data?.profil_photo?.url}
          />
        </Head>
        <div
          className="not"
          dangerouslySetInnerHTML={{
            __html:
              !load &&
              data?.filter((item) => item.type == "homepage")[0]?.data
                .youtube_iframe[0].text,
          }}
        ></div>
        <span onClick={() => setVisible(!isVisible)}>X</span>
      </div>
    );
  } else {
    return (
      <div id="index">
        <Head>
          <title>
          {(constants && constants && constants[0]?.data?.title[0]?.text) ||
              "Metin akın"}
          </title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta
            name="title"
            content={
              !load
                ? constants && constants[0]?.data?.title[0]?.text
                : "Metin akın"
            }
          />
          <meta
            name="description"
            content={constants && constants[0]?.data?.description[0]?.text}
          />
          <meta
            name="keywords"
            content={constants && constants[0]?.data?.keywords[0]?.text}
          />
          <meta property="og:url" content="http://metoinside.com/" />
          <meta property="og:type" content="profile" />
          <meta
            property="og:description"
            content={constants && constants[0]?.data?.description[0]?.text}
          />
          <meta
            property="og:image"
            content={constants && constants[0]?.data?.profil_photo?.url}
          />
        </Head>
        {!isVisible && (
          <Header
            isOpen={isOpen}
            setOpen={setOpen}
            constants={constants && constants[0].data}
          />
        )}
        <About
          isOpen={isOpen}
          data={!load && data?.filter((item) => item.type == "homepage")}
          isVisible={isVisible}
          setVisible={setVisible}
        />
        <Specialties
          data={!load && data?.filter((item) => item.type == "homepage0")}
        />
        <WhatIDid
          data={!load && data?.filter((item) => item.type == "what_i_did")}
        />
        <Newsletter
          data={
            !load && data?.filter((item) => item.type == "newsletter")[0]?.data
          }
        />
        <Testimonials
          data={!load && data?.filter((item) => item.type == "testimonials")}
          upwork={constants && constants[0].data.upwork}
        />
        <MyArticles
          data={!load && data?.filter((item) => item.type == "my_articles")}
          medium={constants && constants[0]?.data.medium}
        />
        <Speaking
          email={constants && constants[0]?.data?.email}
          data={
            !load && data?.filter((item) => item.type == "speaking")[0]?.data
          }
        />
        <Contact
          data={
            !load && data?.filter((item) => item.type == "contact_me")[0]?.data
          }
        />
        <Footer constants={constants && constants[0].data} />
      </div>
    );
  }
}
export default Layout;
