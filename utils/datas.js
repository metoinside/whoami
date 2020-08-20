import React, { useEffect, useState } from 'react'
import Prismic from 'prismic-javascript'

const apiEndpoint = 'https://metoinside.prismic.io/api/v2'
const accessToken =
  'MC5YejJhSUJJQUFDTUFWU1lj.Ne-_vVnvv700GO-_ve-_vSAXZe-_vQHvv73vv70g77-9LO-_ve-_vWJpKVXvv73vv73vv70T77-9Hzjvv70'

const Client = Prismic.client(apiEndpoint, { accessToken })

export default function data(props) {
  const [doc, setDocData] = useState(null)
  const [value, setValue] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const response = await Client.query(
        Prismic.Predicates.any('document.type', [
          'homepage',
          'constants',
          'contact_me',
          'header',
          'homepage0',
          'my_articles',
          'testimonials',
          'what_i_did'
        ])
      )
      if (response) {

        setDocData(response.results)
      }
    }
    fetchData()
  }, [])

  // // useEffect(() => {
  // //   doc && setValue(extractData(props))
  // // }, [doc])

  // const extractData = (props) => doc.filter((item) => item.type == props)

  // if(props === "homepage"){
  //   return doc && setValue(extractData(props))
  // }

  // if(props === "homepage0"){
  //   return doc && setValue(extractData(props))
  // }

  return doc
}
