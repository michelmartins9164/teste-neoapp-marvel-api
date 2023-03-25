import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
`;

export const ContainerComics = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    row-gap: 1rem;
    column-gap: 1rem;
    
`;

export const ContainerButtons = styled.div `
    width: 100%;
    height: 3rem;
    display: flex;
    justify-content: center;
    flex-direction: row;
    column-gap: 1rem;
    button {
        border: none;
        width: 10rem;
    }
`;