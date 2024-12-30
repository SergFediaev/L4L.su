import type { Player } from '@/api/servers/servers.types'
import { Cell } from '@/components/cell'
import { Heading } from '@/components/heading'
import { Row } from '@/components/row'
import { formatTime } from '@/utils/formatTime'

type Props = {
	players: Player[]
}

export const Players = (props: Props) => {
	if (!props.players.length) {
		return null
	}

	const players = props.players.map(({ name, raw: { time, score } }, index) => (
		<Row key={`${index}-${name}-${time}-${score}`} isHighlighted>
			<Cell>{name}</Cell>
			<Cell isRightAligned>{formatTime(time)}</Cell>
			<Cell isRightAligned>{score}</Cell>
		</Row>
	))

	return (
		<Row>
			<Cell colSpan={7} align='right' hasPadding={false} className='pb-10'>
				<table className='text-left'>
					<thead>
						<Row>
							<Cell colSpan={3} align='right'>
								<Heading as='h4'>Players</Heading>
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
					<tbody>{players}</tbody>
				</table>
			</Cell>
		</Row>
	)
}
