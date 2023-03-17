import styled from "styled-components";

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px;
    background-color: pink;
`;

export const LinkContainer = styled.span`
    display: flex;
    gap: 10px;
    a {
        text-decoration: none;
        color: black;
        transition: 0.3s ease;
    }
    a:hover {
        color: gray;
    }
`;