import { Cell } from '@/components/cell'
import { Row } from '@/components/row'
import { combine } from '@/utils/combine'
import type { ComponentPropsWithoutRef } from 'react'

export const Warn = ({
	className,
	...restProps
}: ComponentPropsWithoutRef<'td'>) => {
	return (
		<Row>
			<Cell
				colSpan={6}
				className={combine('text-center text-variant', className)}
				{...restProps}
			/>
		</Row>
	)
}
