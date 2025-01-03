import { combine } from '@/utils/combine'
import { Inter } from 'next/font/google'
import type { ComponentPropsWithoutRef } from 'react'

const inter = Inter({
	subsets: ['latin'],
	display: 'swap',
})

export const Body = ({
	className,
	...restProps
}: ComponentPropsWithoutRef<'body'>) => {
	return (
		<body
			className={combine(
				`${inter.className} text-neutral-50 antialiased sm:text-2xl`,
				className,
			)}
			{...restProps}
		/>
	)
}
