import styled from "styled-components"

export const CustomInput = styled.input`
    width: 100%;
    height: 68px;
    background-color: var(--white-1);
    color: var(--grey-1);
    border: 1px solid ${(props) => (props.errors? "#B22222" : "#000000")};
    border-radius: 10px;
    padding-left: 62px;
    font-size: 20px;
    margin-bottom: 2px;

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
        width: 30px;
        height: 30px;
        color: var(--grey-1);
        position: absolute;
        left: 15px;
        top: 53px;
    }
    
    p{
        margin-bottom: 5px;
        font-size: 20px;
        font-weight: 400;
        color: var(--black-1);
    }

    span{
        color: var(--error);
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
        margin-bottom: 22px;

        svg{
            top: 40px;
        }
        
        p{
            font-size: 14px;
        }
        span{
            font-size: 14px;
        }
    }
    

`