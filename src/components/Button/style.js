import styled from "styled-components";

export const CustomButton = styled.button`

    display: flex;
    align-items: center;
    justify-content: center;
    border: solid 2px var(--black-2);
    color: ${(props => (props.white ? "#000000" : "#F5F5F5"))};
    background-color: ${(props) => (props.white? "#F5F5F5" : "#0c0d0d" )};
    border-radius: 10px;
    font-size: 30px;
    font-weight: 400;

    @media (max-width: 720px){
        font-size: 24px;
    }
`