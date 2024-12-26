import { combine } from '@/utils/combine'
import type { ComponentPropsWithoutRef } from 'react'

type Props = {
	isColumn?: boolean
} & ComponentPropsWithoutRef<'ul'>

export const List = ({ isColumn = true, className, ...restProps }: Props) => {
	return (
		<ul
			className={combine(
				'flex flex-wrap gap-4',
				isColumn && 'flex-col',
				className,
			)}
			{...restProps}
		/>
	)
}
