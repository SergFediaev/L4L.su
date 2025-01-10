import { Button } from '@/components/button'
import { Heading } from '@/components/heading'
import { Poster } from '@/components/poster'
import { combine } from '@/utils/combine'
import { getRandomIndex } from '@/utils/getRandomIndex'
import { scrollToElement } from '@/utils/scrollToElement'
import { AutoPlay } from '@egjs/flicking-plugins'
import Flicking from '@egjs/react-flicking'
import { CircleX } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'
import { useLocale } from 'use-intl'

type Campaign = {
	name: string
	poster: string
}

const plugins = [new AutoPlay({ duration: 0 })]

const CAMPAIGNS_ID = 'Campaigns'

export const Campaigns = () => {
	const t = useTranslations('HomePage')

	const CAMPAIGNS: readonly Campaign[] = [
		{
			name: t('customCampaign'),
			poster: '/campaigns/custom.png',
		},
		{
			name: t('deadCenter'),
			poster: '/campaigns/dead_center.png',
		},
		{
			name: t('passing'),
			poster: '/campaigns/passing.png',
		},
		{
			name: t('darkCarnival'),
			poster: '/campaigns/dark_carnival.png',
		},
		{
			name: t('swampFever'),
			poster: '/campaigns/swamp_fever.png',
		},
		{
			name: t('hardRain'),
			poster: '/campaigns/hard_rain.png',
		},
		{
			name: t('parish'),
			poster: '/campaigns/parish.png',
		},
		{
			name: t('coldStream'),
			poster: '/campaigns/cold_stream.png',
		},
		{
			name: t('noMercy'),
			poster: '/campaigns/no_mercy.png',
		},
		{
			name: t('crashCourse'),
			poster: '/campaigns/crash_course.png',
		},
		{
			name: t('deathToll'),
			poster: '/campaigns/death_toll.png',
		},
		{
			name: t('deadAir'),
			poster: '/campaigns/dead_air.png',
		},
		{
			name: t('bloodHarvest'),
			poster: '/campaigns/blood_harvest.png',
		},
		{
			name: t('sacrifice'),
			poster: '/campaigns/sacrifice.png',
		},
		{
			name: t('lastStand'),
			poster: '/campaigns/last_stand.png',
		},
	] as const

	const [campaign, setCampaign] = useState<(typeof CAMPAIGNS)[number]>()
	const [isRandomizing, setIsRandomizing] = useState(false)
	const [isResetting, setIsResetting] = useState(false)
	const locale = useLocale()

	// biome-ignore lint/correctness/useExhaustiveDependencies: Translate campaign name
	useEffect(() => {
		if (!campaign) {
			return
		}

		const currentCampaign = CAMPAIGNS.find(
			({ poster }) => poster === campaign.poster,
		)

		if (!currentCampaign) {
			return
		}

		setCampaign(currentCampaign)
	}, [locale])

	const OFFICIAL_CAMPAIGNS: readonly Campaign[] = CAMPAIGNS.slice(1)
	const randomCampaignText = t(
		isRandomizing ? 'randomizingCampaign' : 'randomCampaign',
	)

	const randomCampaign = () => {
		setIsRandomizing(true)

		setTimeout(() => {
			const campaigns = CAMPAIGNS.filter(
				({ poster }) => poster !== campaign?.poster,
			)

			const randomIndex = getRandomIndex(campaigns)

			setCampaign(campaigns[randomIndex])
			setIsRandomizing(false)
			scrollToElement(CAMPAIGNS_ID)
		}, 2_000)
	}

	const resetCampaign = () => {
		setIsResetting(true)

		setTimeout(() => {
			setCampaign(undefined)
			setIsResetting(false)
		}, 1_000)
	}

	return (
		<div
			id={CAMPAIGNS_ID}
			className='flex min-h-svh flex-col justify-center bg-black py-8'
		>
			<div className='flex flex-col items-start gap-5 px-8 sm:items-center'>
				<Heading as='h4'>{t('campaignToPlay')}</Heading>
				<Button
					variant='lead'
					onClick={randomCampaign}
					isLoading={isRandomizing}
					isDisabled={isResetting}
				>
					{randomCampaignText}
				</Button>
			</div>
			{campaign ? (
				<div
					className={combine(
						'relative flex flex-col items-center transition duration-1000',
						(isRandomizing || isResetting) && 'opacity-0',
					)}
				>
					<Poster src={campaign.poster} alt={campaign.name} />
					<p className='absolute bottom-0 flex flex-wrap justify-center gap-4 px-8'>
						<span className='animate-pulse'>{campaign.name}</span>
						<Button
							variant='icon'
							onClick={resetCampaign}
							isDisabled={isResetting}
						>
							<CircleX />
						</Button>
					</p>
				</div>
			) : (
				<div
					className={combine(
						'transition duration-1000',
						(isRandomizing || isResetting) && 'opacity-0',
					)}
				>
					<Flicking
						circular={true}
						plugins={plugins}
						align='prev'
						easing={x => x}
						duration={10_000}
						disableOnInit
						defaultIndex={getRandomIndex(OFFICIAL_CAMPAIGNS)}
					>
						{OFFICIAL_CAMPAIGNS.map(campaign => (
							<Poster
								key={campaign.name}
								src={campaign.poster}
								alt={campaign.name}
							/>
						))}
					</Flicking>
				</div>
			)}
		</div>
	)
}
