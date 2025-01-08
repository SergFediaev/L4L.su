import { Heading } from '@/components/heading'
import { Stats } from '@/components/stats'
import { Text } from '@/components/text'
import { useGetGroup } from '@/hooks/useGroup'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

export const Group = () => {
	const t = useTranslations('HomePage')
	const { data } = useGetGroup({
		groupId: 'Left4Legend',
	})

	return (
		<div id='Community' className='bg-background'>
			<div className='container mx-auto flex min-h-svh snap-start flex-col gap-10 px-8 pt-8'>
				<div className='flex grow flex-col justify-end gap-10'>
					<div className='flex flex-col items-center gap-5'>
						<Heading>{t('communityHeading')}</Heading>
						<Text>{t('communityDescription')}</Text>
					</div>
					<div className='flex flex-wrap justify-evenly gap-10'>
						<Stats heading={t('inGroup')} members={data?.members}>
							<a href='https://steamcommunity.com/groups/Left4Legend'>
								{t('joinGroup')}
							</a>
						</Stats>
						<Stats heading={t('inChat')} members={data?.membersInChat}>
							<a href='https://steamcommunity.com/chat/invite/HWJHvO7g'>
								{t('joinChat')}
							</a>
						</Stats>
						<Stats heading={t('inGame')} members={data?.membersInGame}>
							<a href='/#Servers'>{t('joinGame')}</a>
						</Stats>
					</div>
				</div>
				<div className='flex grow items-end justify-center'>
					<div className='sticky bottom-0 flex'>
						<Image
							src='/l4d2.webp'
							alt='L4D2'
							width={630}
							height={445}
							className='w-1/2'
						/>
						<Image
							src='/l4d1.webp'
							alt='L4D1'
							width={962}
							height={632}
							className='w-1/2'
						/>
					</div>
				</div>
			</div>
		</div>
	)
}
