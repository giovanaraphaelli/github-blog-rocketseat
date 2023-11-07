import styled from 'styled-components';

export const ProfileContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: left;
  gap: 2rem;
`;

export const ProfileImg = styled.img`
  width: 148px;
  height: 148px;
  border-radius: 8px;
`;

export const ProfileInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  & > p {
    height: 90px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    text-overflow: ellipsis;
    font-size: 1rem;
    color: ${(props) => props.theme['base-text']};
  }
`;

export const ProfileHeader = styled.header`
  display: flex;
  justify-content: space-between;

  h1 {
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 130%;
    color: ${(props) => props.theme['base-title']};
  }
`;

export const Link = styled.div`
  display: flex;
  align-items: start;
  color: ${(props) => props.theme['blue']};
  font-weight: 600;

  a {
    color: ${(props) => props.theme['blue']};
    font-size: 0.75rem;
    margin-right: 0.5rem;
    text-transform: uppercase;
  }
`;

export const ProfileFooter = styled.footer`
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
