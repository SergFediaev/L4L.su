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

export const Carousel = (props: ComponentPropsWithoutRef<'div'>) => {
	const locale = useLocale()
	const t = useTranslations('HomePage')

	return (
		<div {...props}>
			<Flicking circular={true} plugins={plugins} key={locale} duration={1_000}>
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
					<nav className='absolute right-8 bottom-8 left-8 z-20 mx-auto flex w-fit flex-wrap items-center justify-center gap-2 rounded-full bg-background p-2 shadow-black shadow-lg'>
						<span className='prev'>
							<Button variant='icon'>
								<ChevronLeft size={48} strokeWidth={3} />
							</Button>
						</span>
						<div className='pagination font-mono' />
						<span className='next'>
							<Button variant='icon'>
								<ChevronRight size={48} strokeWidth={3} />
							</Button>
						</span>
					</nav>
				</ViewportSlot>
			</Flicking>
		</div>
	)
}
