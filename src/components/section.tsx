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
				'min-h-svh flex items-center justify-center',
				isOdd ? 'bg-black' : 'bg-background shadow-inner shadow-black',
				className,
			)}
			{...restProps}
		>
			<div className='flex flex-col gap-10 p-8 items-center'>{children}</div>
		</section>
	)
}
