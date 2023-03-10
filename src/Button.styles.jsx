import styled from "styled-components";

export const Button = styled.button`
    color: ${props => props.theme.button.primary};
    border: 2px solid ${props => props.theme.button.primary};
    cursor: pointer;
    background-color: ${props => props.theme.button.secondary};
    border-radius: 4px;

    &:hover {
        background-color: ${props => props.theme.button.primary};
        color: ${props => props.theme.button.secondary};
        transition: 0.3s ease;
    }
`