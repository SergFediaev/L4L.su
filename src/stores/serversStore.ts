import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

type ServersState = {
	isPlayersShown: boolean
}

type ServersActions = {
	toggleIsPlayersShown: () => void
}

const initialServers: ServersState = {
	isPlayersShown: true,
}

export const serversStore = create<ServersState & ServersActions>()(
	devtools(
		persist(
			set => ({
				...initialServers,
				toggleIsPlayersShown: () =>
					set(
						state => ({ isPlayersShown: !state.isPlayersShown }),
						undefined,
						'servers/toggleIsPlayersShown',
					),
			}),
			{ name: 'servers' },
		),
	),
)
