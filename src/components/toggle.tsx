import { Button } from '@/components/button'
import { TextWrap } from '@/components/textWrap'
import { ToggleLeft, ToggleRight } from 'lucide-react'
import type { ComponentPropsWithoutRef } from 'react'

const ICON_SIZE = 30

type Props = {
	isEnabled: boolean
} & ComponentPropsWithoutRef<'button'>

export const Toggle = ({ isEnabled, children, ...restProps }: Props) => {
	const icon = isEnabled ? (
		<ToggleRight size={ICON_SIZE} />
	) : (
		<ToggleLeft size={ICON_SIZE} className='opacity-50' />
	)

	return (
		<Button variant='toggle' {...restProps}>
			<TextWrap>{children}</TextWrap>
			{icon}
		</Button>
	)
}
