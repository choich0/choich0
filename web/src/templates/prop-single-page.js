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
    nTitle2_1, nDate2_1, nLink2_1,
    nTitle2_2, nDate2_2, nLink2_2,
    nTitle2_3, nDate2_3, nLink2_3,
    nTitle2_4, nDate2_4, nLink2_4,
    nTitle2_5, nDate2_5, nLink2_5,
    nTitle2_6, nDate2_6, nLink2_6,
    nTitle2_7, nDate2_7, nLink2_7,
    nTitle2_8, nDate2_8, nLink2_8,
    nTitle2_9, nDate2_9, nLink2_9,
    nTitle2_10, nDate2_10, nLink2_10,
    nTitle3_1, nDate3_1, nLink3_1,
    nTitle3_2, nDate3_2, nLink3_2,
    nTitle3_3, nDate3_3, nLink3_3,
    nTitle3_4, nDate3_4, nLink3_4,
    nTitle3_5, nDate3_5, nLink3_5,
    nTitle3_6, nDate3_6, nLink3_6,
    nTitle3_7, nDate3_7, nLink3_7,
    nTitle3_8, nDate3_8, nLink3_8,
    nTitle3_9, nDate3_9, nLink3_9,
    nTitle3_10, nDate3_10, nLink3_10,
    nTitle4_1, nDate4_1, nLink4_1,
    nTitle4_2, nDate4_2, nLink4_2,
    nTitle4_3, nDate4_3, nLink4_3,
    nTitle4_4, nDate4_4, nLink4_4,
    nTitle4_5, nDate4_5, nLink4_5,
    nTitle4_6, nDate4_6, nLink4_6,
    nTitle4_7, nDate4_7, nLink4_7,
    nTitle4_8, nDate4_8, nLink4_8,
    nTitle4_9, nDate4_9, nLink4_9,
    nTitle4_10, nDate4_10, nLink4_10,
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
      >- 부동산 -</h3>
      <h5
        css={css`
        padding-top: 20px;
        padding-bottom: 5px;
        padding-left: 10px;
      `}
      >매일경제</h5>
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
      >파이낸셜뉴스</h5>
      <Slide 
      nTitle1={nTitle2_1} nDate1={nDate2_1} nLink1={nLink2_1}
      nTitle2={nTitle2_2} nDate2={nDate2_2} nLink2={nLink2_2}
      nTitle3={nTitle2_3} nDate3={nDate2_3} nLink3={nLink2_3}
      nTitle4={nTitle2_4} nDate4={nDate2_4} nLink4={nLink2_4}
      nTitle5={nTitle2_5} nDate5={nDate2_5} nLink5={nLink2_5}
      nTitle6={nTitle2_6} nDate6={nDate2_6} nLink6={nLink2_6}
      nTitle7={nTitle2_7} nDate7={nDate2_7} nLink7={nLink2_7}
      nTitle8={nTitle2_8} nDate8={nDate2_8} nLink8={nLink2_8}
      nTitle9={nTitle2_9} nDate9={nDate2_9} nLink9={nLink2_9}
      nTitle10={nTitle2_10} nDate10={nDate2_10} nLink10={nLink2_10}></Slide>
      <h5
        css={css`
        padding-top: 20px;
        padding-bottom: 5px;
        padding-left: 10px;
      `} 
      >국토일보</h5>
      <Slide 
      nTitle1={nTitle3_1} nDate1={nDate3_1} nLink1={nLink3_1}
      nTitle2={nTitle3_2} nDate2={nDate3_2} nLink2={nLink3_2}
      nTitle3={nTitle3_3} nDate3={nDate3_3} nLink3={nLink3_3}
      nTitle4={nTitle3_4} nDate4={nDate3_4} nLink4={nLink3_4}
      nTitle5={nTitle3_5} nDate5={nDate3_5} nLink5={nLink3_5}
      nTitle6={nTitle3_6} nDate6={nDate3_6} nLink6={nLink3_6}
      nTitle7={nTitle3_7} nDate7={nDate3_7} nLink7={nLink3_7}
      nTitle8={nTitle3_8} nDate8={nDate3_8} nLink8={nLink3_8}
      nTitle9={nTitle3_9} nDate9={nDate3_9} nLink9={nLink3_9}
      nTitle10={nTitle3_10} nDate10={nDate3_10} nLink10={nLink3_10}></Slide>
      <h5
        css={css`
        padding-top: 20px;
        padding-bottom: 5px;
        padding-left: 10px;
      `} 
      >대한경제</h5>
      <Slide 
      nTitle1={nTitle4_1} nDate1={nDate4_1} nLink1={nLink4_1}
      nTitle2={nTitle4_2} nDate2={nDate4_2} nLink2={nLink4_2}
      nTitle3={nTitle4_3} nDate3={nDate4_3} nLink3={nLink4_3}
      nTitle4={nTitle4_4} nDate4={nDate4_4} nLink4={nLink4_4}
      nTitle5={nTitle4_5} nDate5={nDate4_5} nLink5={nLink4_5}
      nTitle6={nTitle4_6} nDate6={nDate4_6} nLink6={nLink4_6}
      nTitle7={nTitle4_7} nDate7={nDate4_7} nLink7={nLink4_7}
      nTitle8={nTitle4_8} nDate8={nDate4_8} nLink8={nLink4_8}
      nTitle9={nTitle4_9} nDate9={nDate4_9} nLink9={nLink4_9}
      nTitle10={nTitle4_10} nDate10={nDate4_10} nLink10={nLink4_10}></Slide>
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
