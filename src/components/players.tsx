import type { Player } from '@/api/servers/servers.types'
import { Cell } from '@/components/cell'
import { Heading } from '@/components/heading'
import { Played } from '@/components/played'
import { Row } from '@/components/row'
import { useTranslations } from 'next-intl'

type Props = {
	players: Player[]
}

export const Players = (props: Props) => {
	const t = useTranslations('HomePage')

	if (!props.players.length) {
		return null
	}

	const players = props.players.map(({ name, raw: { time, score } }, index) => (
		<Row key={`${index}-${name}-${time}-${score}`} isHighlighted>
			<Cell>{name}</Cell>
			<Cell isRightAligned>
				<Played time={time} />
			</Cell>
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
								<Heading as='h4'>{t('players')}</Heading>
							</Cell>
						</Row>
					</thead>
					<thead>
						<Row>
							<Cell as='th'>{t('nickname')}</Cell>
							<Cell as='th' isRightAligned>
								{t('played')}
							</Cell>
							<Cell as='th' isRightAligned>
								{t('score')}
							</Cell>
						</Row>
					</thead>
					<tbody>{players}</tbody>
				</table>
			</Cell>
		</Row>
	)
}
