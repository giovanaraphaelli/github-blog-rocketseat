import { useQuery } from 'react-query';
import { getUserInfo } from '../service/github';

export function useGetUserInfo() {
  const query = useQuery({
    queryKey: 'user-info',
    queryFn: () => getUserInfo('giovanaraphaelli'),
  });
  return query;
}
