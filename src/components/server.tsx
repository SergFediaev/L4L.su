'use client'

import type { ServerParams } from '@/api/servers/servers.types'
import { Button } from '@/components/button'
import { Cell } from '@/components/cell'
import { Loader } from '@/components/loader'
import { Players } from '@/components/players'
import { PlayersCount } from '@/components/playersCount'
import { Row } from '@/components/row'
import { ServerName } from '@/components/serverName'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/tooltip'
import { Warn } from '@/components/warn'
import { useGetServer } from '@/hooks/useServers'
import { serversStore } from '@/stores/serversStore'
import {
	Copy,
	CopyCheck,
	Eye,
	EyeOff,
	Gamepad2,
	ShieldCheck,
} from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'

type Props = {
	serverParams: ServerParams
	isPlayersShown: boolean
}

export const Server = ({ serverParams, ...restProps }: Props) => {
	const [isPlayersShown, setIsPlayersShown] = useState(restProps.isPlayersShown)
	const [isCopied, setIsCopied] = useState(false)
	const t = useTranslations('HomePage')
	const { isCopyShown, isConnectShown, isTickShown } = serversStore()
	const { data, isPending, isRefetching, isError, error } =
		useGetServer(serverParams)

	useEffect(() => {
		setIsPlayersShown(restProps.isPlayersShown)
	}, [restProps.isPlayersShown])

	const { host, port } = serverParams
	const address = `${host}:${port}`
	const connect = `steam://connect/${address}`
	const connectTitle = t('connectToServer')
	const copyIcon = isCopied ? <CopyCheck /> : <Copy />
	const status = isRefetching ? (
		<Tooltip placement='right'>
			<TooltipTrigger asChild>
				<Loader isAccent />
			</TooltipTrigger>
			<TooltipContent>{t('refreshing')}</TooltipContent>
		</Tooltip>
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
					{t('loadingServer')}&nbsp;<span className='font-mono'>{address}</span>
					&nbsp;
				</Loader>
			</Warn>
		)
	}

	if (isError) {
		return <Warn>{error.message}</Warn>
	}

	const { name, numplayers, maxplayers, ping, map, players } = data
	const hasPlayers = numplayers > 0
	const playersIcon = isPlayersShown ? <EyeOff /> : <Eye />
	const playersTitle = hasPlayers
		? t(isPlayersShown ? 'hidePlayers' : 'showPlayers')
		: undefined

	return (
		<>
			<Row isHighlighted>
				<Cell className='text-nowrap'>
					<ServerName name={name} />
				</Cell>
				<Cell className='flex gap-4'>
					<Tooltip>
						<TooltipTrigger asChild>
							<a href={connect} className='font-mono'>
								{address}
							</a>
						</TooltipTrigger>
						<TooltipContent>{connectTitle}</TooltipContent>
					</Tooltip>
					{isCopyShown && (
						<Tooltip>
							<TooltipTrigger asChild>
								<Button variant='icon' onClick={copy}>
									{copyIcon}
								</Button>
							</TooltipTrigger>
							<TooltipContent>{t('copyServerAddress')}</TooltipContent>
						</Tooltip>
					)}
					{isConnectShown && (
						<Tooltip>
							<TooltipTrigger asChild>
								<Button variant='icon' as='a' href={connect}>
									<Gamepad2 />
								</Button>
							</TooltipTrigger>
							<TooltipContent>{connectTitle}</TooltipContent>
						</Tooltip>
					)}
				</Cell>
				<Cell isRightAligned isMono>
					{isTickShown && 30}
				</Cell>
				<Cell isMono className='flex items-baseline justify-end gap-4'>
					{hasPlayers && (
						<Tooltip>
							<TooltipTrigger asChild>
								<Button
									variant='icon'
									onClick={toggleIsPlayersShown}
									isDisabled={!hasPlayers}
									className='self-center'
								>
									{playersIcon}
								</Button>
							</TooltipTrigger>
							<TooltipContent>{playersTitle}</TooltipContent>
						</Tooltip>
					)}
					<PlayersCount numplayers={numplayers} maxplayers={maxplayers} />
				</Cell>
				<Cell isRightAligned isMono>
					{ping}
				</Cell>
				<Cell>{map}</Cell>
				<Cell className='align-middle'>{status}</Cell>
			</Row>
			{isPlayersShown && <Players players={players} />}
		</>
	)
}
