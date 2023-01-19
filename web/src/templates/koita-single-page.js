import 'bootstrap/dist/css/bootstrap.min.css'
import React from "react";
import { Slide } from "../components/slide";
import { css } from '@emotion/react'
import SubNavigation from '../components/sub-navigation';

export default function SinglePage({ pageContext }) {
  const { dataSource } = pageContext;  
  const {
    nTitle1_1, nDate1_1, nLink1_1,
    nTitle1_2, nDate1_2, nLink1_2,
    nTitle1_3, nDate1_3, nLink1_3,
    nTitle1_4, nDate1_4, nLink1_4,
    nTitle1_5, nDate1_5, nLink1_5,
    nTitle1_6, nDate1_6, nLink1_6,
    nTitle1_7, nDate1_7, nLink1_7,
    nTitle1_8, nDate1_8, nLink1_8,
    nTitle1_9, nDate1_9, nLink1_9,
    nTitle1_10, nDate1_10, nLink1_10,
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
          height: 190px;
          z-index: -99;
        `}
      />
      <h5
        css={css`
        padding-top: 10px;
        padding-right: 10px;
        color: white;
        text-align: right;
        font-size: 20px;
      `} 
      >
        JUNGLIM CM
      </h5>
      <h1
        css={css`
        padding-top: 20px;
        padding-bottom: 24px;
        color: white;
        text-align: center;
        font-size: 40px;
      `} 
      >
        뉴스 정리미
      </h1>
      <p className="text-center text-white"
        css={css`
        color: white;
        text-align: center;
      `}
      >
        마지막 업데이트: {lastUpdatedFormatted}
      </p>
      <SubNavigation/>
      <h3
        css={css`
        padding-top: 30px;
        font-size: 30px;
        font-weight: 900;
        padding-left: 10px;
      `} 
      >- 한국산업기술진흥협회 -</h3>
      <h5
        css={css`
        padding-top: 20px;
        padding-bottom: 5px;
        padding-left: 10px;
      `}
      >공지사항</h5>
      <Slide 
      nTitle1={nTitle1_1} nDate1={nDate1_1} nLink1={nLink1_1}
      nTitle2={nTitle1_2} nDate2={nDate1_2} nLink2={nLink1_2}
      nTitle3={nTitle1_3} nDate3={nDate1_3} nLink3={nLink1_3}
      nTitle4={nTitle1_4} nDate4={nDate1_4} nLink4={nLink1_4}
      nTitle5={nTitle1_5} nDate5={nDate1_5} nLink5={nLink1_5}
      nTitle6={nTitle1_6} nDate6={nDate1_6} nLink6={nLink1_6}
      nTitle7={nTitle1_7} nDate7={nDate1_7} nLink7={nLink1_7}
      nTitle8={nTitle1_8} nDate8={nDate1_8} nLink8={nLink1_8}
      nTitle9={nTitle1_9} nDate9={nDate1_9} nLink9={nLink1_9}
      nTitle10={nTitle1_10} nDate10={nDate1_10} nLink10={nLink1_10}></Slide>
      <h5
        css={css`
        padding-top: 20px;
        padding-bottom: 5px;
        padding-left: 10px;
      `} 
      >                                       </h5>
    </div>
  );
}
