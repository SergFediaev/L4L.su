'use client'

import { Button } from '@/components/button'
import { Campaigns } from '@/components/campaigns'
import { Carousel } from '@/components/carousel'
import { Group } from '@/components/group'
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
			<div className='flex min-h-svh snap-center flex-col items-center justify-center gap-10 bg-background px-8 py-20 shadow-black shadow-inner'>
				<Logo />
				<Monitoring />
			</div>
			<div className='bg-black'>
				<Campaigns />
				<Group />
				<Carousel />
				<aside className='invisible sticky bottom-0 z-10 w-fit py-8 pl-8 sm:visible'>
					<Button as='a' href={SERVERS} variant='lead'>
						{t('playNow')}
					</Button>
				</aside>
			</div>
			<Video />
			<section className='flex snap-center flex-wrap justify-center gap-10 overflow-hidden bg-background px-8 pt-20'>
				<aside className='flex flex-col items-center justify-center gap-10'>
					<a
						href={SERVERS}
						className='font-black text-4xl underline-offset-8 sm:text-8xl'
					>
						{t('nowPlaying')}
					</a>
					<Tooltip placement='bottom'>
						<TooltipTrigger asChild>
							<Image src='/qr.svg' width={350} height={350} alt={t('qrAlt')} />
							<TooltipContent>{t('qrTitle')}</TooltipContent>
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
