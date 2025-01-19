import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

type ServersState = {
	isPlayersShown: boolean
	isCopyShown: boolean
	isConnectShown: boolean
	isTickShown: boolean
}

type ServersActions = {
	toggleIsPlayersShown: () => void
	toggleIsCopyShown: () => void
	toggleIsConnectShown: () => void
	toggleIsTickShown: () => void
}

const initialServers: ServersState = {
	isPlayersShown: true,
	isCopyShown: true,
	isConnectShown: true,
	isTickShown: true,
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
				toggleIsCopyShown: () =>
					set(
						state => ({ isCopyShown: !state.isCopyShown }),
						undefined,
						'servers/toggleIsCopyShown',
					),
				toggleIsConnectShown: () =>
					set(
						state => ({ isConnectShown: !state.isConnectShown }),
						undefined,
						'servers/toggleIsConnectShown',
					),
				toggleIsTickShown: () =>
					set(
						state => ({ isTickShown: !state.isTickShown }),
						undefined,
						'servers/toggleIsTickShown',
					),
			}),
			{ name: 'servers' },
		),
	),
)
