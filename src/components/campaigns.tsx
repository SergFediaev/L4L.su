import { Button } from '@/components/button'
import { Heading } from '@/components/heading'
import { filterValues } from '@/utils/filterValues'
import { getRandomIndex } from '@/utils/getRandomIndex'
import { useState } from 'react'

const CAMPAIGNS = [
	'Dead Center',
	'The Passing',
	'Dark Carnival',
	'Swamp Fever',
	'Hard Rain',
	'The Parish',
	'Cold Stream',
	'No Mercy',
	'Crash Course',
	'Death Toll',
	'Dead Air',
	'Blood Harvest',
	'The Sacrifice',
	'The Last Stand',
] as const

export const Campaigns = () => {
	const [campaign, setCampaign] = useState<(typeof CAMPAIGNS)[number]>()
	const [isRandomizing, setIsRandomizing] = useState(false)

	const randomCampaignText = isRandomizing
		? 'Randomizing campaign'
		: 'Random official campaign'

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
			<Heading as='h4'>Can't choose a campaign to play?</Heading>
			<Button variant='lead' onClick={randomCampaign} isLoading={isRandomizing}>
				{randomCampaignText}
			</Button>
			{campaign && <span className='animate-pulse'>{campaign}</span>}
		</div>
	)
}
