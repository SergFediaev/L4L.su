import { Heading } from '@/components/heading'
import { combine } from '@/utils/combine'
import { filterValues } from '@/utils/filterValues'
import { getRandomIndex } from '@/utils/getRandomIndex'
import { useTranslations } from 'next-intl'
import { Saira_Stencil_One } from 'next/font/google'
import Image from 'next/image'
import { useState } from 'react'

const saira = Saira_Stencil_One({
	subsets: ['latin'],
	weight: '400',
})

const ROTATES: readonly string[] = [
	'rotate-0',
	'rotate-45',
	'rotate-90',
	'rotate-180',
	'-rotate-90',
	'-rotate-45',
] as const

export const Logo = () => {
	const [isLighted, setIsLighted] = useState(false)
	const [rotate, setRotate] = useState<(typeof ROTATES)[number]>()
	const t = useTranslations('HomePage')

	const toggleIsLighted = () => {
		setIsLighted(!isLighted)
	}

	const randomRotate = () => {
		const rotates = filterValues(ROTATES, rotate)
		const randomIndex = getRandomIndex(rotates)

		setRotate(rotates[randomIndex])
	}

	return (
		<div className='flex flex-wrap items-center justify-center gap-x-10'>
			<Heading
				as='h1'
				isLarge={false}
				isAccent={false}
				isBold={false}
				className={combine(
					`${saira.className} cursor-pointer text-center text-6xl antialiased transition duration-1000 sm:text-8xl`,
					isLighted && 'glow',
				)}
				onClick={toggleIsLighted}
			>
				{t('left4Legend')}
			</Heading>
			<Image
				src='/logo.svg'
				alt={t('logo')}
				width={400}
				height={525}
				className={combine(
					'w-28 cursor-pointer transition duration-1000 hover:animate-pulse',
					rotate,
					isLighted && 'glow',
				)}
				onClick={randomRotate}
				onMouseEnter={randomRotate}
				priority
			/>
		</div>
	)
}
