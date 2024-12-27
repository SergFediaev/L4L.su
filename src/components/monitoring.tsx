import { Accent } from '@/components/accent'
import { Server } from '@/components/server'

const SERVERS: {
	host: string
	port: number
}[] = [
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
	const servers = SERVERS.map(({ host, port }) => (
		<Server key={port} host={host} port={port} />
	))

	return (
		<div className='max-w-full mb-32'>
			<Accent className='text-center'>Servers monitoring</Accent>
			<div className='overflow-x-auto'>
				<table className='text-left sm:border-spacing-y-4 sm:border-spacing-x-8 border-spacing-x-4 border-spacing-y-2 border-separate'>
					<thead className='align-top'>
						<tr>
							<th>Server name</th>
							<th>Click to connect</th>
							<th title='Tickrate'>Tick</th>
							<th title='Current / Max'>Players</th>
							<th>Ping</th>
							<th>Map</th>
						</tr>
					</thead>
					<tbody className='align-top'>{servers}</tbody>
				</table>
			</div>
		</div>
	)
}
