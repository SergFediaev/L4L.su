import { combine } from '@/utils/combine'
import type { ComponentPropsWithoutRef, ElementType } from 'react'

const DEFAULT_TYPE = 'h3'

type Props<T extends ElementType = typeof DEFAULT_TYPE> = {
	as?: T
	isLarge?: boolean
	isAccent?: boolean
	isBold?: boolean
} & ComponentPropsWithoutRef<T>

export const Heading = <T extends ElementType = typeof DEFAULT_TYPE>({
	as,
	isLarge = true,
	isAccent = true,
	isBold = true,
	className,
	...restProps
}: Props<T>) => {
	const Component = as ?? DEFAULT_TYPE

	return (
		<Component
			className={combine(
				isLarge && 'text-3xl',
				isAccent && 'text-accent',
				isBold && 'font-bold',
				className,
			)}
			{...restProps}
		/>
	)
}
