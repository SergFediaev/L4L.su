import { combine } from '@/utils/combine'
import type { ComponentPropsWithoutRef } from 'react'

type Props = {
	isOdd?: boolean
} & ComponentPropsWithoutRef<'section'>

export const Section = ({
	isOdd,
	className,
	children,
	...restProps
}: Props) => {
	return (
		<section
			className={combine(
				'flex min-h-svh items-center justify-center',
				isOdd ? 'bg-black' : 'bg-background shadow-black shadow-inner',
				className,
			)}
			{...restProps}
		>
			<div className='flex flex-col items-center gap-10 p-8'>{children}</div>
		</section>
	)
}
