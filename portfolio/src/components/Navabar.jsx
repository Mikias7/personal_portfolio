import { useEffect, useState } from 'react';
import Nav from 'react-bootstrap/Nav';

function Navbar() {

    const [activeKey, setActiveKey] = useState("/")

    return (
        <div className="flex justify-end pr-5" style={{background: "darkgrey"}}>
            <Nav
            variant="underline"
            activeKey={activeKey}
            onSelect={(selectedKey) => setActiveKey(selectedKey)}
            >
            <Nav.Item>
                <Nav.Link href="/" eventKey="/">Home</Nav.Link>
            </Nav.Item>
            
            <Nav.Item>
                <Nav.Link  href="/projects" eventKey="/projects">Projects</Nav.Link>
            </Nav.Item>

            <Nav.Item>
                <Nav.Link  href="/resume" eventKey="/resume">Resume</Nav.Link>
            </Nav.Item>

            <Nav.Item>
                <Nav.Link  href="/contact" eventKey="/contact">Contact</Nav.Link>
            </Nav.Item>

            <Nav.Item>
                <Nav.Link  href="/test_page" eventKey="/test_page">Test</Nav.Link>
            </Nav.Item>

        </Nav>
        </div>
    );
}

export default Navbar;