import { useNavigate, useParams } from 'react-router-dom';

import DefaultLayout from '../../layouts/DefaultLayout';
import { useSearchIssues } from '../../hooks/useSearchIssues';
import ReactMarkdown from 'react-markdown';
import { Footer, Header, Main, Title } from './styles';
import {
  ArrowSquareOut,
  CalendarBlank,
  CaretLeft,
  Chat,
  GithubLogo,
} from '@phosphor-icons/react';
import { dateDifference } from '../../utils/dateDifference';

export function Issues() {
  const { number } = useParams();

  const { data } = useSearchIssues(number);
  const navigate = useNavigate();
  return (
    <DefaultLayout>
      <DefaultLayout.HeaderContainer>
        <Header>
          <div onClick={() => navigate(-1)}>
            <CaretLeft size={15} />
            Voltar
          </div>
          <a href={data?.items[0].html_url} target="_blank">
            Ver no Github <ArrowSquareOut size={15} />
          </a>
        </Header>
        <Title>{data?.items[0].title}</Title>
        <Footer>
          <div>
            <GithubLogo size={18} weight="fill" />
            <p>{data?.items[0].user.login}</p>
          </div>
          <div>
            <CalendarBlank size={18} weight="fill" />
            {data?.items[0].created_at && (
              <p>{dateDifference(data?.items[0].created_at)}</p>
            )}
          </div>
          <div>
            <Chat size={18} weight="fill" />
            <p>{data?.items[0].comments} comentários</p>
          </div>
        </Footer>
      </DefaultLayout.HeaderContainer>
      <DefaultLayout.ContentContainer>
        <Main>
          <ReactMarkdown>{data?.items[0].body}</ReactMarkdown>
        </Main>
      </DefaultLayout.ContentContainer>
    </DefaultLayout>
  );
}
