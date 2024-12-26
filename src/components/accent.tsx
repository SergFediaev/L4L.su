import { combine } from '@/utils/combine'
import type { ComponentPropsWithoutRef } from 'react'

export const Accent = ({
	className,
	...restProps
}: ComponentPropsWithoutRef<'h2'>) => {
	return (
		<h2
			className={combine('text-accent text-3xl font-bold', className)}
			{...restProps}
		/>
	)
}
