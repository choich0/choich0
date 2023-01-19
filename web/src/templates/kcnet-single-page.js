import 'bootstrap/dist/css/bootstrap.min.css'
import React from "react";
import { Slide } from "../components/slide2";
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
    nTitle1_11, nDate1_11, nLink1_11,
    nTitle1_12, nDate1_12, nLink1_12,
    nTitle1_13, nDate1_13, nLink1_13,
    nTitle1_14, nDate1_14, nLink1_14,
    nTitle1_15, nDate1_15, nLink1_15,
    nTitle1_16, nDate1_16, nLink1_16,
    nTitle1_17, nDate1_17, nLink1_17,
    nTitle1_18, nDate1_18, nLink1_18,
    nTitle1_19, nDate1_19, nLink1_19,
    nTitle1_20, nDate1_20, nLink1_20,
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
    nTitle2_11, nDate2_11, nLink2_11,
    nTitle2_12, nDate2_12, nLink2_12,
    nTitle2_13, nDate2_13, nLink2_13,
    nTitle2_14, nDate2_14, nLink2_14,
    nTitle2_15, nDate2_15, nLink2_15,
    nTitle2_16, nDate2_16, nLink2_16,
    nTitle2_17, nDate2_17, nLink2_17,
    nTitle2_18, nDate2_18, nLink2_18,
    nTitle2_19, nDate2_19, nLink2_19,
    nTitle2_20, nDate2_20, nLink2_20,
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
    nTitle3_11, nDate3_11, nLink3_11,
    nTitle3_12, nDate3_12, nLink3_12,
    nTitle3_13, nDate3_13, nLink3_13,
    nTitle3_14, nDate3_14, nLink3_14,
    nTitle3_15, nDate3_15, nLink3_15,
    nTitle3_16, nDate3_16, nLink3_16,
    nTitle3_17, nDate3_17, nLink3_17,
    nTitle3_18, nDate3_18, nLink3_18,
    nTitle3_19, nDate3_19, nLink3_19,
    nTitle3_20, nDate3_20, nLink3_20,
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
      >- 건설신기술 -</h3>
      <h5
        css={css`
        padding-top: 20px;
        padding-bottom: 5px;
        padding-left: 10px;
      `}
      >토목</h5>
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
      nTitle10={nTitle1_10} nDate10={nDate1_10} nLink10={nLink1_10}
      nTitle11={nTitle1_11} nDate11={nDate1_11} nLink11={nLink1_11}
      nTitle12={nTitle1_12} nDate12={nDate1_12} nLink12={nLink1_12}
      nTitle13={nTitle1_13} nDate13={nDate1_13} nLink13={nLink1_13}
      nTitle14={nTitle1_14} nDate14={nDate1_14} nLink14={nLink1_14}
      nTitle15={nTitle1_15} nDate15={nDate1_15} nLink15={nLink1_15}
      nTitle16={nTitle1_16} nDate16={nDate1_16} nLink16={nLink1_16}
      nTitle17={nTitle1_17} nDate17={nDate1_17} nLink17={nLink1_17}
      nTitle18={nTitle1_18} nDate18={nDate1_18} nLink18={nLink1_18}
      nTitle19={nTitle1_19} nDate19={nDate1_19} nLink19={nLink1_19}
      nTitle20={nTitle1_20} nDate20={nDate1_20} nLink20={nLink1_20}></Slide>
      <h5
        css={css`
        padding-top: 20px;
        padding-bottom: 5px;
        padding-left: 10px;
      `} 
      >건축</h5>
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
      nTitle10={nTitle2_10} nDate10={nDate2_10} nLink10={nLink2_10}
      nTitle11={nTitle2_11} nDate11={nDate2_11} nLink11={nLink2_11}
      nTitle12={nTitle2_12} nDate12={nDate2_12} nLink12={nLink2_12}
      nTitle13={nTitle2_13} nDate13={nDate2_13} nLink13={nLink2_13}
      nTitle14={nTitle2_14} nDate14={nDate2_14} nLink14={nLink2_14}
      nTitle15={nTitle2_15} nDate15={nDate2_15} nLink15={nLink2_15}
      nTitle16={nTitle2_16} nDate16={nDate2_16} nLink16={nLink2_16}
      nTitle17={nTitle2_17} nDate17={nDate2_17} nLink17={nLink2_17}
      nTitle18={nTitle2_18} nDate18={nDate2_18} nLink18={nLink2_18}
      nTitle19={nTitle2_19} nDate19={nDate2_19} nLink19={nLink2_19}
      nTitle20={nTitle2_20} nDate20={nDate2_20} nLink20={nLink2_20}></Slide>
      <h5
        css={css`
        padding-top: 20px;
        padding-bottom: 5px;
        padding-left: 10px;
      `} 
      >기계설비</h5>
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
      nTitle10={nTitle3_10} nDate10={nDate3_10} nLink10={nLink3_10}
      nTitle11={nTitle3_11} nDate11={nDate3_11} nLink11={nLink3_11}
      nTitle12={nTitle3_12} nDate12={nDate3_12} nLink12={nLink3_12}
      nTitle13={nTitle3_13} nDate13={nDate3_13} nLink13={nLink3_13}
      nTitle14={nTitle3_14} nDate14={nDate3_14} nLink14={nLink3_14}
      nTitle15={nTitle3_15} nDate15={nDate3_15} nLink15={nLink3_15}
      nTitle16={nTitle3_16} nDate16={nDate3_16} nLink16={nLink3_16}
      nTitle17={nTitle3_17} nDate17={nDate3_17} nLink17={nLink3_17}
      nTitle18={nTitle3_18} nDate18={nDate3_18} nLink18={nLink3_18}
      nTitle19={nTitle3_19} nDate19={nDate3_19} nLink19={nLink3_19}
      nTitle20={nTitle3_20} nDate20={nDate3_20} nLink20={nLink3_20}></Slide>
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
