import React, { ReactNode } from 'react';
import styled from 'styled-components';

const Cover = styled.div`
  height: 19rem;
  background-color: ${(props) => props.theme['base-profile']};
  background-image: url('/Cover.svg');
  object-fit: cover;
  background-position-x: center;
  background-repeat: no-repeat;
`;
const HeaderContainer = styled.div`
  width: 54rem;
  height: 13rem;
  padding: 2rem 2.5rem;
  background-color: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  position: absolute;
  top: 208px;
  left: 50%;
  transform: translateX(-50%);
`;

const ContentContainer = styled.div`
  padding: 12.5rem 1rem;
  width: 100%;
  max-width: 56rem;
  margin: 0 auto;
`;

type DefaultLayoutProps = {
  children: ReactNode;
};

const DefaultLayout: React.FC<DefaultLayoutProps> & {
  HeaderContainer: typeof HeaderContainer;
  ContentContainer: typeof ContentContainer;
} = ({ children }) => {
  return (
    <>
      <Cover />
      {children}
    </>
  );
};

DefaultLayout.HeaderContainer = HeaderContainer;
DefaultLayout.ContentContainer = ContentContainer;

export default DefaultLayout;
