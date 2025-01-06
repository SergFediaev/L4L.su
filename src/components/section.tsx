import { combine } from '@/utils/combine'
import type { ComponentPropsWithoutRef } from 'react'

export const Section = ({
	className,
	children,
	...restProps
}: ComponentPropsWithoutRef<'section'>) => {
	return (
		<section
			className={combine(
				'flex w-full cursor-grab items-end justify-center',
				className,
			)}
			{...restProps}
		>
			<div className='flex flex-col items-center gap-10 p-8'>{children}</div>
		</section>
	)
}
