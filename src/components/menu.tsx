'use client'

import { Button } from '@/components/button'
import { List } from '@/components/list'
import { LocaleButton } from '@/components/localeButton'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/tooltip'
import { combine } from '@/utils/combine'
import { Bug, Menu as MenuIcon, X } from 'lucide-react'
import { nanoid } from 'nanoid'
import { useTranslations } from 'next-intl'
import { useEffect, useRef, useState } from 'react'

export const Menu = () => {
	const t = useTranslations('HomePage')
	const [isMenuShown, setIsMenuShown] = useState(false)
	const [isDebug, setIsDebug] = useState(false)
	const [isError, setIsError] = useState(false)
	const menu = useRef<HTMLDivElement>(null)
	const button = useRef<HTMLButtonElement>(null)

	useEffect(() => {
		const closeMenu = (event: MouseEvent) => {
			if (
				!menu.current?.contains(event.target as Node) &&
				!button.current?.contains(event.target as Node)
			) {
				setIsMenuShown(false)
			}
		}

		addEventListener('mousedown', closeMenu)

		return () => {
			removeEventListener('mousedown', closeMenu)
		}
	}, [])

	const menuIcon = isMenuShown ? <X /> : <MenuIcon />
	const debugTitle = t(isDebug ? 'disableDebugMode' : 'enableDebugMode')

	const toggleIsMenuShown = () => {
		setIsMenuShown(!isMenuShown)
	}

	const toggleIsDebug = () => {
		setIsDebug(!isDebug)
	}

	const throwError = () => {
		setIsError(true)
	}

	if (isError) {
		throw Error(`${t('debugError')}${nanoid()}`)
	}

	return (
		<aside
			className={combine(
				'fixed right-8 bottom-8 z-10 ml-8 flex w-fit flex-col items-end transition duration-500',
				isMenuShown ? 'translate-y-0 ease-out' : 'translate-y-full ease-in',
			)}
		>
			<button
				type='button'
				ref={button}
				onClick={toggleIsMenuShown}
				className={combine(
					'hover:glow relative rounded-full bg-accent p-3 text-black shadow-black shadow-lg transition hover:bg-variant hover:shadow-none',
					isMenuShown ? '-translate-y-8' : '-translate-y-12',
				)}
			>
				{menuIcon}
			</button>
			<nav
				ref={menu}
				className='rounded-3xl bg-neutral-700 bg-opacity-80 p-8 shadow-black shadow-lg backdrop-blur-xl'
			>
				<List>
					<li>
						<a href='/#Servers'>{t('monitoringServers')}</a>
					</li>
					<li>
						<a href='/#Campaigns'>{t('randomCampaign')}</a>
					</li>
					<li>
						<a href='/#Community'>{t('community')}</a>
					</li>
					<li>
						<a href='/#Promo'>{t('promo')}</a>
					</li>
					<li>
						<a href='/#TV'>{t('tv')}</a>
					</li>
					<li className='flex flex-wrap justify-between gap-4'>
						<LocaleButton />
						<Tooltip placement='left'>
							<TooltipTrigger asChild>
								<Button variant='icon' onClick={toggleIsDebug}>
									<Bug
										className={combine(
											isDebug && 'fill-accent hover:fill-variant',
										)}
									/>
								</Button>
							</TooltipTrigger>
							<TooltipContent>{debugTitle}</TooltipContent>
						</Tooltip>
					</li>
					{isDebug && (
						<>
							<li>
								<a href='/not-found'>{t('page404')}</a>
							</li>
							<li>
								<Button onClick={throwError}>{t('pageError')}</Button>
							</li>
						</>
					)}
				</List>
			</nav>
		</aside>
	)
}
