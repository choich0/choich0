import React from "react"; // react 임포트
import { css } from "@emotion/react";

export function Slide(props) {
  // Slide라는 이름의 함수형 컴포넌트 선언
  const {
    nTitle1,
    nDate1,
    nLink1,
    nTitle2,
    nDate2,
    nLink2,
    nTitle3,
    nDate3,
    nLink3,
    nTitle4,
    nDate4,
    nLink4,
    nTitle5,
    nDate5,
    nLink5,
    nTitle6,
    nDate6,
    nLink6,
    nTitle7,
    nDate7,
    nLink7,
    nTitle8,
    nDate8,
    nLink8,
    nTitle9,
    nDate9,
    nLink9,
    nTitle10,
    nDate10,
    nLink10,
  } = props; // 부모 컴퍼넌트에서 전달받은 속성값 추출

  const tablecss1 = `
  text-align: center;
  border-top: 3px solid #aaa;
  border-bottom: 3px solid #aaa;
  `;

  const tablecss2 = `
  text-align: center;
  border-top: 1px solid #aaa;
  border-bottom: 1px solid #aaa;
  `;

  return (
    // 이 컴포넌트가 렌더링될 형태 변환
    <div>
      <table>
        <tr
          css={css`${tablecss1}`}
        >
          <td width="30"></td>
          <td width="750">제목</td>
          <td width="100">날짜</td>
          <td width="50">링크</td>
        </tr>
        <tr
          css={css`${tablecss2}`}
        >
          <td>1</td>
          <td>{nTitle1}</td>
          <td>{nDate1}</td>
          <td>
            <a href={nLink1}>링크</a>
          </td>
        </tr>
        <tr
          css={css`${tablecss2}`}
        >
          <td>2</td>
          <td>{nTitle2}</td>
          <td>{nDate2}</td>
          <td>
            <a href={nLink2}>링크</a>
          </td>
        </tr>
        <tr
          css={css`${tablecss2}`}
        >
          <td>3</td>
          <td>{nTitle3}</td>
          <td>{nDate3}</td>
          <td>
            <a href={nLink3}>링크</a>
          </td>
        </tr>
        <tr
          css={css`${tablecss2}`}
        >
          <td>4</td>
          <td>{nTitle4}</td>
          <td>{nDate4}</td>
          <td>
            <a href={nLink4}>링크</a>
          </td>
        </tr>
        <tr
          css={css`${tablecss2}`}
        >
          <td>5</td>
          <td>{nTitle5}</td>
          <td>{nDate5}</td>
          <td>
            <a href={nLink5}>링크</a>
          </td>
        </tr>
        <tr
          css={css`${tablecss2}`}
        >
          <td>6</td>
          <td>{nTitle6}</td>
          <td>{nDate6}</td>
          <td>
            <a href={nLink6}>링크</a>
          </td>
        </tr>
        <tr
          css={css`${tablecss2}`}
        >
          <td>7</td>
          <td>{nTitle7}</td>
          <td>{nDate7}</td>
          <td>
            <a href={nLink7}>링크</a>
          </td>
        </tr>
        <tr
          css={css`${tablecss2}`}
        >
          <td>8</td>
          <td>{nTitle8}</td>
          <td>{nDate8}</td>
          <td>
            <a href={nLink8}>링크</a>
          </td>
        </tr>
        <tr
          css={css`${tablecss2}`}
        >
          <td>9</td>
          <td>{nTitle9}</td>
          <td>{nDate9}</td>
          <td>
            <a href={nLink9}>링크</a>
          </td>
        </tr>
        <tr
          css={css`${tablecss2}`}
        >
          <td>10</td>
          <td>{nTitle10}</td>
          <td>{nDate10}</td>
          <td>
            <a href={nLink10}>링크</a>
          </td>
        </tr>
      </table>
    </div>
  );
}
