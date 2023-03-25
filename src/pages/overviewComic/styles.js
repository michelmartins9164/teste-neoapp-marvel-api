import styled from "styled-components";
import bgImage from '../../assets/images/bg.png';
export const ContainerOverview = styled.section`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    text-align: center;
    background-image: url(${bgImage}) !important;
    
`;

export const Overview = styled.article`
width: 100vw;
background-color: #00000090;
margin-top: -10rem;
display: flex;
justify-content: center;
flex-direction: column;
background-size: cover;
row-gap: 1rem;
.containerComic {
        img {
            width:18.75rem;
        }
    }
    h1, h2 {
        color: white;
        font-size: 1.5rem;
        width: 90%;
        margin: 0 5%;
    }

`;

