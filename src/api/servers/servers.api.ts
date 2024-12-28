import type { ServerParams, ServerResponse } from '@/api/servers/servers.types'
import ky from 'ky'

const serversApi = ky.create({
	prefixUrl: 'api',
})

export const fetchServer = (searchParams: ServerParams) =>
	serversApi<ServerResponse>('servers', { searchParams }).json()
