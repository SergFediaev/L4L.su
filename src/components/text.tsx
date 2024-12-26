import { combine } from '@/utils/combine'
import type { ComponentPropsWithoutRef } from 'react'

export const Text = ({
	className,
	...restProps
}: ComponentPropsWithoutRef<'p'>) => {
	return (
		<p className={combine('indent-10 max-w-2xl', className)} {...restProps} />
	)
}
