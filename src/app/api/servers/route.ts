import { GameDig } from 'gamedig'
import type { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
	const searchParams = request.nextUrl.searchParams
	const host = searchParams.get('host')
	const port = searchParams.get('port')

	if (!host || !port) {
		return Response.json({ error: 'Invalid host and port' }, { status: 400 })
	}

	try {
		const response = await GameDig.query({
			type: 'l4d2',
			host,
			port: Number(port),
			requestRules: true,
		})

		return Response.json(response, { status: 200 })
	} catch (err) {
		const error = `GameDig error: ${err}`

		console.error(error)

		return Response.json({ error }, { status: 500 })
	}
}
