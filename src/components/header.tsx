'use client'

import { List } from '@/components/list'
import { LocaleButton } from '@/components/localeButton'
import { combine } from '@/utils/combine'
import { useTranslations } from 'next-intl'
import type { ComponentPropsWithoutRef } from 'react'

export const Header = ({
	className,
	...restProps
}: ComponentPropsWithoutRef<'header'>) => {
	const t = useTranslations('HomePage')

	return (
		<header
			className={combine(
				'top-0 z-30 snap-end bg-black bg-opacity-80 p-4 shadow-2xl shadow-black backdrop-blur-lg sm:sticky',
				className,
			)}
			{...restProps}
		>
			<List isColumn={false} className='container mx-auto justify-evenly'>
				<li>
					<a href='/#Servers'>{t('servers')}</a>
				</li>
				<li>
					<a href='https://steamcommunity.com/groups/Left4Legend/announcements'>
						{t('news')}
					</a>
				</li>
				<li>
					<a href='https://steamcommunity.com/groups/Left4Legend'>
						{t('group')}
					</a>
				</li>
				<li>
					<a href='https://steamcommunity.com/chat/invite/HWJHvO7g'>
						{t('chat')}
					</a>
				</li>
				<li>
					<a href='https://steamcommunity.com/sharedfiles/filedetails/?id=3384448522'>
						{t('guide')}
					</a>
				</li>
				<li>
					<a href='https://steamcommunity.com/sharedfiles/filedetails/?id=3388609126'>
						{t('maps')}
					</a>
				</li>
				<li>
					<a href='https://steamcommunity.com/groups/Left4Legend/discussions/0/601891362926791888'>
						{t('donate')}
					</a>
				</li>
				<li>
					<LocaleButton />
				</li>
			</List>
		</header>
	)
}
