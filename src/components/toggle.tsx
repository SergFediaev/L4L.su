import { ToggleLeft, ToggleRight } from 'lucide-react'

const ICON_SIZE = 30

type Props = {
	isEnabled: boolean
}

export const Toggle = ({ isEnabled }: Props) => {
	return isEnabled ? (
		<ToggleRight size={ICON_SIZE} />
	) : (
		<ToggleLeft size={ICON_SIZE} className='opacity-50' />
	)
}
