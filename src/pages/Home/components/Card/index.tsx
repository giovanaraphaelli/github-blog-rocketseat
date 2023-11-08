import { CardContainer } from './styles';
import React from 'react';

interface CardProps {
  title: string;
  body: React.ReactNode;
  created_at: string;
}

export function Card({ title, body, created_at }: CardProps) {
  return (
    <CardContainer>
      <header>
        <h3>{title}</h3>
        <span>{created_at}</span>
      </header>
      <div>{body}</div>
    </CardContainer>
  );
}
