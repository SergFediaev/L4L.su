import { Heading } from '@/components/heading'
import { Loader } from '@/components/loader'
import { combine } from '@/utils/combine'
import type { ComponentPropsWithoutRef } from 'react'

type Props = {
	heading: string
	members?: number
} & ComponentPropsWithoutRef<'aside'>

export const Stats = ({
	heading,
	members,
	className,
	children,
	...restProps
}: Props) => {
	return (
		<aside
			className={combine(
				'flex flex-col items-center gap-2 sm:gap-4',
				className,
			)}
			{...restProps}
		>
			{children}
			<Heading isVariant>{members ?? <Loader />}</Heading>
			<p>{heading}</p>
		</aside>
	)
}
