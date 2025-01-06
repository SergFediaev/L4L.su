import type { GroupParams, GroupResponse } from '@/api/group/group.types'
import ky from 'ky'

const groupApi = ky.create({
	prefixUrl: 'api',
})

export const fetchGroup = (searchParams: GroupParams) =>
	groupApi<GroupResponse>('group', { searchParams }).json()
