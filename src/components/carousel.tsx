import { Arrow, AutoPlay, Pagination } from '@egjs/flicking-plugins'
import Flicking, { ViewportSlot } from '@egjs/react-flicking'
import '@egjs/react-flicking/dist/flicking.css'
import '@egjs/flicking-plugins/dist/arrow.css'
import '@egjs/flicking-plugins/dist/pagination.css'
import { Slide } from '@/components/slide'
import { combine } from '@/utils/combine'
import { useTranslations } from 'next-intl'
import type { ComponentPropsWithoutRef } from 'react'
import { useLocale } from 'use-intl'

const plugins = [
	new AutoPlay({ duration: 5_000, stopOnHover: true }),
	new Pagination({ type: 'fraction' }),
	new Arrow(),
]

export const Carousel = ({
	className,
	...restProps
}: ComponentPropsWithoutRef<'div'>) => {
	const locale = useLocale()
	const t = useTranslations('HomePage')

	return (
		<div className={combine('container mx-auto', className)} {...restProps}>
			<Flicking circular={true} plugins={plugins} key={locale}>
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
					<span className='flicking-arrow-prev' />
					<span className='flicking-arrow-next' />
					<div className='flicking-pagination' />
				</ViewportSlot>
			</Flicking>
		</div>
	)
}
