import styled from "styled-components"

export const CustomMain = styled.main`
    padding-top: 89px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
    
    >svg{
        width: 30px;
        height: 30px;
        position: absolute;
        right: 40px;
        top:20px;
        cursor: pointer;
    }

    >svg:hover{
        color: var(--error);
    }

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

    @media (max-width: 720px) {
        padding-top: 30px;

        div>button{
            margin-right: 0;
            width: 250px;
            height: 50px;
        }
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
        width: 100%;
        font-size: 28px;
    }

    svg{
        top: 65px;
    }

    input{
        height: 78px;
        width: 100%;
    }

    @media (max-width: 720px){
       flex-direction: column;
       align-items: center;
       margin-bottom: 50px;

       label p{
           font-size: 22px;
       }

       label{
           width: 80%;
       }

       input{
           height: 50px;
       }

       button{
           margin-left: 0;
           width: 50%;
           height: 40px;
           font-size: 18px;
       }
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

    @media (max-width: 720px){
        width: 100%;
        flex-direction: column;
        align-items: center;
        li{
            margin-right: 0;
        }
    }

`