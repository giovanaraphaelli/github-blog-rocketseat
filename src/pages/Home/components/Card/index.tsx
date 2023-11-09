import { CardContainer } from './styles';
import React from 'react';

interface CardProps {
  title: string;
  body: React.ReactNode;
  created_at: string;
  handleClick?: () => void;
}

export function Card({ title, body, created_at, handleClick }: CardProps) {
  return (
    <CardContainer onClick={handleClick}>
      <header>
        <h3>{title}</h3>
        <span>{created_at}</span>
      </header>
      <div>{body}</div>
    </CardContainer>
  );
}
