import { combine } from '@/utils/combine'

type Props = {
	numplayers: number
	maxplayers: number
}

export const PlayersCount = ({ numplayers, maxplayers }: Props) => {
	const hasPlayers = numplayers > 0

	return (
		<span className='text-nowrap'>
			<span className={combine(hasPlayers && 'text-variant')}>
				{numplayers}
			</span>
			/{maxplayers}
		</span>
	)
}
