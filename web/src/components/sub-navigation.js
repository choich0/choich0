import React from "react";
import { ButtonGroup, Dropdown, DropdownButton } from "react-bootstrap";

const SubNavigation1 = () => (
  <div>
    <DropdownButton title="현장" size="lg" split variant="secondary" as={ButtonGroup}>
    <Dropdown.Item href="/">국토일보</Dropdown.Item>
    </DropdownButton>
    <DropdownButton title="운영지원실" size="lg" split variant="secondary" as={ButtonGroup}>
      <Dropdown.Item href="/">국토일보</Dropdown.Item>
    </DropdownButton>
    <DropdownButton title="기술지원실" size="lg" split variant="secondary" as={ButtonGroup}>
      <Dropdown.Item href="/">국토일보</Dropdown.Item>
    </DropdownButton>
    <DropdownButton title="PCM팀" size="lg" split variant="secondary" as={ButtonGroup}>
      <Dropdown.Item href="/">국토일보</Dropdown.Item>
    </DropdownButton>
    <DropdownButton title="CM안전경영팀" size="lg" split variant="secondary" as={ButtonGroup}>
      <Dropdown.Item href="/">국토일보</Dropdown.Item>
      <Dropdown.Item href="/team8/kosha">한국산업안전보건공단</Dropdown.Item>
    </DropdownButton>
    <DropdownButton title="프리콘사업단" size="lg" split variant="secondary" as={ButtonGroup}>
      <Dropdown.Item href="/">국토일보</Dropdown.Item>
    </DropdownButton>
    <DropdownButton title="사업1실" size="lg" split variant="secondary" as={ButtonGroup}>
      <Dropdown.Item href="/">국토일보</Dropdown.Item>
      <Dropdown.Item href="/team1/dnews">대한경제</Dropdown.Item>
      <Dropdown.Item href="/team1/molit">국토교통부</Dropdown.Item>
    </DropdownButton>
    <DropdownButton title="사업2실" size="lg" split variant="secondary" as={ButtonGroup}>
      <Dropdown.Item href="/team2/kffa">한국소방시설협회</Dropdown.Item>
      <Dropdown.Item href="/team2/keea">한국전기기술인협회</Dropdown.Item>
      <Dropdown.Item href="/team2/kacem">한국건설엔지니어링협회</Dropdown.Item>
    </DropdownButton>
    <DropdownButton title="사업3실" size="lg" split variant="secondary" as={ButtonGroup}>
      <Dropdown.Item href="/team3/ggnews">구글 뉴스</Dropdown.Item>
    </DropdownButton>
    <DropdownButton title="CM전략실" size="lg" split variant="secondary" as={ButtonGroup}>
      <Dropdown.Item href="/team4/insa">한국인사관리협회</Dropdown.Item>
      <Dropdown.Item href="/team4/work">월간노동법률</Dropdown.Item>
      <Dropdown.Item href="/team4/saram">사람인 HR매거진</Dropdown.Item>
      <Dropdown.Item href="/team4/abouthr">월간 인재경영</Dropdown.Item>
    </DropdownButton>
    <DropdownButton title="CM연구소" size="lg" split variant="secondary" as={ButtonGroup}>
    <Dropdown.Item href="/team0/koita">한국산업기술진흥협회</Dropdown.Item>
    <Dropdown.Item href="/team0/kcnet">건설신기술</Dropdown.Item>
    <Dropdown.Item href="/team0/cad">캐드앤그래픽스</Dropdown.Item>
    <Dropdown.Item href="/team0/rocm">지방국토관리청</Dropdown.Item>
    </DropdownButton>
  </div>
);

export default SubNavigation1;
