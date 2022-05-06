import styled from "styled-components"

export const CustomMain = styled.main`
    display: flex;
    width: 100vw;
    height: 100vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    animation-name: animation;
    animation-duration: 1s;

    h1{
        font-size: 80px;
        font-weight: 400;
        margin-bottom: 23px;
    }

    span{
        color: var(--orange-1);
    }

    h2{
        font-size: 60px;
        font-weight: 400;
        width: 50%;
        text-align: center;
    }

    div{
        display: flex;
        width: 50%;
        justify-content: space-between;
        margin-top: 65px;
    }

    div>button{
        width: 45%;
        height: 73px;
    }

    @keyframes animation {
        from {
            opacity: 0;
            transform: translateX(50px)
        }
        to {
            opacity: 1;
            transform: translateX(0)
        }
    }

    @media (max-width: 720px){
        h1{
            font-size: 60px;
        }
        h2{
            font-size: 40px;
            width: 100%;
        }
        
        div{
            flex-direction: column;
            align-items: center;
            height: 120px;
            justify-content: space-between;
        }

        div>button{
            height: 53px;
            width: 100%;
        }
    }
`