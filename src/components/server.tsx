import type { ServerParams } from '@/api/servers/servers.types'
import { Accent } from '@/components/accent'
import { Cell } from '@/components/cell'
import { Row } from '@/components/row'
import { Warn } from '@/components/warn'
import { useGetServer } from '@/hooks/useServers'
import { combine } from '@/utils/combine'
import { formatTime } from '@/utils/formatTime'

type Props = {
	serverParams: ServerParams
}

export const Server = ({ serverParams }: Props) => {
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
				<Cell isRightAligned>
					<span className={combine(numplayers > 0 && 'text-accent')}>
						{numplayers}
					</span>{' '}
					/ {maxplayers}
				</Cell>
				<Cell isRightAligned>{ping}</Cell>
				<Cell>{map}</Cell>
			</Row>
			{players.length > 0 && (
				<Row>
					<Cell colSpan={6} align='right' hasPadding={false} className='pb-10'>
						<table className='text-left'>
							<thead>
								<Row>
									<Cell colSpan={3} align='right'>
										<Accent>Players</Accent>
									</Cell>
								</Row>
							</thead>
							<thead>
								<Row>
									<Cell as='th'>Nickname</Cell>
									<Cell as='th' isRightAligned>
										Played
									</Cell>
									<Cell as='th' isRightAligned>
										Score
									</Cell>
								</Row>
							</thead>
							<tbody>
								{players.map(({ name, raw: { time, score } }, index) => (
									<Row key={`${index}-${name}-${time}-${score}`} isHighlighted>
										<Cell>{name}</Cell>
										<Cell isRightAligned>{formatTime(time)}</Cell>
										<Cell isRightAligned>{score}</Cell>
									</Row>
								))}
							</tbody>
						</table>
					</Cell>
				</Row>
			)}
		</>
	)
}
