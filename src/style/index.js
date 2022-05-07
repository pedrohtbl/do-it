import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: 'Inter', sans-serif;
}

:root{
    --primary-color: #E5E5E5;
    --white-1: #F5F5F5F5;
    --black-1: #000000;
    --black-2: #0C0D0D;
    --grey-1: #4E5555;
    --orange-1: #C85311;
    --error: #B22222;
}

#root{
    background-color: var(--primary-color);
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Roboto Mono', monospace;
    color: var(--black-2);
}

button{
    cursor: pointer;
}

a{
    text-decoration: none;
}

ul{
    list-style: none;
}

`