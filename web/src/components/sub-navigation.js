import React from "react";
import { ButtonGroup, Dropdown, DropdownButton } from "react-bootstrap";

const SubNavigation1 = () => (
  <div>
    <DropdownButton title="현장" size="lg" split variant="secondary" as={ButtonGroup}>
      <Dropdown.Item href="/newscrawler/">국토일보</Dropdown.Item>
      <Dropdown.Item href="/newscrawler/anc">건축사신문</Dropdown.Item>
      <Dropdown.Item href="/newscrawler/poicy">건설정책</Dropdown.Item>
      <Dropdown.Item href="/newscrawler/fire">소방</Dropdown.Item>
      <Dropdown.Item href="/newscrawler/kosha">건설안전재해</Dropdown.Item>
      <Dropdown.Item href="/newscrawler/kcnet">건설신기술</Dropdown.Item>
      <Dropdown.Item href="/newscrawler/prop">부동산</Dropdown.Item>
      <Dropdown.Item href="/newscrawler/molit">국토교통부</Dropdown.Item>
      <Dropdown.Item href="/newscrawler/rocm">지방국토관리청</Dropdown.Item>
      <Dropdown.Item href="/newscrawler/lawmk">국민참여입법센터</Dropdown.Item>
    </DropdownButton>
    <DropdownButton title="운영지원실" size="lg" split variant="secondary" as={ButtonGroup}>
      <Dropdown.Item href="/newscrawler/molit">국토교통부</Dropdown.Item>
      <Dropdown.Item href="/newscrawler/kacem">한국건설엔지니어링협회</Dropdown.Item>
      <Dropdown.Item href="/newscrawler/poicy">건설정책</Dropdown.Item>
      <Dropdown.Item href="/newscrawler/">국토일보</Dropdown.Item>
      <Dropdown.Item href="/newscrawler/kosha">건설안전재해</Dropdown.Item>
    </DropdownButton>
    <DropdownButton title="기술지원실" size="lg" split variant="secondary" as={ButtonGroup}>
      <Dropdown.Item href="/newscrawler/">국토일보</Dropdown.Item>
      <Dropdown.Item href="/newscrawler/kcnet">건설신기술</Dropdown.Item>
      <Dropdown.Item href="/newscrawler/kffa">한국소방시설협회</Dropdown.Item>
      <Dropdown.Item href="/newscrawler/keea">한국전기기술인협회</Dropdown.Item>
    </DropdownButton>
    <DropdownButton title="PCM팀" size="lg" split variant="secondary" as={ButtonGroup}>
      <Dropdown.Item href="/newscrawler/">국토일보</Dropdown.Item>
      <Dropdown.Item href="/newscrawler/poicy">건설정책</Dropdown.Item>
      <Dropdown.Item href="/newscrawler/prop">부동산</Dropdown.Item>
      <Dropdown.Item href="/newscrawler/kosha">건설안전재해</Dropdown.Item>
    </DropdownButton>
    <DropdownButton title="CM안전경영팀" size="lg" split variant="secondary" as={ButtonGroup}>
      <Dropdown.Item href="/newscrawler/">국토일보</Dropdown.Item>
      <Dropdown.Item href="/newscrawler/kosha">건설안전재해</Dropdown.Item>
    </DropdownButton>
    <DropdownButton title="프리콘사업단" size="lg" split variant="secondary" as={ButtonGroup}>
      <Dropdown.Item href="/newscrawler/">국토일보</Dropdown.Item>
    </DropdownButton>
    <DropdownButton title="사업1실" size="lg" split variant="secondary" as={ButtonGroup}>
      <Dropdown.Item href="/newscrawler/">국토일보</Dropdown.Item>
      <Dropdown.Item href="/newscrawler/dnews">대한경제</Dropdown.Item>
      <Dropdown.Item href="/newscrawler/molit">국토교통부</Dropdown.Item>
      <Dropdown.Item href="/newscrawler/kffa">한국소방시설협회</Dropdown.Item>
      <Dropdown.Item href="/newscrawler/keea">한국전기기술인협회</Dropdown.Item>
      <Dropdown.Item href="/newscrawler/kacem">한국건설엔지니어링협회</Dropdown.Item>
    </DropdownButton>
    <DropdownButton title="사업2실" size="lg" split variant="secondary" as={ButtonGroup}>
    <Dropdown.Item href="/newscrawler/">국토일보</Dropdown.Item>
      <Dropdown.Item href="/newscrawler/poicy">건설정책</Dropdown.Item>
      <Dropdown.Item href="/newscrawler/prop">부동산</Dropdown.Item>
    </DropdownButton>
    <DropdownButton title="사업3실" size="lg" split variant="secondary" as={ButtonGroup}>
      <Dropdown.Item href="/newscrawler/ggnews">구글 뉴스</Dropdown.Item>
    </DropdownButton>
    <DropdownButton title="CM전략실" size="lg" split variant="secondary" as={ButtonGroup}>
      <Dropdown.Item href="/newscrawler/insa">한국인사관리협회</Dropdown.Item>
      <Dropdown.Item href="/newscrawler/saram">사람인 HR매거진</Dropdown.Item>
      <Dropdown.Item href="/newscrawler/abouthr">월간 인재경영</Dropdown.Item>
    </DropdownButton>
    <DropdownButton title="CM연구소" size="lg" split variant="secondary" as={ButtonGroup}>
      <Dropdown.Item href="/newscrawler/koita">한국산업기술진흥협회</Dropdown.Item>
      <Dropdown.Item href="/newscrawler/kcnet">건설신기술</Dropdown.Item>
      <Dropdown.Item href="/newscrawler/cad">캐드앤그래픽스</Dropdown.Item>
      <Dropdown.Item href="/newscrawler/rocm">지방국토관리청</Dropdown.Item>
    </DropdownButton>
  </div>
);

export default SubNavigation1;
