import styled from 'styled-components';

export const CardContainer = styled.div`
  background-color: ${(props) => props.theme['base-post']};
  border-radius: 10px;
  padding: 2rem;

  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.25rem;

    & > h3 {
      font-size: 1.25rem;
      font-weight: 600;
      color: ${(props) => props.theme['base-title']};
    }
    & > span {
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-span']};
    }
  }

  & > div {
    height: 125px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 5;
    text-overflow: ellipsis;
    line-height: 160%;

    h2 {
      font-size: 1rem;
    }
  }
`;
