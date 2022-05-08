import styled from "styled-components"

export const CustomLi = styled.li`
    width: 299px;
    height: 299px;
    border: 2px solid var(--black-1);
    border-radius: 10px;
    background-color: var(--white-1);
    display: flex;
    flex-direction: column;
    align-items: center;

    >div>button{
        width: 30px;
        background-color: transparent;
        border: none;
        height: 30px;
        margin: 0;
        font-weight: 700;
        position: absolute;
        left: 235px;
        top: -20px;
    }

    div{
        display: flex;
        margin-top: 24px;
        justify-content: flex-start;
        width: 92%;
        margin-left: 24px;
        position: relative;
    }

    span{
        width: 75%;
        margin-top: 12px;
        margin-bottom: 31px;
        height: 1px;
        background-color: var(--black-2) ;
    }

    svg{
        width: 30px;
        height: 30px;
        color: var(--orange-1);
        margin-right: 15px;
    }

    div>p{
        font-size: 18px;
        display: flex;
        align-items: center;
        width: 70%;
    }

    div>p, section>p{
        color: ${props => (props.completed ? "#C0C0C0" : "#0C0D0D" )};
        text-decoration: ${props => (props.completed ? "line-through" : "none" )};
    }

    section{
        display: flex;
        width: 92%;
        margin-left: 24px;
    }

    section>p{
        font-size: 20px;
        display: flex;
        align-items: center;
        margin-bottom: 116px;
        height: 30px;
    }

    button{
        width: 85%;
        height: 37px;
        font-size: 15px;
        border-radius: 5px;
    }
`