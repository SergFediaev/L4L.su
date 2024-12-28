export type ServerParams = {
	host: string
	port: number
}

export type ServerResponse = {
	name: string
	map: string
	raw: {
		protocol: number
		folder: string
		game: string
		appId: number
		numbots: number
		listentype: string
		environment: string
		secure: number
		steamid: string
		tags: string[]
		players: []
		rules: Record<string, string>
		rulesBytes: Buffer
	}
	version: string
	maxplayers: number
	numplayers: number
	players: {
		name: string
		raw: {
			score: number
			time: number
		}
	}[]
	bots: []
	queryPort: number
	connect: string
	ping: number
}
