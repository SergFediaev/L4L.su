import { List } from '@/components/list'
import { combine } from '@/utils/combine'
import { useTranslations } from 'next-intl'
import type { ComponentPropsWithoutRef } from 'react'

export const Footer = ({
	className,
	...restProps
}: ComponentPropsWithoutRef<'footer'>) => {
	const t = useTranslations('HomePage')

	return (
		<footer
			className={combine(
				'bg-black p-6 text-base shadow-background shadow-inner',
				className,
			)}
			{...restProps}
		>
			<div className='container mx-auto flex flex-wrap gap-x-10 gap-y-4 sm:justify-around'>
				<List>
					<li>
						<a href='/#Servers'>{t('serversMonitoring')}</a>
					</li>
					<li>
						<a href='https://steamcommunity.com/groups/Left4Legend/discussions/0/601891362926791888'>
							{t('supportByDonation')}
						</a>
					</li>
					<li>
						<a href='https://steamcommunity.com/groups/Left4Legend/discussions/0/601891362926791278'>
							{t('reportServersProblem')}
						</a>
					</li>
					<li>
						<a href='https://steamcommunity.com/sharedfiles/filedetails/?id=3384448522'>
							{t('completeServersGuide')}
						</a>
					</li>
				</List>
				<List className='sm:text-center'>
					<li>
						© 2022–{new Date().getFullYear()}{' '}
						<a href='https://Sefo.su'>{t('copyright')}</a>
					</li>
					<li>
						<q>{t('slogan')}</q>
					</li>
					<li>
						<a href='https://github.com/SefoNotasi/Left4LegendServer'>
							{t('githubServersRepository')}
						</a>
					</li>
				</List>
				<List>
					<li>
						<a href='https://steamcommunity.com/groups/Left4Legend'>
							{t('steamCommunityGroup')}
						</a>
					</li>
					<li>
						<a href='https://steamcommunity.com/chat/invite/HWJHvO7g'>
							{t('steamCommunityChat')}
						</a>
					</li>
					<li>
						<a href='https://steamcommunity.com/groups/Left4Legend/announcements'>
							{t('communityAnnouncements')}
						</a>
					</li>
					<li>
						<a href='https://steamcommunity.com/sharedfiles/filedetails/?id=3388609126'>
							{t('serversMapsCollection')}
						</a>
					</li>
				</List>
			</div>
		</footer>
	)
}
