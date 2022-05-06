import styled from "styled-components"

export const CustomInput = styled.input`
    width: 100%;
    height: 78px;
    background-color: var(--white-1);
    color: var(--grey-1);
    border: 1px solid var(--black-1);
    border-radius: 10px;
    padding-left: 72px;
    font-size: 30px;

    @media (max-width: 1100px){
        font-size: 18px;
        height: 58px;
        padding-left: 52px;
    }
`

export const CustomLabel = styled.label`
    width: 55%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 22px;
    position: relative;

    svg{
        width: 35px;
        height: 35px;
        color: var(--grey-1);
        position: absolute;
        left: 15px;
        top: 63px;
    }
    
    p{
        margin-bottom: 9px;
        font-size: 25px;
        font-weight: 400;
        color: var(--black-1);
    }
  

    @media (max-width: 1100px){
        width: 65%;
        
        svg{
            width: 25px;
            height: 25px;
            top: 50px;
        }

        p{
            font-size: 18px;
        }
    }

    @media (max-width: 720px){
        width: 80%;
        
        p{
            font-size: 18px;
        }
    }
    

`