import styled from 'styled-components';
import achivements from '../assets/img/achivements.png';
import skills from '../assets/img/skills.png';
import projects from '../assets/img/projects.png';

const HeaderBlock = styled.header`
    position: fixed;
    top: calc(100% - 60px);
    height: 60px;
    width: 100%;
    display: flex;
    justify-content: center;

    background: var(--block-background);
    outline: 3px solid var(--border-color);

    @media (max-width: 768px) {
        top: calc(100% - 50px);
        height: 50px;
    }
`;

const Navbar = styled.nav`
    width: 75%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media (max-width: 768px) {
        width: 90%;
    }
`;

const Collapse = styled.div`
    box-sizing: border-box;
    width: 60%;
    display: inline-flex;
    flex-direction: row;
    justify-content: flex-end;
    margin: 10px 0;
`;

const Logo = styled.img`
    display: none;
    width: 40px;
    height: 40px;
    @media (max-width: 768px) {
        display: block;
    }
`;

const NavbarBrand = styled.a`
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    width: fit-content;
    text-decoration: none;
    user-select: none;
    outline: 1px solid transparent !important;

    > span {
        display: block;
        font-size: 28px;
        font-weight: bold;
        height: fit-content;
        @media (max-width: 500px) {
            font-size: 20px;
        }
    }
`;

const NavbarItem = styled.a`
    box-sizing: border-box;
    width: 180px;
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 20px;
    text-decoration: none;
    transition: 200ms;
    outline: 1px solid transparent !important;
    border: 1px solid transparent;

    :hover, :focus {
        border-left: 1px solid var(--border-color);
        border-right: 1px solid var(--border-color);
    }
    > span {
        display: block;
        @media (max-width: 768px) {
            display: none;
        }
    }
`;
 
const Header = () => {
    return (
        <HeaderBlock>
            <Navbar>
                <NavbarBrand href='/my-portfolio'>
                    <span>Портфоліо</span>
                </NavbarBrand>
                <Collapse>
                    <NavbarItem href='/my-portfolio/skills'>
                    <Logo src={skills} />
                        <span>Навички</span>
                    </NavbarItem>
                    <NavbarItem href='/my-portfolio/projects'>
                    <Logo src={projects} />
                        <span>Проекти</span>
                    </NavbarItem>
                    <NavbarItem href='/my-portfolio/achivements'>
                    <Logo src={achivements} />
                        <span>Досягнення</span>
                    </NavbarItem>
                </Collapse>
            </Navbar>
        </HeaderBlock>
    )
};

export default Header;