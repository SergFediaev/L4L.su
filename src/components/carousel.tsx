import {
	Arrow,
	AutoPlay,
	Fade,
	Pagination,
	Perspective,
} from '@egjs/flicking-plugins'
import Flicking, { ViewportSlot } from '@egjs/react-flicking'
import '@egjs/react-flicking/dist/flicking.css'
import { Button } from '@/components/button'
import { Slide } from '@/components/slide'
import { settingsStore } from '@/stores/settingsStore'
import { combine } from '@/utils/combine'
import { scrollToElement } from '@/utils/scrollToElement'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import type { ComponentPropsWithoutRef } from 'react'
import { useLocale } from 'use-intl'

const plugins = [
	new AutoPlay({ duration: 5_000, stopOnHover: true }),
	new Fade('', 2),
	new Perspective({ rotate: -1, scale: 2, perspective: 600 }),
	new Arrow({ prevElSelector: '.prev', nextElSelector: '.next' }),
	new Pagination({
		type: 'fraction',
		selector: '.pagination',
		renderFraction: (currentClass, totalClass) =>
			`<span class='${currentClass}'></span> / <span class='${totalClass}'></span>`,
	}),
]

const CAROUSEL_ID = 'Promo'

export const Carousel = ({
	className,
	...restProps
}: ComponentPropsWithoutRef<'div'>) => {
	const locale = useLocale()
	const t = useTranslations('HomePage')
	const { isAnimationsEnabled } = settingsStore()
	const scrollToCarousel = () => scrollToElement(CAROUSEL_ID)

	return (
		<div
			id={CAROUSEL_ID}
			className={combine('flex min-h-svh flex-col justify-center', className)}
			{...restProps}
		>
			<Flicking
				circular={true}
				plugins={plugins}
				key={locale}
				duration={isAnimationsEnabled ? 1_000 : 0}
				moveType='strict'
			>
				<Slide
					heading={t('slide1Heading')}
					text={t('slide1Text')}
					review={t('slide1Review')}
					source={t('slide1Source')}
				/>
				<Slide
					heading={t('slide2Heading')}
					text={t('slide2Text')}
					review={t('slide2Review')}
					source={t('slide2Source')}
				/>
				<Slide
					heading={t('slide3Heading')}
					text={t('slide3Text')}
					review={t('slide3Review')}
				/>
				<Slide
					heading={t('slide4Heading')}
					text={t('slide4Text')}
					review={t('slide4Review')}
					source={t('slide4Source')}
				/>
				<Slide
					heading={t('slide5Heading')}
					text={t('slide5Text')}
					review={t('slide5Review')}
					source={t('slide5Source')}
				/>
				<Slide
					heading={t('slide6Heading')}
					text={t('slide6Text')}
					review={t('slide6Review')}
					source={t('slide6Source')}
				/>
				<Slide
					heading={t('slide7Heading')}
					text={t('slide7Text')}
					review={t('slide7Review')}
				/>
				<ViewportSlot>
					<div className='flex justify-center p-8'>
						<nav className='flex flex-wrap items-center justify-center gap-2 rounded-3xl bg-background p-2 sm:rounded-full'>
							<span className='prev'>
								<Button variant='icon' onClick={scrollToCarousel}>
									<ChevronLeft size={48} strokeWidth={3} />
								</Button>
							</span>
							<div className='pagination font-mono' />
							<span className='next'>
								<Button variant='icon' onClick={scrollToCarousel}>
									<ChevronRight size={48} strokeWidth={3} />
								</Button>
							</span>
						</nav>
					</div>
				</ViewportSlot>
			</Flicking>
		</div>
	)
}
