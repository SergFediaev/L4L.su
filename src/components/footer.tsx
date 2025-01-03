import { List } from '@/components/list'
import { combine } from '@/utils/combine'
import type { ComponentPropsWithoutRef } from 'react'

export const Footer = ({
	className,
	...restProps
}: ComponentPropsWithoutRef<'footer'>) => {
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
						<a href='/#Servers'>Monitoring servers</a>
					</li>
					<li>
						<a href='https://steamcommunity.com/groups/Left4Legend/discussions/0/601891362926791888'>
							Support by donation
						</a>
					</li>
					<li>
						<a href='https://steamcommunity.com/groups/Left4Legend/discussions/0/601891362926791278'>
							Report a servers problem
						</a>
					</li>
					<li>
						<a href='https://steamcommunity.com/sharedfiles/filedetails/?id=3384448522'>
							Complete servers guide
						</a>
					</li>
				</List>
				<List className='sm:text-center'>
					<li>
						© 2022–{new Date().getFullYear()} <a href='https://Sefo.su'>Sefo</a>
					</li>
					<li>
						<q>Legends never die!</q>
					</li>
					<li>
						<a href='https://github.com/SefoNotasi/Left4LegendServer'>
							GitHub servers repository
						</a>
					</li>
				</List>
				<List>
					<li>
						<a href='https://steamcommunity.com/groups/Left4Legend'>
							Steam community group
						</a>
					</li>
					<li>
						<a href='https://steamcommunity.com/chat/invite/HWJHvO7g'>
							Steam community chat
						</a>
					</li>
					<li>
						<a href='https://steamcommunity.com/groups/Left4Legend/announcements'>
							Community announcements
						</a>
					</li>
					<li>
						<a href='https://steamcommunity.com/sharedfiles/filedetails/?id=3388609126'>
							Servers maps collection
						</a>
					</li>
				</List>
			</div>
		</footer>
	)
}
