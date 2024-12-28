import { combine } from '@/utils/combine'
import type { ComponentPropsWithoutRef, ElementType } from 'react'

const DEFAULT_TYPE = 'td'

type Props<T extends ElementType = typeof DEFAULT_TYPE> = {
	as?: T
	hasPadding?: boolean
	isRightAligned?: boolean
} & ComponentPropsWithoutRef<T>

export const Cell = <T extends ElementType = typeof DEFAULT_TYPE>({
	as,
	hasPadding = true,
	isRightAligned,
	className,
	...restProps
}: Props<T>) => {
	const Component = as ?? DEFAULT_TYPE

	return (
		<Component
			className={combine(
				hasPadding && 'py-1 sm:py-2 px-2 sm:px-4',
				isRightAligned && 'text-right',
				className,
			)}
			{...restProps}
		/>
	)
}
