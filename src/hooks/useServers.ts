import { fetchServer } from '@/api/servers/servers.api'
import type { ServerParams } from '@/api/servers/servers.types'
import { useQuery } from '@tanstack/react-query'

export const useGetServer = (searchParams: ServerParams) =>
	useQuery({
		queryKey: ['server', ...Object.values(searchParams)],
		queryFn: () => fetchServer(searchParams),
		refetchInterval: 30_000,
		refetchIntervalInBackground: true,
	})
