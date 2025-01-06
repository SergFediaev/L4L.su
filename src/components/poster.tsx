import { combine } from '@/utils/combine'
import Image, { type ImageProps } from 'next/image'

export const Poster = ({ className, ...restProps }: ImageProps) => {
	return (
		<Image
			width={1_024}
			height={1_024}
			className={combine('w-[512px]', className)}
			{...restProps}
		/>
	)
}
