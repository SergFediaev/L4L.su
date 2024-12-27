import { NumCell } from '@/components/numCell'
import { Warn } from '@/components/warn'
import { combine } from '@/utils/combine'
import { useEffect, useState } from 'react'

type ServerResponse = {
	name: string
	map: string
	raw: {
		protocol: number
		folder: string
		game: string
		appId: number
		numbots: number
		listentype: string
		environment: string
		secure: number
		steamid: string
		tags: string[]
		players: []
		rules: Record<string, string>
		rulesBytes: Buffer
	}
	version: string
	maxplayers: number
	numplayers: number
	players: []
	bots: []
	queryPort: number
	connect: string
	ping: number
}

type Props = {
	host: string
	port: number
}

export const Server = ({ host, port }: Props) => {
	const [server, setServer] = useState<ServerResponse>()
	const [isLoading, setIsLoading] = useState(true)
	const [error, setError] = useState<string>()

	useEffect(() => {
		const fetchServer = async () => {
			try {
				setIsLoading(true)

				const response = await fetch(`/api/servers?host=${host}&port=${port}`)
				const server: ServerResponse = await response.json()

				setServer(server)
			} catch (error) {
				const message = `Server error: ${error}`

				console.error(message)

				setError(message)
			} finally {
				setIsLoading(false)
			}
		}

		void fetchServer()
	}, [host, port])

	const address = `${host}:${port}`

	if (isLoading) {
		return <Warn>Loading server {address}</Warn>
	}

	if (error) {
		return <Warn>{error}</Warn>
	}

	if (!server) {
		return <Warn>Server not found</Warn>
	}

	return (
		<tr>
			<td>{server.name}</td>
			<td>
				<a href={`steam://connect/${address}`}>{address}</a>
			</td>
			<NumCell>30</NumCell>
			<NumCell>
				<span className={combine(server.numplayers > 0 && 'text-accent')}>
					{server.numplayers}
				</span>{' '}
				/ {server.maxplayers}
			</NumCell>
			<NumCell>{server.ping}</NumCell>
			<td>{server.map}</td>
		</tr>
	)
}
