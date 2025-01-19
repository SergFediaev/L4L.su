import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

export type Section = {
	id: 'Default' | 'Servers' | 'Campaigns' | 'Community' | 'Promo' | 'TV'
	name?: string
}

type SettingsState = {
	startSection: Section
	isAnimationsEnabled: boolean
	isHeaderPinned: boolean
}

type SettingsActions = {
	setStartSection: (startSection: Section) => void
	toggleIsAnimationsEnabled: () => void
	toggleIsHeaderPinned: () => void
}

const initialSettings: SettingsState = {
	startSection: { id: 'Default' },
	isAnimationsEnabled: true,
	isHeaderPinned: true,
}

export const settingsStore = create<SettingsState & SettingsActions>()(
	devtools(
		persist(
			set => ({
				...initialSettings,
				setStartSection: (startSection: Section) => {
					set({ startSection }, undefined, 'settings/setStartSection')
				},
				toggleIsAnimationsEnabled: () =>
					set(
						state => ({ isAnimationsEnabled: !state.isAnimationsEnabled }),
						undefined,
						'settings/toggleIsAnimationsEnabled',
					),
				toggleIsHeaderPinned: () =>
					set(
						state => ({ isHeaderPinned: !state.isHeaderPinned }),
						undefined,
						'settings/toggleIsHeaderPinned',
					),
			}),
			{ name: 'settings' },
		),
	),
)
