import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

export type Section = {
	id: 'Default' | 'Servers' | 'Campaigns' | 'Community' | 'Promo' | 'TV'
	name?: string
}

type SettingsState = {
	startSection: Section
	isAnimationsEnabled: boolean
}

type SettingsActions = {
	setStartSection: (startSection: Section) => void
	toggleIsAnimationsEnabled: () => void
}

const initialSettings: SettingsState = {
	startSection: { id: 'Default' },
	isAnimationsEnabled: true,
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
			}),
			{ name: 'settings' },
		),
	),
)
