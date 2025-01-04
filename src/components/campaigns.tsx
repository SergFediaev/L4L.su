import { Button } from '@/components/button'
import { Heading } from '@/components/heading'
import { filterValues } from '@/utils/filterValues'
import { getRandomIndex } from '@/utils/getRandomIndex'
import { useTranslations } from 'next-intl'
import { useState } from 'react'

export const Campaigns = () => {
	const t = useTranslations('HomePage')

	const CAMPAIGNS = [
		t('deadCenter'),
		t('passing'),
		t('darkCarnival'),
		t('swampFever'),
		t('hardRain'),
		t('parish'),
		t('coldStream'),
		t('noMercy'),
		t('crashCourse'),
		t('deathToll'),
		t('deadAir'),
		t('bloodHarvest'),
		t('sacrifice'),
		t('lastStand'),
	] as const

	const [campaign, setCampaign] = useState<(typeof CAMPAIGNS)[number]>()
	const [isRandomizing, setIsRandomizing] = useState(false)

	const randomCampaignText = t(
		isRandomizing ? 'randomizingCampaign' : 'randomOfficialCampaign',
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
		<div className='flex flex-col items-center gap-5'>
			<Heading as='h4'>{t('campaignToPlay')}</Heading>
			<Button variant='lead' onClick={randomCampaign} isLoading={isRandomizing}>
				{randomCampaignText}
			</Button>
			{campaign && <span className='animate-pulse'>{campaign}</span>}
		</div>
	)
}
