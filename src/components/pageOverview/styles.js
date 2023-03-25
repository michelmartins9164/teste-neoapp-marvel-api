import styled from "styled-components";

export const Article = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
    margin-top: 1rem;
    width : 11.25rem;
    height: 21.87rem;
    margin-bottom: 1rem;
    background-color: #1c1c1c;
    border-radius: .9em;
    padding: 1rem;
    box-sizing: border-box;

    .link {
        margin-top: 2rem;
        color: white;
        text-decoration: none;
    }
    
    h1 {
        margin-top: 1rem;
        color: #FFFF;
    }
    .containerImageComic {
        display: flex;
        justify-content: center;
        width: 6.25rem;
        height: 12.5rem;
        
        .cover-comic {
            width: 10rem;
            height: 10rem;
        }
    }

    .containerTitleComic {
        width: 100%;
        text-align: center;
    }



`;