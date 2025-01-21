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
					'align-middle transition hover:bg-black hover:outline hover:outline-1 hover:outline-variant [&_a:hover]:text-variant [&_a]:text-accent [&_a]:no-underline',
				className,
			)}
			{...restProps}
		/>
	)
}
