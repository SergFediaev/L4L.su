import { Cell } from '@/components/cell'
import { combine } from '@/utils/combine'

type Props = {
	numplayers: number
	maxplayers: number
}

export const PlayersCount = ({ numplayers, maxplayers }: Props) => {
	const hasPlayers = numplayers > 0

	return (
		<Cell isRightAligned>
			<span className={combine(hasPlayers && 'text-accent')}>{numplayers}</span>{' '}
			/ {maxplayers}
		</Cell>
	)
}
