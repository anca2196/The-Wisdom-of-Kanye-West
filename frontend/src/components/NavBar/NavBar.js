import MenuButton from "./MenuButton"
import styled from "styled-components";
import { NavLink } from 'react-router-dom'
import bg from "../../assets/phone-background.jpg"

const NavBarContainer = styled.div`
    margin: 0;
    background: url(${bg}) center/ cover no-repeat;
    padding: .5rem 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const LogInLink = styled(NavLink)`
    padding-top: .5rem;
    color: white;
    text-decoration: underline;
    font-size: 1.5rem;
    cursor: pointer;
    font-style: italic;
`

const Navbar = () => {
    return (
        <NavBarContainer>
            <MenuButton />
            <LogInLink to="/login" ><p> Log In</p></LogInLink>
        </NavBarContainer>
    )
}

export default Navbar;