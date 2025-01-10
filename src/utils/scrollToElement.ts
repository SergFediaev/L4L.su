export const scrollToElement = (elementId: string) => {
	const element = document.getElementById(elementId)

	element?.scrollIntoView({
		behavior: 'smooth',
		block: 'center',
	})
}
