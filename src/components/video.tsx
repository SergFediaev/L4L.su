import { combine } from '@/utils/combine'
import type { ComponentPropsWithoutRef } from 'react'

type Props = {
	isDarkened?: boolean
} & ComponentPropsWithoutRef<'video'>

export const Video = ({ isDarkened, className, ...restProps }: Props) => {
	return (
		<>
			<video
				id='TV'
				src='/background.mp4'
				muted
				loop
				autoPlay
				className={combine(
					'-z-20 relative min-h-svh w-full snap-center object-cover',
					className,
				)}
				{...restProps}
			/>
			{isDarkened && (
				<div className='-z-10 fixed inset-0 bg-black bg-opacity-50' />
			)}
		</>
	)
}
