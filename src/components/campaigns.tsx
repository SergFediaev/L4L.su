import { Button } from '@/components/button'
import { Heading } from '@/components/heading'
import { filterValues } from '@/utils/filterValues'
import { getRandomIndex } from '@/utils/getRandomIndex'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useState } from 'react'

type Campaign = {
	name: string
	poster: string
}

export const Campaigns = () => {
	const t = useTranslations('HomePage')

	const CAMPAIGNS: Campaign[] = [
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

	const randomCampaignText = t(
		isRandomizing ? 'randomizingCampaign' : 'randomCampaign',
	)

	const randomCampaign = () => {
		setIsRandomizing(true)

		if (campaign) {
			setCampaign(undefined)
		}

		setTimeout(() => {
			const campaigns = filterValues(CAMPAIGNS, campaign)
			const randomIndex = getRandomIndex(campaigns)

			setCampaign(campaigns[randomIndex])
			setIsRandomizing(false)
		}, 2_000)
	}

	return (
		<>
			<div className='flex flex-col items-start gap-5 sm:items-center'>
				<Heading as='h4'>{t('campaignToPlay')}</Heading>
				<Button
					variant='lead'
					onClick={randomCampaign}
					isLoading={isRandomizing}
				>
					{randomCampaignText}
				</Button>
			</div>
			{campaign && (
				<div className='flex flex-col items-center gap-5'>
					<p className='animate-pulse'>{campaign.name}</p>
					<Image
						src={campaign.poster}
						alt={campaign.name}
						width={1_024}
						height={1_024}
						className='w-full max-w-2xl'
					/>
				</div>
			)}
		</>
	)
}
