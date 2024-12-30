'use client'

import type { ServerParams } from '@/api/servers/servers.types'
import { Button } from '@/components/button'
import { Cell } from '@/components/cell'
import { Loader } from '@/components/loader'
import { Players } from '@/components/players'
import { PlayersCount } from '@/components/playersCount'
import { Row } from '@/components/row'
import { Warn } from '@/components/warn'
import { useGetServer } from '@/hooks/useServers'
import { Copy, CopyCheck, Gamepad2, ShieldCheck } from 'lucide-react'
import { useState } from 'react'

const CONNECT_TITLE = 'Connect to server'

type Props = {
	serverParams: ServerParams
	isPlayersShown: boolean
}

export const Server = ({ serverParams, isPlayersShown }: Props) => {
	const [isCopied, setIsCopied] = useState(false)
	const { data, isPending, isRefetching, isError, error } =
		useGetServer(serverParams)

	const { host, port } = serverParams
	const address = `${host}:${port}`
	const connect = `steam://connect/${address}`
	const icon = isCopied ? <CopyCheck /> : <Copy />
	const status = isRefetching ? (
		<Loader isAccent title='Refreshing' />
	) : (
		<ShieldCheck />
	)

	const copy = async () => {
		try {
			await navigator.clipboard.writeText(`connect ${address}`)

			setIsCopied(true)
		} catch (error) {
			console.error(`Copy error: ${error}`)
		}
	}

	if (isPending) {
		return (
			<Warn>
				<Loader>
					Loading server&nbsp;<span className='font-mono'>{address}</span>&nbsp;
				</Loader>
			</Warn>
		)
	}

	if (isError) {
		return <Warn>{error.message}</Warn>
	}

	const { name, numplayers, maxplayers, ping, map, players } = data

	return (
		<>
			<Row isHighlighted>
				<Cell>{name}</Cell>
				<Cell className='flex gap-4'>
					<a href={connect} title={CONNECT_TITLE} className='font-mono'>
						{address}
					</a>
					<Button
						variant='icon'
						onClick={copy}
						title='Copy server address to clipboard'
					>
						{icon}
					</Button>
					<Button variant='icon' as='a' href={connect} title={CONNECT_TITLE}>
						<Gamepad2 />
					</Button>
				</Cell>
				<Cell isRightAligned>30</Cell>
				<PlayersCount numplayers={numplayers} maxplayers={maxplayers} />
				<Cell isRightAligned>{ping}</Cell>
				<Cell>{map}</Cell>
				<Cell>{status}</Cell>
			</Row>
			{isPlayersShown && <Players players={players} />}
		</>
	)
}
