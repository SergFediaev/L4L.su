import type { ServerParams } from '@/api/servers/servers.types'
import { Accent } from '@/components/accent'
import { Cell } from '@/components/cell'
import { Row } from '@/components/row'
import { Server } from '@/components/server'

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
	const servers = SERVERS.map((server, index) => (
		<Server key={`${index}-${server.port}`} serverParams={server} />
	))

	return (
		<div className='max-w-full mb-32'>
			<Accent className='text-center' title='Auto refresh every 30 seconds'>
				Online servers monitoring
			</Accent>
			<div className='overflow-x-auto p-1'>
				<table className='text-left'>
					<thead className='align-top'>
						<Row>
							<Cell as='th'>Server name</Cell>
							<Cell as='th'>Click to connect</Cell>
							<Cell as='th' isRightAligned title='Tickrate'>
								Tick
							</Cell>
							<Cell as='th' isRightAligned title='Current / Max'>
								Players
							</Cell>
							<Cell as='th' isRightAligned>
								Ping
							</Cell>
							<Cell as='th'>Map</Cell>
						</Row>
					</thead>
					<tbody className='align-baseline'>{servers}</tbody>
				</table>
			</div>
		</div>
	)
}
