import styled from "styled-components";
import prev from "../../assets/icons/prevIcon.svg";
import next from "../../assets/icons/next.svg";
import bg from "../../assets/images/bg.png"


export const ContainerComics = styled.section`
width: 100vw;
    background-color: red;
    background-image: url(${bg});
    background-repeat: repeat;
    background-size: contain;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    row-gap: 1rem;
    column-gap: 1rem;
    position: relative;
    
    @media screen and (min-width: 728px){
        height: 100vh;
        width: 99vw;
    }
    .shadow {
        position: absolute;
        background-color: rgba(0,0,0,75%);
        width: 100%;
        height: 100%;
    }
`;

export const ContainerButtons = styled.div`
    width: 100%;
    height: 3rem;
    display: flex;
    justify-content: center;
    flex-direction: row;
    column-gap: 1rem;
    button {
        background-color: transparent;
        border: none;
        width: 5rem;
        
        &:nth-child(1) {
            z-index: 1;
            background-image: url(${prev});
            background-repeat: no-repeat;
        };
        &:nth-child(2) {
            z-index: 1;
            background-image: url(${next});
            background-repeat: no-repeat;
        }
    }
`;