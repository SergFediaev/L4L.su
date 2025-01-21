import type { ServerParams } from '@/api/servers/servers.types'
import { Button } from '@/components/button'
import { Cell } from '@/components/cell'
import { Heading } from '@/components/heading'
import { Row } from '@/components/row'
import { Server } from '@/components/server'
import { TextWrap } from '@/components/textWrap'
import { Toggle } from '@/components/toggle'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/tooltip'
import { serversStore } from '@/stores/serversStore'
import {
	Activity,
	Server as ServerIcon,
	Settings,
	Shield,
	Signal,
	Users,
} from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useState } from 'react'

const host = 'L4L.su'
const ICON_STROKE_WIDTH = 3

const SERVERS: readonly ServerParams[] = [
	{
		host,
		port: 27021,
	},
	{
		host,
		port: 27022,
	},
	{
		host,
		port: 27023,
	},
	{
		host,
		port: 27024,
	},
	{
		host,
		port: 27025,
	},
	{
		host,
		port: 27020,
	},
] as const

export const Monitoring = () => {
	const t = useTranslations('HomePage')
	const [isSettingsShown, setIsSettingsShown] = useState(false)
	const {
		isPlayersShown,
		isCopyShown,
		isConnectShown,
		isTickShown,
		toggleIsPlayersShown,
		toggleIsCopyShown,
		toggleIsConnectShown,
		toggleIsTickShown,
	} = serversStore()

	const servers = SERVERS.map((server, index) => (
		<Server
			key={`${index}-${server.port}`}
			serverParams={server}
			isPlayersShown={isPlayersShown}
		/>
	))

	const settingsTitle = t(
		isSettingsShown ? 'collapseSettings' : 'expandSettings',
	)

	const toggleIsSettingsShown = () => {
		setIsSettingsShown(!isSettingsShown)
	}

	return (
		<div id='Servers' className='max-w-full'>
			<Heading as='h2'>
				<Tooltip placement='right'>
					<TooltipTrigger asChild>
						<Button
							variant='icon'
							onClick={toggleIsSettingsShown}
							className='group flex-wrap justify-start gap-x-4 p-2 text-left sm:p-4'
						>
							<TextWrap>{t('onlineServersMonitoring')}</TextWrap>
							<Settings size={30} className='group-hover:animate-spin' />
						</Button>
					</TooltipTrigger>
					<TooltipContent>{settingsTitle}</TooltipContent>
				</Tooltip>
			</Heading>
			{isSettingsShown && (
				<div className='max-w-lg p-2 sm:p-4'>
					{t('autoRefresh')}
					<Toggle onClick={toggleIsPlayersShown} isEnabled={isPlayersShown}>
						{t('alwaysShowPlayers')}
					</Toggle>
					<Toggle onClick={toggleIsCopyShown} isEnabled={isCopyShown}>
						{t('showCopyButton')}
					</Toggle>
					<Toggle onClick={toggleIsConnectShown} isEnabled={isConnectShown}>
						{t('showConnectButton')}
					</Toggle>
					<Toggle onClick={toggleIsTickShown} isEnabled={isTickShown}>
						{t('showTickrate')}
					</Toggle>
				</div>
			)}
			<div className='overflow-x-auto p-1'>
				<table className='text-left'>
					<thead className='align-top'>
						<Row>
							<Cell as='th' className='align-middle'>
								<Tooltip>
									<TooltipTrigger asChild>
										<ServerIcon strokeWidth={ICON_STROKE_WIDTH} />
									</TooltipTrigger>
									<TooltipContent>{t('serverName')}</TooltipContent>
								</Tooltip>
							</Cell>
							<Cell as='th'>{t('addressPort')}</Cell>
							<Cell as='th' align='right' className='align-middle'>
								{isTickShown && (
									<Tooltip>
										<TooltipTrigger asChild>
											<Activity strokeWidth={ICON_STROKE_WIDTH} />
										</TooltipTrigger>
										<TooltipContent>{t('tickrate')}</TooltipContent>
									</Tooltip>
								)}
							</Cell>
							<Tooltip>
								<Cell as='th' align='right' className='align-middle'>
									<Tooltip>
										<TooltipTrigger asChild>
											<Users strokeWidth={ICON_STROKE_WIDTH} />
										</TooltipTrigger>
										<TooltipContent>{t('players')}</TooltipContent>
									</Tooltip>
								</Cell>
							</Tooltip>
							<Cell as='th' align='right' className='align-middle'>
								<Tooltip>
									<TooltipTrigger asChild>
										<Signal strokeWidth={ICON_STROKE_WIDTH} />
									</TooltipTrigger>
									<TooltipContent>{t('ping')}</TooltipContent>
								</Tooltip>
							</Cell>
							<Cell as='th'>{t('map')}</Cell>
							<Cell as='th' className='align-middle'>
								<Tooltip>
									<TooltipTrigger asChild>
										<Shield strokeWidth={ICON_STROKE_WIDTH} />
									</TooltipTrigger>
									<TooltipContent>{t('status')}</TooltipContent>
								</Tooltip>
							</Cell>
						</Row>
					</thead>
					<tbody className='align-baseline'>{servers}</tbody>
				</table>
			</div>
		</div>
	)
}
