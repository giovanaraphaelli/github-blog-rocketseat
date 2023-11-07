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
