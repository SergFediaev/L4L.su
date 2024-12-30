'use client'

import type { ServerParams } from '@/api/servers/servers.types'
import { Cell } from '@/components/cell'
import { Players } from '@/components/players'
import { PlayersCount } from '@/components/playersCount'
import { Row } from '@/components/row'
import { Warn } from '@/components/warn'
import { useGetServer } from '@/hooks/useServers'

type Props = {
	serverParams: ServerParams
	isPlayersShown: boolean
}

export const Server = ({ serverParams, isPlayersShown }: Props) => {
	const { data, isPending, isError, error } = useGetServer(serverParams)
	const { host, port } = serverParams
	const address = `${host}:${port}`

	if (isPending) {
		return <Warn>Loading server {address}</Warn>
	}

	if (isError) {
		return <Warn>{error.message}</Warn>
	}

	const { name, numplayers, maxplayers, ping, map, players } = data

	return (
		<>
			<Row isHighlighted>
				<Cell>{name}</Cell>
				<Cell>
					<a href={`steam://connect/${address}`}>{address}</a>
				</Cell>
				<Cell isRightAligned>30</Cell>
				<PlayersCount numplayers={numplayers} maxplayers={maxplayers} />
				<Cell isRightAligned>{ping}</Cell>
				<Cell>{map}</Cell>
			</Row>
			{isPlayersShown && <Players players={players} />}
		</>
	)
}
