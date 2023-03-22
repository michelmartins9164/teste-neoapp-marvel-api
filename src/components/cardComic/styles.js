import styled from "styled-components";

export const Article = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
    margin-top: 1rem;
    width : 180px;
    height: 350px;
    margin-bottom: 1rem;
    background-color: #1c1c1c;
    border-radius: .9em;
    padding: 1rem;
    box-sizing: border-box;

    
    h1 {
        margin-top: 1rem;
        color: #FFFF;
    }
    .containerImageComic {
        display: flex;
        justify-content: center;
        width: 100px;
        height: 200px;
        
        .cover-comic {
            width: 100vw;
            height: 200px;
        }
    }

    .containerTitleComic {
        width: 100%;
        text-align: center;
    }

    .coverUnknown {
        margin-left: auto;
        margin-right: auto;
        width: 150px;
        height: 150px;
    }


`;