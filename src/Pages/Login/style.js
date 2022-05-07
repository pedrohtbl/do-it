import styled from "styled-components"

export const CustomMain = styled.main`
    display: flex;
    width: 100vw;
    height: 100vh;
    
    figure{
        background-color: var(--black-2);
        width: 45%;
        display: flex;
        align-items: center;
    }

    figure>img{
        width: 100%;
    }

    form{
        display: flex;
        width: 55%;
        flex-direction: column;
        align-items: center;
        padding-top: 24px;
        animation: animation 1s;
        justify-content: center;
    }

    svg{
        top: 55px;
    }

    button{
        width: 40%;
        height: 78px;
        margin-top: 14px;
        margin-bottom: 30px;
    }

    h1{
        font-weight: 400;
        font-size: 80px;
        font-family: 'Roboto mono';
        margin-bottom: 20px;
    }

    p,a{
        font-size: 25px;
        font-family: 'Roboto mono';
    }

    a{
        color: var(--orange-1);
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

    @media (max-width: 1100px){
        p,a{
            font-size: 20px;
        }

        h1{
            font-size:60px;
        }
        form>button{
            height: 54px;
        }

        svg{
            top: 47px;
        }
    }

    @media (max-width: 720px){
        justify-content: center;
        
        figure,img{
            display: none;
        }

        form{
            width: 100%;
        }

        form>button{
            height: 54px;
        }

        svg{
            top: 42px;
        }

        h1{
            font-size: 40px;
        }

        p,a{
            font-size: 16px;
        }

    }
`