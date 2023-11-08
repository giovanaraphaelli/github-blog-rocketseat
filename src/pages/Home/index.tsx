import DefaultLayout from '../../layouts/DefaultLayout';
import { Content } from './components/Content';
import { Profile } from './components/Profile';

export function Home() {
  return (
    <DefaultLayout>
      <DefaultLayout.HeaderContainer>
        <Profile />
      </DefaultLayout.HeaderContainer>
      <DefaultLayout.ContentContainer>
        <Content />
      </DefaultLayout.ContentContainer>
    </DefaultLayout>
  );
}
