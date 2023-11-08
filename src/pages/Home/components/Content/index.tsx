import { formatDistanceToNow } from 'date-fns';
import { useSearchIssues } from '../../../../hooks/useSearchIssues';
import { Card } from '../Card';
import { CardContainer, SearchInput, TitleContainer } from './styles';
import ptBR from 'date-fns/locale/pt-BR';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

export function Content() {
  const [search, setSearch] = useState('');
  const { data } = useSearchIssues(search);

  function dateDifference(date: string) {
    return formatDistanceToNow(new Date(date), {
      addSuffix: true,
      locale: ptBR,
    });
  }

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
