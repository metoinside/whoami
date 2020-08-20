import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Prismic from 'prismic-javascript'

import Header from './header'
import About from './about'
import Specialties from './specialties'
import Testimonials from './testimonials'
import Newsletter from './newsletter'
import WhatIDid from './whatIdid'
import MyArticles from './myArticles'
import Contact from './contact'
import Speaking from './speaking'
import Footer from './footer'

const apiEndpoint = 'https://metoinside.prismic.io/api/v2'
const accessToken =
  'MC5YejJhSUJJQUFDTUFWU1lj.Ne-_vVnvv700GO-_ve-_vSAXZe-_vQHvv73vv70g77-9LO-_ve-_vWJpKVXvv73vv73vv70T77-9Hzjvv70'

const Client = Prismic.client(apiEndpoint, { accessToken })

function Layout() {
  const [isOpen, setOpen] = useState(false)
  const [data, setData] = useState(null)
  const [load, setLoad] = useState(true)
  const [constants, setConstants] = useState(null)
  const [isVisible, setVisible] = useState(false)

  const fetchData = async () => {
    const response = await Client.query(
      Prismic.Predicates.any('document.type', [
        'homepage',
        'constants',
        'contact_me',
        'header',
        'homepage0',
        'my_articles',
        'speaking',
        'newsletter',
        'testimonials',
        'what_i_did'
      ])
    )
    if (response) {
      setData(response.results)
      setConstants(response.results.filter((item) => item.type == 'constants'))
      setLoad(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (isVisible) {
    return (
      <div id="fullWidthVideo">
        <Head>
          <title>
            {!load ? !load && constants[0]?.data?.title[0]?.text : 'Metin akın'}
          </title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta
            name="title"
            content={
              !load ? !load && constants[0]?.data?.title[0]?.text : 'Metin akın'
            }
          />
          <meta
            name="description"
            content={!load && constants[0]?.data?.description[0]?.text}
          />
          <meta
            name="keywords"
            content={!load && constants[0]?.data?.keywords[0]?.text}
          />
          <meta property="og:url" content="http://metoinside.com/" />
          <meta property="og:type" content="profile" />
          <meta
            property="og:description"
            content={!load && constants[0]?.data?.description[0]?.text}
          />
          <meta
            property="og:image"
            content={!load && constants[0]?.data?.profil_photo?.url}
          />
        </Head>
        <div
          className="not"
          dangerouslySetInnerHTML={{
            __html:
              !load &&
              data?.filter((item) => item.type == 'homepage')[0]?.data
                .youtube_iframe[0].text
          }}
        ></div>
        <span onClick={() => setVisible(!isVisible)}>X</span>
      </div>
    )
  } else {
    return (
      <div id="index">
        <Head>
          <title>
            {!load ? !load && constants[0]?.data?.title[0]?.text : 'Metin akın'}
          </title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta
            name="title"
            content={
              !load ? !load && constants[0]?.data?.title[0]?.text : 'Metin akın'
            }
          />
          <meta
            name="description"
            content={!load && constants[0]?.data?.description[0]?.text}
          />
          <meta
            name="keywords"
            content={!load && constants[0]?.data?.keywords[0]?.text}
          />
          <meta property="og:url" content="http://metoinside.com/" />
          <meta property="og:type" content="profile" />
          <meta
            property="og:description"
            content={!load && constants[0]?.data?.description[0]?.text}
          />
          <meta
            property="og:image"
            content={!load && constants[0]?.data?.profil_photo?.url}
          />
        </Head>
        {!isVisible && <Header isOpen={isOpen} setOpen={setOpen} />}
        <About
          isOpen={isOpen}
          data={!load && data?.filter((item) => item.type == 'homepage')}
          isVisible={isVisible}
          setVisible={setVisible}
        />
        <Specialties
          data={!load && data?.filter((item) => item.type == 'homepage0')}
        />
        <WhatIDid
          data={!load && data?.filter((item) => item.type == 'what_i_did')}
        />
        <Newsletter
          data={
            !load && data?.filter((item) => item.type == 'newsletter')[0]?.data
          }
        />
        <Testimonials
          data={!load && data?.filter((item) => item.type == 'testimonials')}
          upwork={constants && constants[0].data.upwork}
        />
        <MyArticles medium={constants && constants[0]?.data.medium} />
        <Speaking
          email={!load && constants[0]?.data?.email}
          data={
            !load && data?.filter((item) => item.type == 'speaking')[0]?.data
          }
        />
        <Contact
          data={
            !load && data?.filter((item) => item.type == 'contact_me')[0]?.data
          }
        />
        <Footer />
      </div>
    )
  }
}
export default Layout
