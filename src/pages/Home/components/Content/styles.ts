import styled from 'styled-components';

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 415px);
  gap: 2rem;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;

  h2 {
    font-size: 1.125rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-span']};
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 2.5rem;
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme['base-border']};
  padding: 0 1rem;
  margin: 1rem 0 3rem 0;
  color: ${(props) => props.theme['base-title']};
  font-size: 0.875rem;
  background-color: ${(props) => props.theme['base-input']};

  &::placeholder {
    color: ${(props) => props.theme['base-placeholder']};
  }
`;
