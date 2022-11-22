import 'bootstrap/dist/css/bootstrap.min.css'
import React from "react";
import { Slide } from "../components/slide";
import { css } from '@emotion/react'

export default function SinglePage({ pageContext }) {
  const { dataSource } = pageContext;  
  const {
    nTitle1, nDate1, nLink1,
    nTitle2, nDate2, nLink2,
    nTitle3, nDate3, nLink3,
    nTitle4, nDate4, nLink4,
    nTitle5, nDate5, nLink5,
    nTitle6, nDate6, nLink6,
    nTitle7, nDate7, nLink7,
    nTitle8, nDate8, nLink8,
    nTitle9, nDate9, nLink9,
    nTitle10, nDate10, nLink10,
    lastUpdated,
  } = dataSource;
  const lastUpdatedFormatted = new Date(lastUpdated).toLocaleString();

  return (
    <div id="top">
      <div
        css={css`
          position: absolute;
          background-color: black;
          width: 100%;
          height: 180px;
          z-index: -99;
        `}
      />
      <h1
        css={css`
        padding-top: 48px;
        padding-bottom: 24px;
        color: white;
        text-align: center;
        font-size: 40px;
      `} 
      >
        News Crawler
      </h1>
      <p className="text-center text-white">
        마지막 업데이트: {lastUpdatedFormatted}
      </p>
      <h3
        css={css`
        padding-top: 30px;
        padding-bottom: 15px;
        color: black;
        text-align: left;
        font-size: 30px;
      `} 
      >한국건설엔지니어링협회</h3>
      <Slide 
      nTitle1={nTitle1} nDate1={nDate1} nLink1={nLink1}
      nTitle2={nTitle2} nDate2={nDate2} nLink2={nLink2}
      nTitle3={nTitle3} nDate3={nDate3} nLink3={nLink3}
      nTitle4={nTitle4} nDate4={nDate4} nLink4={nLink4}
      nTitle5={nTitle5} nDate5={nDate5} nLink5={nLink5}
      nTitle6={nTitle6} nDate6={nDate6} nLink6={nLink6}
      nTitle7={nTitle7} nDate7={nDate7} nLink7={nLink7}
      nTitle8={nTitle8} nDate8={nDate8} nLink8={nLink8}
      nTitle9={nTitle9} nDate9={nDate9} nLink9={nLink9}
      nTitle10={nTitle10} nDate10={nDate10} nLink10={nLink10}></Slide>
    </div>
  );
}
