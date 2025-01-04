'use client'

import { Button } from '@/components/button'
import { Campaigns } from '@/components/campaigns'
import { Carousel } from '@/components/carousel'
import { Logo } from '@/components/logo'
import { Monitoring } from '@/components/monitoring'
import { Video } from '@/components/video'
import Image from 'next/image'
import type { ComponentPropsWithoutRef } from 'react'

const SERVERS = '/#Servers'

export const Main = (props: ComponentPropsWithoutRef<'main'>) => {
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
						Play now
					</Button>
				</aside>
			</div>
			<section className='flex flex-wrap justify-center gap-10 overflow-hidden bg-background px-8 pt-20'>
				<aside className='flex flex-col items-center justify-center gap-10'>
					<a
						href={SERVERS}
						className='font-black text-4xl underline-offset-8 sm:text-8xl'
					>
						Now playing!
					</a>
					<Image
						src='/code.svg'
						width={400}
						height={400}
						alt='QR code'
						title="Don't scan!"
					/>
				</aside>
				<Image
					src='/levi.png'
					alt='Levi Ackerman'
					width={393}
					height={1144}
					className='translate-y-10'
					title='Not anime fan, but they say projects work better with it :D'
				/>
			</section>
		</main>
	)
}
