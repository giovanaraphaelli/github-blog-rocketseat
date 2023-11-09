import axios from 'axios';
const githubApi = axios.create({
  baseURL: 'https://api.github.com',
});

export interface GetUserResponse {
  id: number;
  avatar_url: string;
  html_url: string;
  login: string;
  name: string;
  company: string;
  bio: string;
  followers: number;
  created_at: string;
}

export async function getUserInfo(username: string) {
  const { data } = await githubApi.get<GetUserResponse>(`/users/${username}`);
  return data;
}

export interface Item {
  id: number;
  number: number;
  title: string;
  created_at: string;
  body: string;
  html_url: string;
  user: {
    login: string;
  };
  comments: number;
}

export interface SearchIssuesResponse {
  total_count: number;
  incomplete_results: boolean;
  items: Item[];
}

export async function searchIssues(
  username: string,
  repo: string,
  search = ''
) {
  const { data } = await githubApi.get<SearchIssuesResponse>('/search/issues', {
    params: {
      q: `${search} repo:${username}/${repo}`,
    },
  });

  return data;
}

export async function getIssues(
  username: string,
  repo: string,
  number: number
) {
  const { data } = await githubApi.get<Item[]>(
    `/repos/${username}/${repo}/issues/${number}`
  );
  return data;
}
