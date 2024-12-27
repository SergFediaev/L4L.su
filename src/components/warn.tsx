import { combine } from '@/utils/combine'
import type { ComponentPropsWithoutRef } from 'react'

export const Warn = ({
	className,
	...restProps
}: ComponentPropsWithoutRef<'td'>) => {
	return (
		<tr>
			<td
				colSpan={6}
				className={combine('text-center text-variant', className)}
				{...restProps}
			/>
		</tr>
	)
}
