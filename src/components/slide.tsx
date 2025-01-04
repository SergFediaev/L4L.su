import { Heading } from '@/components/heading'
import { Review } from '@/components/review'
import { Section } from '@/components/section'
import { Text } from '@/components/text'
import type { ComponentPropsWithoutRef } from 'react'

type Props = {
	heading: string
	text: string
	review: string
	source?: string
} & ComponentPropsWithoutRef<'section'>

export const Slide = ({
	heading,
	text,
	review,
	source,
	...restProps
}: Props) => {
	return (
		<Section {...restProps}>
			<Heading>{heading}</Heading>
			<Text>{text}</Text>
			<Review source={source}>{review}</Review>
		</Section>
	)
}
