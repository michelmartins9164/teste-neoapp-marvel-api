import styled from "styled-components";

export const CartContainer = styled.div`
  width: 100vw;
  display: flex;
  column-gap: 5rem;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  .cotainerValues {
    display: flex;
    column-gap: 1rem;
    flex-direction: row;
    margin-bottom: 0rem;
    justify-content: center;
    text-align: center;
    align-items: center;
    button {
      border: none;
      padding: 0.5rem;
      font-size: 2rem;
      background-color: rgb(0, 102, 65);
      color: white;
    }
  }
  h1 {
    margin-top: -1rem;
    margin-bottom: 2rem;
  }
  .itemsCart {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }

  .delete {
    border: none;
    font-size: 1rem;
    color: white;
    background-color: #ff0000;
  }

`;

export const Total = styled.div`
h2 {
    font-size: 2rem;

}
  margin-top: 1rem;
  text-align: center;
  width: 100vw;
`;
