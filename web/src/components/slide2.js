import React from "react"; // react 임포트
import { css } from "@emotion/react";

export function Slide(props) {
  // Slide라는 이름의 함수형 컴포넌트 선언
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
    nTitle11, nDate11, nLink11,
    nTitle12, nDate12, nLink12,
    nTitle13, nDate13, nLink13,
    nTitle14, nDate14, nLink14,
    nTitle15, nDate15, nLink15,
    nTitle16, nDate16, nLink16,
    nTitle17, nDate17, nLink17,
    nTitle18, nDate18, nLink18,
    nTitle19, nDate19, nLink19,
    nTitle20, nDate20, nLink20,
  } = props; // 부모 컴퍼넌트에서 전달받은 속성값 추출

  const tablecss1 = `
  text-align: center;
  border-top: 3px solid #aaa;
  border-bottom: 3px solid #aaa;
  width: 100%
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
          <td width="50">#</td>
          <td width="750">제목</td>
          <td width="100">날짜</td>
          <td width="100">링크</td>
        </tr>
        <tr
          css={css`${tablecss2}`}
        >
          <td>1</td>
          <td align="left">{nTitle1}</td>
          <td>{nDate1}</td>
          <td>
            <a href={nLink1} target="_blank" rel="noopener noreferrer">링크</a>
          </td>
        </tr>
        <tr
          css={css`${tablecss2}`}
        >
          <td>2</td>
          <td align="left">{nTitle2}</td>
          <td>{nDate2}</td>
          <td>
            <a href={nLink2} target="_blank" rel="noopener noreferrer">링크</a>
          </td>
        </tr>
        <tr
          css={css`${tablecss2}`}
        >
          <td>3</td>
          <td align="left">{nTitle3}</td>
          <td>{nDate3}</td>
          <td>
            <a href={nLink3} target="_blank" rel="noopener noreferrer">링크</a>
          </td>
        </tr>
        <tr
          css={css`${tablecss2}`}
        >
          <td>4</td>
          <td align="left">{nTitle4}</td>
          <td>{nDate4}</td>
          <td>
            <a href={nLink4} target="_blank" rel="noopener noreferrer">링크</a>
          </td>
        </tr>
        <tr
          css={css`${tablecss2}`}
        >
          <td>5</td>
          <td align="left">{nTitle5}</td>
          <td>{nDate5}</td>
          <td>
            <a href={nLink5} target="_blank" rel="noopener noreferrer">링크</a>
          </td>
        </tr>
        <tr
          css={css`${tablecss2}`}
        >
          <td>6</td>
          <td align="left">{nTitle6}</td>
          <td>{nDate6}</td>
          <td>
            <a href={nLink6} target="_blank" rel="noopener noreferrer">링크</a>
          </td>
        </tr>
        <tr
          css={css`${tablecss2}`}
        >
          <td>7</td>
          <td align="left">{nTitle7}</td>
          <td>{nDate7}</td>
          <td>
            <a href={nLink7} target="_blank" rel="noopener noreferrer">링크</a>
          </td>
        </tr>
        <tr
          css={css`${tablecss2}`}
        >
          <td>8</td>
          <td align="left">{nTitle8}</td>
          <td>{nDate8}</td>
          <td>
            <a href={nLink8} target="_blank" rel="noopener noreferrer">링크</a>
          </td>
        </tr>
        <tr
          css={css`${tablecss2}`}
        >
          <td>9</td>
          <td align="left">{nTitle9}</td>
          <td>{nDate9}</td>
          <td>
            <a href={nLink9} target="_blank" rel="noopener noreferrer">링크</a>
          </td>
        </tr>
        <tr
          css={css`${tablecss2}`}
        >
          <td>10</td>
          <td align="left">{nTitle10}</td>
          <td>{nDate10}</td>
          <td>
            <a href={nLink10} target="_blank" rel="noopener noreferrer">링크</a>
          </td>
        </tr>
        <tr
          css={css`${tablecss2}`}
        >
          <td>11</td>
          <td align="left">{nTitle11}</td>
          <td>{nDate11}</td>
          <td>
            <a href={nLink11} target="_blank" rel="noopener noreferrer">링크</a>
          </td>
        </tr>
        <tr
          css={css`${tablecss2}`}
        >
          <td>12</td>
          <td align="left">{nTitle12}</td>
          <td>{nDate12}</td>
          <td>
            <a href={nLink12} target="_blank" rel="noopener noreferrer">링크</a>
          </td>
        </tr>
        <tr
          css={css`${tablecss2}`}
        >
          <td>13</td>
          <td align="left">{nTitle13}</td>
          <td>{nDate13}</td>
          <td>
            <a href={nLink13} target="_blank" rel="noopener noreferrer">링크</a>
          </td>
        </tr>
        <tr
          css={css`${tablecss2}`}
        >
          <td>14</td>
          <td align="left">{nTitle14}</td>
          <td>{nDate14}</td>
          <td>
            <a href={nLink14} target="_blank" rel="noopener noreferrer">링크</a>
          </td>
        </tr>
        <tr
          css={css`${tablecss2}`}
        >
          <td>15</td>
          <td align="left">{nTitle15}</td>
          <td>{nDate15}</td>
          <td>
            <a href={nLink15} target="_blank" rel="noopener noreferrer">링크</a>
          </td>
        </tr>
        <tr
          css={css`${tablecss2}`}
        >
          <td>16</td>
          <td align="left">{nTitle16}</td>
          <td>{nDate16}</td>
          <td>
            <a href={nLink16} target="_blank" rel="noopener noreferrer">링크</a>
          </td>
        </tr>
        <tr
          css={css`${tablecss2}`}
        >
          <td>17</td>
          <td align="left">{nTitle17}</td>
          <td>{nDate17}</td>
          <td>
            <a href={nLink17} target="_blank" rel="noopener noreferrer">링크</a>
          </td>
        </tr>
        <tr
          css={css`${tablecss2}`}
        >
          <td>18</td>
          <td align="left">{nTitle18}</td>
          <td>{nDate18}</td>
          <td>
            <a href={nLink18} target="_blank" rel="noopener noreferrer">링크</a>
          </td>
        </tr>
        <tr
          css={css`${tablecss2}`}
        >
          <td>19</td>
          <td align="left">{nTitle19}</td>
          <td>{nDate19}</td>
          <td>
            <a href={nLink19} target="_blank" rel="noopener noreferrer">링크</a>
          </td>
        </tr>
        <tr
          css={css`${tablecss2}`}
        >
          <td>20</td>
          <td align="left">{nTitle20}</td>
          <td>{nDate20}</td>
          <td>
            <a href={nLink20} target="_blank" rel="noopener noreferrer">링크</a>
          </td>
        </tr>
      </table>
    </div>
  );
}
