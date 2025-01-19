import { Loader } from '@/components/loader'
import { combine } from '@/utils/combine'
import type { ComponentPropsWithoutRef, ElementType } from 'react'

const DEFAULT_TYPE = 'button'

type Props<T extends ElementType = typeof DEFAULT_TYPE> = {
	as?: T
	variant?: 'primary' | 'lead' | 'icon' | 'outline' | 'toggle'
	isLoading?: boolean
	isDisabled?: boolean
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = typeof DEFAULT_TYPE>({
	as,
	variant = 'primary',
	isLoading,
	isDisabled,
	children,
	className,
	disabled,
	...restProps
}: Props<T>) => {
	const Component = as ?? DEFAULT_TYPE

	return (
		<Component
			disabled={disabled || isDisabled || isLoading}
			className={combine(
				'flex items-center justify-center gap-2 no-underline transition hover:text-black',
				variant === 'primary' &&
					'rounded-2xl bg-accent px-2 text-black hover:bg-variant sm:px-4',
				variant === 'lead' &&
					'hover:glow z-10 rounded-2xl bg-accent px-4 py-2 text-black shadow-black shadow-lg hover:bg-variant hover:shadow-none',
				(variant === 'primary' || variant === 'lead') &&
					isDisabled &&
					'hover:glow-none shadow-none hover:bg-accent',
				variant === 'icon' && 'text-accent hover:text-variant',
				variant === 'icon' && isDisabled && 'hover:text-accent',
				variant === 'outline' &&
					'grow rounded-2xl border-2 px-2 hover:border-black sm:px-4',
				variant === 'toggle' &&
					'w-full flex-wrap justify-between gap-y-0 text-left text-accent hover:text-variant',
				isLoading && 'cursor-progress',
				isDisabled && 'opacity-50',
				className,
			)}
			{...restProps}
		>
			{children}
			{isLoading && <Loader />}
		</Component>
	)
}
