'use client'

import { Button } from '@/components/button'
import { Heading } from '@/components/heading'
import { List } from '@/components/list'
import { LocaleButton } from '@/components/localeButton'
import { Toggle } from '@/components/toggle'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/tooltip'
import { debugStore } from '@/stores/debugStore'
import { type Section, settingsStore } from '@/stores/settingsStore'
import { combine } from '@/utils/combine'
import { Bug, Menu as MenuIcon, X } from 'lucide-react'
import { nanoid } from 'nanoid'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { type ChangeEvent, useEffect, useRef, useState } from 'react'

export const Menu = () => {
	const t = useTranslations('HomePage')
	const [isMenuShown, setIsMenuShown] = useState(false)
	const [isError, setIsError] = useState(false)
	const menu = useRef<HTMLDivElement>(null)
	const button = useRef<HTMLButtonElement>(null)

	const { isDebug, isMarkupShown, toggleIsDebug, toggleIsMarkupShown } =
		debugStore()

	const {
		startSection,
		isAnimationsEnabled,
		isHeaderPinned,
		setStartSection,
		toggleIsAnimationsEnabled,
		toggleIsHeaderPinned,
	} = settingsStore()

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

	const SECTIONS: readonly Required<Section>[] = [
		{ id: 'Default', name: t('default') },
		{ id: 'Servers', name: t('serversMonitoring') },
		{ id: 'Campaigns', name: t('randomCampaign') },
		{ id: 'Community', name: t('community') },
		{ id: 'Promo', name: t('promo') },
		{ id: 'TV', name: t('tv') },
	] as const

	const debugTitle = t(isDebug ? 'disableDebugMode' : 'enableDebugMode')
	const markupText = t(isMarkupShown ? 'hideMarkup' : 'showMarkup')

	const toggleIsMenuShown = () => {
		setIsMenuShown(!isMenuShown)
	}

	const throwError = () => {
		setIsError(true)
	}

	const onChangeSection = ({
		currentTarget: { value },
	}: ChangeEvent<HTMLSelectElement>) => {
		const section = SECTIONS.find(({ id }) => id === value)

		if (!section) {
			return
		}

		setStartSection(section)
	}

	if (isError) {
		throw Error(`${t('debugError')}${nanoid()}`)
	}

	return (
		<>
			<button
				type='button'
				ref={button}
				onClick={toggleIsMenuShown}
				className={combine(
					'hover:glow fixed right-8 bottom-8 z-10 rounded-full bg-accent p-3 text-black shadow-black shadow-lg transition hover:bg-variant hover:shadow-none',
					isMenuShown ? 'opacity-0' : 'opacity-100',
				)}
			>
				<MenuIcon />
			</button>
			<nav
				ref={menu}
				className={combine(
					'fixed right-0 bottom-0 z-30 flex max-h-screen w-full flex-col overflow-y-auto bg-neutral-700 bg-opacity-80 shadow-black shadow-lg backdrop-blur-xl transition duration-500 sm:h-full sm:w-fit',
					isMenuShown
						? 'ease-out'
						: 'translate-y-full ease-in sm:translate-x-full sm:translate-y-0',
				)}
			>
				<Heading
					as='h5'
					isAccent={false}
					isLarge={false}
					className='sticky top-0 bg-black px-8 py-4'
				>
					<Button
						variant='icon'
						onClick={toggleIsMenuShown}
						className='w-full justify-between'
					>
						{t('menu')}
						<X strokeWidth={4} />
					</Button>
				</Heading>
				<div className='flex h-full flex-col justify-between gap-10 px-8 pt-4 pb-8'>
					<List>
						<li>
							<a href='/#Servers'>{t('serversMonitoring')}</a>
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
					</List>
					<List>
						<Heading as='h5' isAccent={false} isLarge={false}>
							{t('settings')}
						</Heading>
						<li>
							<label className='flex flex-wrap justify-between gap-x-2 sm:flex-col'>
								{t('startSection')}
								<select
									onChange={onChangeSection}
									value={startSection.id}
									className='w-full max-w-fit truncate rounded bg-accent pl-2 text-black sm:pl-4'
								>
									{SECTIONS.map(({ id, name }) => (
										<option key={id} value={id} className='checked:bg-variant'>
											{name}
										</option>
									))}
								</select>
							</label>
						</li>
						<li>
							<Button variant='toggle' onClick={toggleIsAnimationsEnabled}>
								{t('slideAnimation')}
								<Toggle isEnabled={isAnimationsEnabled} />
							</Button>
						</li>
						<li>
							<Button variant='toggle' onClick={toggleIsHeaderPinned}>
								{t('pinnedHeader')}
								<Toggle isEnabled={isHeaderPinned} />
							</Button>
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
									<Link href='/not-found'>{t('page404')}</Link>
								</li>
								<li>
									<Button onClick={throwError}>{t('pageError')}</Button>
								</li>
								<li>
									<Button onClick={toggleIsMarkupShown}>{markupText}</Button>
								</li>
							</>
						)}
					</List>
				</div>
			</nav>
		</>
	)
}
