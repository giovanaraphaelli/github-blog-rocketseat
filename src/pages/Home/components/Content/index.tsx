import { useSearchIssues } from '../../../../hooks/useSearchIssues';
import { dateDifference } from '../../../../utils/dateDifference';
import { Card } from '../Card';
import { CardContainer, SearchInput, TitleContainer } from './styles';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useNavigate } from 'react-router-dom';

export function Content() {
  const [search, setSearch] = useState('');
  const { data } = useSearchIssues(search);
  const navigate = useNavigate();

  return (
    <>
      <TitleContainer>
        <h2>Publicações</h2>
        <span>{`${data?.total_count} publicações`}</span>
      </TitleContainer>
      <SearchInput
        placeholder="Buscar conteúdo"
        onChange={(e) => setSearch(e.target.value)}
      />
      <CardContainer>
        {data?.items.map((item) => {
          return (
            <Card
              handleClick={() => navigate(`/issues/${item.number}`)}
              key={item.number}
              title={item.title}
              body={<ReactMarkdown>{item.body}</ReactMarkdown>}
              created_at={dateDifference(item.created_at)}
            />
          );
        })}
      </CardContainer>
    </>
  );
}
