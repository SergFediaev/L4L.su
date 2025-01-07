export const getRandomIndex = <T>(array: readonly T[]) =>
	Math.floor(Math.random() * array.length)
