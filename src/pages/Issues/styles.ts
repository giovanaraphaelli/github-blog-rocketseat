import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.25rem;

  a,
  div {
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    color: ${(props) => props.theme['blue']};
    font-weight: 600;
    font-size: 0.75rem;
    text-transform: uppercase;
    cursor: pointer;
  }
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 130%;
  color: ${(props) => props.theme['base-title']};
  height: 100px;
`;

export const Footer = styled.footer`
  display: flex;
  gap: 1.5rem;

  & > div {
    display: flex;
    gap: 0.5rem;
    align-items: center;

    & > svg {
      color: ${(props) => props.theme['base-label']};
    }
    & > p {
      color: ${(props) => props.theme['base-subtitle']};
    }
  }
`;

export const Main = styled.main`
  li,
  h1,
  h2,
  h3,
  span,
  a,
  p {
    margin-bottom: 1rem;
  }
  h1 {
    font-size: 1.5rem;
  }
  h2,
  h3 {
    font-size: 1.2rem;
  }
  code {
    color: ${(props) => props.theme['base-subtitle']};
    border-radius: 2px;
  }
  pre > code {
    display: block;
    background-color: ${(props) => props.theme['base-post']};

    padding: 1rem;
    margin: 1rem 0;
    border-radius: 2px;
  }
`;
