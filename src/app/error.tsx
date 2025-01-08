'use client'

import { Button } from '@/components/button'
import { Heading } from '@/components/heading'
import { combine } from '@/utils/combine'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function ErrorPage({
	error,
	reset,
}: {
	error: Error & { digest?: string }
	reset: () => void
}) {
	const [isMounted, setIsMounted] = useState(false)
	const t = useTranslations('HomePage')

	useEffect(() => {
		setIsMounted(true)
	}, [])

	const reload = () => {
		window.location.reload()
	}

	return (
		<div className='min-h-svh bg-amber-600 text-white'>
			<div className='container mx-auto flex flex-wrap-reverse items-center justify-center'>
				<aside className='flex flex-col gap-5 p-8'>
					<Heading as='h1' isAccent={false}>
						{t('somethingWentWrong')}
					</Heading>
					<p className='break-all'>{error.message}</p>
					<div className='flex flex-wrap gap-5'>
						<Button variant='outline' onClick={reset}>
							{t('tryAgain')}
						</Button>
						<Button variant='outline' onClick={reload}>
							{t('reloadPage')}
						</Button>
					</div>
					<Link
						href='/'
						className='self-start decoration-white hover:text-black hover:decoration-black'
					>
						{t('returnToHomepage')}
					</Link>
				</aside>
				<Image
					src='/mika.gif'
					alt={t('errorArtAlt')}
					width={362}
					height={498}
					unoptimized
					className={combine(
						'transition duration-1000 ease-out',
						isMounted ? 'translate-y-0' : '-translate-y-full',
					)}
				/>
			</div>
		</div>
	)
}
