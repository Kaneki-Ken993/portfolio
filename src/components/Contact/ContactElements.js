import styled from "styled-components";


export const ContactWrapper = styled.div`
    margin: 5rem 0;
`;

export const Email = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: row;
  row-gap: 1rem;
  
  span {
    font-size: 1.5rem;
    font-weight: 500;
  }

  @media (min-width: 576px) {
  span {
  font-size: 1.8rem;
  }
  }

  @media (min-width: 992px) {
  span {
  font-size: 1.65rem;
  }
  }
`;