import { useQuery } from 'react-query';
import { searchIssues } from '../service/github';
import { useDebounce } from 'use-debounce';

export function useSearchIssues(search?: string) {
  const [_search] = useDebounce(search, 1000);

  const query = useQuery({
    queryKey: ['search-issues', _search],
    queryFn: () => {
      return searchIssues(
        'giovanaraphaelli',
        'github-blog-rocketseat',
        _search
      );
    },
  });

  return query;
}
