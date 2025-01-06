import { fetchGroup } from '@/api/group/group.api'
import type { GroupParams } from '@/api/group/group.types'
import { useQuery } from '@tanstack/react-query'

export const useGetGroup = (searchParams: GroupParams) =>
	useQuery({
		queryKey: ['group', ...Object.values(searchParams)],
		queryFn: () => fetchGroup(searchParams),
	})
