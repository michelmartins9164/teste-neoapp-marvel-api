import styled from "styled-components"; 
export const HeaderContainer = styled.div `
    background-color: #000;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 8rem;
    position: relative;

    h1 {
        text-align: center;
        color: #FF0000;
        text-transform: uppercase;
        font-size: 2rem;
    }
`;

export const ContainerLinks = styled.div `
display: flex;
justify-content: space-between;
flex-direction: column;
row-gap: 1rem;
    a {
        text-decoration: none;
        font-size: 1.2rem;
        color: white;
        margin-left: 1rem;
    }
`