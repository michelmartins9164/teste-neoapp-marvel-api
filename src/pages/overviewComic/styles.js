import styled from "styled-components";
import bgImage from '../../assets/images/bg.png';
export const ContainerOverview = styled.section`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    text-align: center;
    background-image: url(${bgImage}) !important;
    
    @media screen and (min-width: 728px){
        width: 99vw;
    }
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
            margin-top: 10rem;
            width:18.75rem;
        }
    }
    h1, h2 {
        color: white;
        font-size: 1.5rem;
        width: 90%;
        margin: 0 5%;
    }
    
    span {
        color: white;
        font-size: 1rem;
        width: 20rem;
        margin-left: auto;
        margin-right: auto;

    }

`;

export const LinkContainer = styled.div`
        
        margin-top: 2rem;
    .link {
        border-radius: 8px;
        padding: .5rem;
        background-color: #006641;
        font-size: 1.5rem;
        color: white;
        text-decoration: none;
    }
`
