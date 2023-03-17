import { Link } from "react-router-dom";
import { NavbarContainer, LinkContainer } from './Navbar.styles';

export function Navbar() {
    return(
        <NavbarContainer>
            <span>My App</span>
            <LinkContainer>
                <Link to="/">Home</Link>
                <Link to="howdy">Howdy</Link>
            </LinkContainer>
        </NavbarContainer>
    )
}