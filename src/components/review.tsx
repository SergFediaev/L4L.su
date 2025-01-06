import { combine } from '@/utils/combine'
import type { ComponentPropsWithoutRef } from 'react'

type Props = {
	source?: string
} & ComponentPropsWithoutRef<'p'>

export const Review = ({
	source,
	className,
	children,
	...restProps
}: Props) => {
	return (
		<p className={combine('-rotate-3 italic', className)} {...restProps}>
			<q>{children}</q>
			{source && ` — ${source}`}
		</p>
	)
}
