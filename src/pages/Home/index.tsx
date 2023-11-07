import DefaultLayout from '../../layouts/DefaultLayout';
import { Profile } from './components/Profile';

export function Home() {
  return (
    <DefaultLayout>
      <DefaultLayout.HeaderContainer>
        <Profile />
      </DefaultLayout.HeaderContainer>
      <DefaultLayout.ContentContainer>
        Meu conteúdo da página.
      </DefaultLayout.ContentContainer>
    </DefaultLayout>
  );
}
