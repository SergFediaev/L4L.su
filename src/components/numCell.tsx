import { combine } from '@/utils/combine'
import type { ComponentPropsWithoutRef } from 'react'

type Props = {
	isRightAligned?: boolean
} & ComponentPropsWithoutRef<'td'>

export const NumCell = ({
	isRightAligned = true,
	className,
	...restProps
}: Props) => {
	return (
		<td
			className={combine(isRightAligned && 'text-right', className)}
			{...restProps}
		/>
	)
}
