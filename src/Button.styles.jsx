import styled from "styled-components";

export const Button = styled.button`
    color: ${props => props.disabled ? 'red' : props.theme.button.primary};
    border: 2px solid ${props => props.theme.button.primary};
    cursor: pointer;
    background-color: ${props => props.theme.button.secondary};
    border-radius: 4px;
    cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};

    &:hover {
        background-color: ${props => props.theme.button.primary};
        color: ${props => props.theme.button.secondary};
        transition: 0.3s ease;
    }
`