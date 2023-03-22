import styled from "styled-components"; 
export const HeaderContainer = styled.div `
    background-color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    position: relative;
    .logo {
        position: absolute;
        left: 10px;
        top: 50%;
        transform: translate(0%, -50%);
    };

    h1 {
        text-align: center;
        color: #FF0000;
        text-transform: uppercase;
        font-size: 2rem;
    }
`;