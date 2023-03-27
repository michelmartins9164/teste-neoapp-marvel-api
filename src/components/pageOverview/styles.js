import styled from "styled-components";

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  margin-top: 1rem;
  width: 11.25rem;
  height: 21.87rem;
  margin-bottom: 1rem;
  background-color: #1c1c1c;
  border-radius: 0.9em;
  padding: 1rem;
  box-sizing: border-box;
  position: relative;

  .link {
    margin-top: 2rem;
    color: white;
    text-decoration: none;

    position: absolute;
    bottom: 1rem;
    left: 50%;
    transform: translate(-50%);
  }

  h1 {
    margin-top: -1rem;
    color: #ffff;
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
  @media screen and (min-width: 1024px) {
    width: 20rem;
    height: 30rem;

    .containerImageComic {
      display: flex;
      justify-content: center;
      width: 12.5rem;
      height: 15rem;

      .cover-comic {
        width: 20rem;
        height: 20rem;
      }

      h1 {
        margin-top: 9rem;
        color: #ffff;
      }
    }
  }
`;
