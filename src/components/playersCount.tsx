import { combine } from '@/utils/combine'

type Props = {
	numplayers: number
	maxplayers: number
}

export const PlayersCount = ({ numplayers, maxplayers }: Props) => {
	const isFull = numplayers >= maxplayers
	const hasPlayers = numplayers > 0

	return (
		<span className={combine('text-nowrap', isFull && 'text-variant')}>
			<span className={combine(hasPlayers && 'text-variant')}>
				{numplayers}
			</span>
			/{maxplayers}
		</span>
	)
}
