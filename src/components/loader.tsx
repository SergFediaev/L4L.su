import { combine } from '@/utils/combine'
import { LoaderCircle } from 'lucide-react'
import type { ComponentPropsWithoutRef } from 'react'

type Props = {
	isAccent?: boolean
} & ComponentPropsWithoutRef<'span'>

export const Loader = ({
	isAccent,
	children,
	className,
	...restProps
}: Props) => {
	return (
		<span className={combine('flex items-center', className)} {...restProps}>
			{children}
			<LoaderCircle
				className={combine('animate-spin', isAccent && 'text-variant')}
			/>
		</span>
	)
}
