import { combine } from '@/utils/combine'
import type { ComponentPropsWithoutRef } from 'react'

export const Text = ({
	className,
	...restProps
}: ComponentPropsWithoutRef<'p'>) => {
	return (
		<p
			className={combine('max-w-2xl sm:indent-10', className)}
			{...restProps}
		/>
	)
}
