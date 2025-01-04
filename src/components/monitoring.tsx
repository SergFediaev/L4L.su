import type { ServerParams } from '@/api/servers/servers.types'
import { Button } from '@/components/button'
import { Cell } from '@/components/cell'
import { Heading } from '@/components/heading'
import { Row } from '@/components/row'
import { Server } from '@/components/server'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/tooltip'
import { useState } from 'react'

const SERVERS: ServerParams[] = [
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
	const [isPlayersShown, setIsPlayersShown] = useState(true)

	const servers = SERVERS.map((server, index) => (
		<Server
			key={`${index}-${server.port}`}
			serverParams={server}
			isPlayersShown={isPlayersShown}
		/>
	))

	const playersText = isPlayersShown
		? 'Always hide players'
		: 'Always show players'

	const toggleIsPlayersShown = () => setIsPlayersShown(!isPlayersShown)

	return (
		<div className='max-w-full'>
			<div className='flex flex-wrap justify-between gap-2 p-2 sm:p-4'>
				<Tooltip>
					<TooltipTrigger asChild>
						<Heading as='h2'>Online servers monitoring</Heading>
						<TooltipContent>Auto refresh every 30 seconds</TooltipContent>
					</TooltipTrigger>
				</Tooltip>
				<Button onClick={toggleIsPlayersShown}>{playersText}</Button>
			</div>
			<div className='overflow-x-auto p-1'>
				<table className='text-left'>
					<thead className='align-top'>
						<Row>
							<Cell as='th'>Server name</Cell>
							<Cell as='th'>IP address : port</Cell>
							<Tooltip>
								<TooltipTrigger asChild>
									<Cell as='th' isRightAligned>
										Tick
									</Cell>
								</TooltipTrigger>
								<TooltipContent>Tickrate</TooltipContent>
							</Tooltip>
							<Tooltip>
								<TooltipTrigger asChild>
									<Cell as='th' isRightAligned>
										Players
									</Cell>
								</TooltipTrigger>
								<TooltipContent>Current / Max</TooltipContent>
							</Tooltip>
							<Cell as='th' isRightAligned>
								Ping
							</Cell>
							<Cell as='th'>Map</Cell>
							<Cell as='th' isRightAligned>
								Status
							</Cell>
						</Row>
					</thead>
					<tbody className='align-baseline'>{servers}</tbody>
				</table>
			</div>
		</div>
	)
}
