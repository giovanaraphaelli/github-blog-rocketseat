import { ArrowSquareOut } from '@phosphor-icons/react';
import { useGetUserInfo } from '../../../../hooks/useGetUserInfo';
import {
  Link,
  ProfileContainer,
  ProfileFooter,
  ProfileHeader,
  ProfileImg,
  ProfileInfo,
} from './styles';
import { Buildings, GithubLogo, Users } from '@phosphor-icons/react/dist/ssr';

export function Profile() {
  const { data } = useGetUserInfo();

  return (
    <>
      <ProfileContainer>
        <ProfileImg src={data?.avatar_url} />
        <ProfileInfo>
          <ProfileHeader>
            <h1>{data?.name}</h1>
            <Link>
              <a href={data?.html_url} target="_blank">
                Github
              </a>
              <ArrowSquareOut size={15} />
            </Link>
          </ProfileHeader>

          <p>{data?.bio}</p>

          <ProfileFooter>
            <div>
              <GithubLogo size={18} weight="fill" />
              <p>{data?.login}</p>
            </div>
            <div>
              <Buildings size={18} weight="fill" />
              <p>{data?.company}</p>
            </div>
            <div>
              <Users size={18} weight="fill" />
              <p>{data?.followers} seguidores</p>
            </div>
          </ProfileFooter>
        </ProfileInfo>
      </ProfileContainer>
    </>
  );
}
