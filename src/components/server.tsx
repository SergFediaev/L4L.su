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
import {
	Copy,
	CopyCheck,
	Eye,
	EyeOff,
	Gamepad2,
	ShieldCheck,
} from 'lucide-react'
import { useEffect, useState } from 'react'

const CONNECT_TITLE = 'Connect to server'

type Props = {
	serverParams: ServerParams
	isPlayersShown: boolean
}

export const Server = ({ serverParams, ...restProps }: Props) => {
	const [isPlayersShown, setIsPlayersShown] = useState(restProps.isPlayersShown)
	const [isCopied, setIsCopied] = useState(false)
	const { data, isPending, isRefetching, isError, error } =
		useGetServer(serverParams)

	useEffect(() => {
		setIsPlayersShown(restProps.isPlayersShown)
	}, [restProps.isPlayersShown])

	const { host, port } = serverParams
	const address = `${host}:${port}`
	const connect = `steam://connect/${address}`
	const copyIcon = isCopied ? <CopyCheck /> : <Copy />
	const status = isRefetching ? (
		<Loader isAccent title='Refreshing' />
	) : (
		<ShieldCheck />
	)

	const toggleIsPlayersShown = () => {
		setIsPlayersShown(!isPlayersShown)
	}

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
	const hasNotPlayers = numplayers === 0
	const playersIcon = isPlayersShown ? <EyeOff /> : <Eye />
	const playersTitle = hasNotPlayers
		? undefined
		: isPlayersShown
			? 'Hide players'
			: 'Show players'

	return (
		<>
			<Row isHighlighted>
				<Cell className='text-nowrap'>{name}</Cell>
				<Cell className='flex gap-4'>
					<a href={connect} title={CONNECT_TITLE} className='font-mono'>
						{address}
					</a>
					<Button
						variant='icon'
						onClick={copy}
						title='Copy server address to clipboard'
					>
						{copyIcon}
					</Button>
					<Button variant='icon' as='a' href={connect} title={CONNECT_TITLE}>
						<Gamepad2 />
					</Button>
				</Cell>
				<Cell isRightAligned>30</Cell>
				<Cell isRightAligned className='flex gap-4'>
					<PlayersCount numplayers={numplayers} maxplayers={maxplayers} />
					<Button
						variant='icon'
						onClick={toggleIsPlayersShown}
						title={playersTitle}
						disabled={hasNotPlayers}
					>
						{playersIcon}
					</Button>
				</Cell>
				<Cell isRightAligned>{ping}</Cell>
				<Cell>{map}</Cell>
				<Cell className='align-middle'>
					<span className='flex justify-end'>{status}</span>
				</Cell>
			</Row>
			{isPlayersShown && <Players players={players} />}
		</>
	)
}
