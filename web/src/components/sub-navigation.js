import React from "react";
import { Link } from "gatsby"

import { Nav } from "react-bootstrap";

const SubNavigation = () => (
    <Nav variant="tabs">
        <Nav.Item>
            <Link to="/" className="nav-link" activeClassName="active">국토일보</Link>
        </Nav.Item>
        <Nav.Item>
            <Link to="/dnews" className="nav-link" activeClassName="active">대한경제</Link>
        </Nav.Item>
        <Nav.Item>
            <Link to="/molit" className="nav-link" activeClassName="active">국토교통부</Link>
        </Nav.Item>
    </Nav>
)

export default SubNavigation