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

    div{
        display: flex;
        margin-top: 24px;
        justify-content: flex-start;
        width: 92%;
        margin-left: 24px;
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
        font-size: 20px;
        color: var(--black-2);
        display: flex;
        align-items: center;
    }

    section{
        display: flex;
        width: 92%;
        margin-left: 24px;
    }

    section>p{
        font-size: 20px;
        color: var(--black-2);
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