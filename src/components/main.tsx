'use client'

import { Button } from '@/components/button'
import { Campaigns } from '@/components/campaigns'
import { Carousel } from '@/components/carousel'
import { Logo } from '@/components/logo'
import { Monitoring } from '@/components/monitoring'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/tooltip'
import { Video } from '@/components/video'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import type { ComponentPropsWithoutRef } from 'react'

const SERVERS = '/#Servers'

export const Main = (props: ComponentPropsWithoutRef<'main'>) => {
	const t = useTranslations('HomePage')

	return (
		<main id='Servers' {...props}>
			<div className='flex min-h-svh flex-col items-center justify-center gap-10 bg-background px-8 py-20 shadow-black shadow-inner'>
				<Logo />
				<Monitoring />
				<Campaigns />
			</div>
			<Video />
			<div className='bg-black'>
				<Carousel />
				<aside className='sticky bottom-0 z-10 flex justify-end p-8'>
					<Button as='a' href={SERVERS} variant='lead'>
						{t('playNow')}
					</Button>
				</aside>
			</div>
			<section className='flex flex-wrap justify-center gap-10 overflow-hidden bg-background px-8 pt-20'>
				<aside className='flex flex-col items-center justify-center gap-10'>
					<a
						href={SERVERS}
						className='font-black text-4xl underline-offset-8 sm:text-8xl'
					>
						{t('nowPlaying')}
					</a>
					<Tooltip placement='bottom'>
						<TooltipTrigger asChild>
							<Image src='/qr.svg' width={350} height={350} alt={t('qrCode')} />
							<TooltipContent>{t('dontScan')}</TooltipContent>
						</TooltipTrigger>
					</Tooltip>
				</aside>
				<Tooltip>
					<TooltipTrigger asChild>
						<Image
							src='/levi.png'
							alt={t('artAlt')}
							width={393}
							height={1144}
							className='translate-y-10'
						/>
					</TooltipTrigger>
					<TooltipContent>{t('artTitle')}</TooltipContent>
				</Tooltip>
			</section>
		</main>
	)
}
