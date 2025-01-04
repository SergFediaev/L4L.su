import { combine } from '@/utils/combine'
import type { ComponentPropsWithoutRef } from 'react'

type Props = {
	isHighlighted?: boolean
} & ComponentPropsWithoutRef<'tr'>

export const Row = ({ isHighlighted, className, ...restProps }: Props) => {
	return (
		<tr
			className={combine(
				isHighlighted &&
					'transition hover:bg-black hover:outline hover:outline-1 hover:outline-variant [&_*]:hover:no-underline',
				className,
			)}
			{...restProps}
		/>
	)
}
