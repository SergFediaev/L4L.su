import { Loader } from '@/components/loader'
import { combine } from '@/utils/combine'
import type { ComponentPropsWithoutRef, ElementType } from 'react'

const DEFAULT_TYPE = 'button'

type Props<T extends ElementType = typeof DEFAULT_TYPE> = {
	as?: T
	variant?: 'primary' | 'lead' | 'icon'
	isLoading?: boolean
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = typeof DEFAULT_TYPE>({
	as,
	variant = 'primary',
	isLoading,
	children,
	className,
	disabled,
	...restProps
}: Props<T>) => {
	const Component = as ?? DEFAULT_TYPE

	return (
		<Component
			disabled={disabled || isLoading}
			className={combine(
				'flex items-center gap-2 rounded-2xl no-underline transition hover:text-black',
				variant === 'primary' &&
					'bg-accent px-2 text-black hover:bg-variant sm:px-4',
				variant === 'lead' &&
					'hover:glow bg-accent px-4 py-2 text-black shadow-black shadow-lg hover:bg-variant hover:shadow-none',
				variant === 'icon' && 'text-accent hover:text-variant',
				isLoading && 'cursor-progress',
				disabled && 'opacity-50 hover:text-accent',
				className,
			)}
			{...restProps}
		>
			{children}
			{isLoading && <Loader />}
		</Component>
	)
}
