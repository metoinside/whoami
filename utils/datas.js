import React, { useEffect, useState } from "react";
import Prismic from "prismic-javascript";

const apiEndpoint = process.env.PRISMIC_WEB_API;
const accessToken = process.env.PRISMIC_API_KEY;

const Client = Prismic.client(apiEndpoint, { accessToken });

export default function data(props) {
  const [doc, setDocData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await Client.query(
        Prismic.Predicates.any("document.type", [
          "homepage",
          "constants",
          "contact_me",
          "header",
          "homepage0",
          "my_articles",
          "testimonials",
          "what_i_did",
        ])
      );
      if (response) {
        setDocData(response.results);
      }
    };
    fetchData();
  }, []);

  return doc;
}
