import type { ServerParams } from '@/api/servers/servers.types'
import { Button } from '@/components/button'
import { Cell } from '@/components/cell'
import { Heading } from '@/components/heading'
import { Row } from '@/components/row'
import { Server } from '@/components/server'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/tooltip'
import { serversStore } from '@/stores/serversStore'
import { useTranslations } from 'next-intl'

const SERVERS: readonly ServerParams[] = [
	{
		host: '95.143.216.252',
		port: 27021,
	},
	{
		host: '95.143.216.252',
		port: 27022,
	},
	{
		host: '95.143.216.252',
		port: 27023,
	},
	{
		host: '95.143.216.252',
		port: 27024,
	},
	{
		host: '95.143.216.252',
		port: 27025,
	},
	{
		host: '95.143.216.252',
		port: 27020,
	},
] as const

export const Monitoring = () => {
	const { isPlayersShown, toggleIsPlayersShown } = serversStore()
	const t = useTranslations('HomePage')

	const servers = SERVERS.map((server, index) => (
		<Server
			key={`${index}-${server.port}`}
			serverParams={server}
			isPlayersShown={isPlayersShown}
		/>
	))

	const playersText = t(
		isPlayersShown ? 'alwaysHidePlayers' : 'alwaysShowPlayers',
	)

	return (
		<div id='Servers' className='max-w-full'>
			<div className='flex flex-wrap justify-between gap-2 p-2 sm:p-4'>
				<Tooltip>
					<TooltipTrigger asChild>
						<Heading as='h2' className='text-left'>
							{t('onlineServersMonitoring')}
						</Heading>
						<TooltipContent>{t('autoRefresh')}</TooltipContent>
					</TooltipTrigger>
				</Tooltip>
				<Button onClick={toggleIsPlayersShown}>{playersText}</Button>
			</div>
			<div className='overflow-x-auto p-1'>
				<table className='text-left'>
					<thead className='align-top'>
						<Row>
							<Cell as='th'>{t('serverName')}</Cell>
							<Cell as='th'>{t('ipPort')}</Cell>
							<Tooltip>
								<TooltipTrigger asChild>
									<Cell as='th' isRightAligned>
										{t('tick')}
									</Cell>
								</TooltipTrigger>
								<TooltipContent>{t('tickrate')}</TooltipContent>
							</Tooltip>
							<Tooltip>
								<TooltipTrigger asChild>
									<Cell as='th' isRightAligned>
										{t('players')}
									</Cell>
								</TooltipTrigger>
								<TooltipContent>{t('currentMax')}</TooltipContent>
							</Tooltip>
							<Cell as='th' isRightAligned>
								{t('ping')}
							</Cell>
							<Cell as='th'>{t('map')}</Cell>
							<Cell as='th' isRightAligned>
								{t('status')}
							</Cell>
						</Row>
					</thead>
					<tbody className='align-baseline'>{servers}</tbody>
				</table>
			</div>
		</div>
	)
}
