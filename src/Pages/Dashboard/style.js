import styled from "styled-components"

export const CustomMain = styled.main`
    padding-top: 89px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;

    >div{
        width: 80%;
        display: flex;
        justify-content: center;
    }

    div>button{
        font-size: 20px;
        width: 299px;
        height: 50px;
        margin-bottom: 70px;
        margin-right: 50px;
    }
`

export const CustomForm = styled.form`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin-bottom: 60px;

    button{
        height: 78px;
        width: 20%;
        margin-left: 45px;
    }

    label{
        width: 40%;
        margin: 0;
        height: 121px;
    }

    label p{
        font-size: 30px;
    }

    svg{
        top: 65px;
    }

    input{
        height: 78px;
        width: 100%;
    }
` 

export const CustomUl = styled.ul`
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 50px;

    li{
        margin-bottom: 50px;
        margin-right: 50px;
    }

`