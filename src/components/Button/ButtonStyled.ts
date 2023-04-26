import styled from 'styled-components';

interface iPropsStyled {
    color: string,
    fontColor: string,
    hover: string
}
export const ButtonStyled = styled.button<iPropsStyled>`
    background-color: ${props => props.color};
    color: ${props=> props.fontColor};
    width: 100%;
    height: 40px;
    border: none;
    border-radius: 8px;
    :hover{
        background-color: ${props=> props.hover};
        color: ${props=> props.color === "#828282" ? "#E0E0E0" : props.color };
        cursor: pointer;
    }
`