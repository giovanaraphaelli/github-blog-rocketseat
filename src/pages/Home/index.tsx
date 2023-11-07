import DefaultLayout from '../../layouts/DefaultLayout';

export function Home() {
  return (
    <DefaultLayout>
      <DefaultLayout.HeaderContainer>Meu título</DefaultLayout.HeaderContainer>
      <DefaultLayout.ContentContainer>
        Meu conteúdo da página.
      </DefaultLayout.ContentContainer>
    </DefaultLayout>
  );
}
