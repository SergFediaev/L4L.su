'use client'

import { Button } from '@/components/button'
import { Heading } from '@/components/heading'
import { List } from '@/components/list'
import { LocaleButton } from '@/components/localeButton'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/tooltip'
import { debugStore } from '@/stores/debugStore'
import { type Section, settingsStore } from '@/stores/settingsStore'
import { combine } from '@/utils/combine'
import { Bug, Menu as MenuIcon, ToggleLeft, ToggleRight, X } from 'lucide-react'
import { nanoid } from 'nanoid'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { type ChangeEvent, useEffect, useRef, useState } from 'react'

const ICON_SIZE = 30

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
		setStartSection,
		toggleIsAnimationsEnabled,
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

	const menuIcon = isMenuShown ? <X /> : <MenuIcon />
	const debugTitle = t(isDebug ? 'disableDebugMode' : 'enableDebugMode')
	const markupText = t(isMarkupShown ? 'hideMarkup' : 'showMarkup')
	const animationsIcon = isAnimationsEnabled ? (
		<ToggleRight size={ICON_SIZE} />
	) : (
		<ToggleLeft size={ICON_SIZE} className='opacity-50' />
	)

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
				className='flex flex-wrap gap-10 rounded-3xl bg-neutral-700 bg-opacity-80 p-8 shadow-black shadow-lg backdrop-blur-xl'
			>
				<List className='grow'>
					<Heading as='h5' isAccent={false} isLarge={false}>
						{t('settings')}
					</Heading>
					<li>
						<label className='flex flex-wrap justify-between gap-x-2 sm:flex-col'>
							{t('startSection')}
							<select
								onChange={onChangeSection}
								value={startSection.id}
								className='w-full max-w-fit truncate rounded bg-accent pl-2 text-black'
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
						<Tooltip>
							<TooltipTrigger asChild>
								<Button
									variant='icon'
									onClick={toggleIsAnimationsEnabled}
									className='w-full flex-wrap justify-between gap-y-0'
								>
									{t('animations')}
									{animationsIcon}
								</Button>
							</TooltipTrigger>
							<TooltipContent>{t('animationsTitle')}</TooltipContent>
						</Tooltip>
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
				<List className='grow'>
					<Heading as='h5' isAccent={false} isLarge={false}>
						{t('menu')}
					</Heading>
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
			</nav>
		</aside>
	)
}
