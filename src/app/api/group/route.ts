import type { GroupResponse } from '@/api/group/group.types'
import type { NextRequest } from 'next/server'
import SteamCommunity from 'steamcommunity'

const steamCommunity = new SteamCommunity()

export async function GET(request: NextRequest) {
	const searchParams = request.nextUrl.searchParams
	const groupId = searchParams.get('groupId')

	if (!groupId) {
		return Response.json({ error: 'Invalid group ID' }, { status: 400 })
	}

	try {
		const response = await new Promise<GroupResponse>((resolve, reject) => {
			steamCommunity.getSteamGroup(
				groupId,
				(error, { members, membersInChat, membersInGame, membersOnline }) => {
					if (error) {
						return reject(error)
					}

					resolve({
						members,
						membersInChat,
						membersInGame,
						membersOnline,
					})
				},
			)
		})

		return Response.json(response, { status: 200 })
	} catch (err) {
		const error = `SteamCommunity error: ${err}`

		console.error(error)

		return Response.json({ error }, { status: 500 })
	}
}
