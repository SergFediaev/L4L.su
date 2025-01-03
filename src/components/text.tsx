import { combine } from '@/utils/combine'
import type { ComponentPropsWithoutRef } from 'react'

export const Text = ({
	className,
	...restProps
}: ComponentPropsWithoutRef<'p'>) => {
	return (
		<p className={combine('max-w-2xl indent-10', className)} {...restProps} />
	)
}
