import { List } from '@/components/list'
import { combine } from '@/utils/combine'
import type { ComponentPropsWithoutRef } from 'react'

export const Header = ({
	className,
	...restProps
}: ComponentPropsWithoutRef<'header'>) => {
	return (
		<header
			className={combine(
				'sticky top-0 z-10 bg-black bg-opacity-80 p-4 shadow-2xl shadow-black backdrop-blur-lg',
				className,
			)}
			{...restProps}
		>
			<List isColumn={false} className='container mx-auto justify-evenly'>
				<li>
					<a href='/#Servers'>Servers</a>
				</li>
				<li>
					<a href='https://steamcommunity.com/groups/Left4Legend/announcements'>
						News
					</a>
				</li>
				<li>
					<a href='https://steamcommunity.com/groups/Left4Legend'>Group</a>
				</li>
				<li>
					<a href='https://steamcommunity.com/chat/invite/HWJHvO7g'>Chat</a>
				</li>
				<li>
					<a href='https://steamcommunity.com/sharedfiles/filedetails/?id=3384448522'>
						Guide
					</a>
				</li>
				<li>
					<a href='https://steamcommunity.com/sharedfiles/filedetails/?id=3388609126'>
						Maps
					</a>
				</li>
			</List>
		</header>
	)
}
