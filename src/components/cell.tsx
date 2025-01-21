import { combine } from '@/utils/combine'
import type { ComponentPropsWithoutRef, ElementType } from 'react'

const DEFAULT_TYPE = 'td'

type Props<T extends ElementType = typeof DEFAULT_TYPE> = {
	as?: T
	hasPadding?: boolean
	isRightAligned?: boolean
	isMono?: boolean
} & ComponentPropsWithoutRef<T>

export const Cell = <T extends ElementType = typeof DEFAULT_TYPE>({
	as,
	hasPadding = true,
	isRightAligned,
	isMono,
	className,
	...restProps
}: Props<T>) => {
	const Component = as ?? DEFAULT_TYPE

	return (
		<Component
			className={combine(
				hasPadding && 'px-2 py-1 sm:px-4 sm:py-2',
				isRightAligned && 'text-right',
				isMono && 'font-mono',
				className,
			)}
			{...restProps}
		/>
	)
}
