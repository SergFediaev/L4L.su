import { combine } from '@/utils/combine'
import type { ComponentPropsWithoutRef } from 'react'

export const TextWrap = ({
	className,
	...restProps
}: ComponentPropsWithoutRef<'span'>) => {
	return <span className={combine('flex-1', className)} {...restProps} />
}
