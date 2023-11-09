import { useQuery } from 'react-query';
import { getIssues } from '../service/github';

export function useGetIssues(number: number) {
  const query = useQuery({
    queryKey: 'user-info',
    queryFn: () =>
      getIssues('giovanaraphaelli', 'github-blog-rocketseat', number),
  });
  return query;
}
