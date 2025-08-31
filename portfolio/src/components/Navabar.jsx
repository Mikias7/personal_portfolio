import { useState } from 'react';
import Nav from 'react-bootstrap/Nav';

function Navbar() {

    const [activeKey, setActiveKey] = useState("/home")

    return (
    <Nav
        variant="underline"
        defaultActiveKey={activeKey}
        onSelect={(selectedKey) => setActiveKey(selectedKey)}
    >
        <Nav.Item>
        <Nav.Link href="/home" eventKey="/home">Home</Nav.Link>
        </Nav.Item>

        <Nav.Item>
        <Nav.Link href="/about_me" eventKey="/about_me">About Me</Nav.Link>
        </Nav.Item>

        <Nav.Item>
        <Nav.Link  href="/projects" eventKey="/projects">Projects</Nav.Link>
        </Nav.Item>

        <Nav.Item>
        <Nav.Link  href="/Resume" eventKey="/resume">Resume</Nav.Link>
        </Nav.Item>

        <Nav.Item>
        <Nav.Link  href="/Contact" eventKey="/contact">Contact</Nav.Link>
        </Nav.Item>

    </Nav>
    );
}

export default Navbar;