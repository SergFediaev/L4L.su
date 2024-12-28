export const formatTime = (time: number) => {
	const secs = Math.round(time)
	const hours = Math.floor(secs / 3_600)
	const minutes = Math.floor((secs % 3_600) / 60)
	const seconds = String(secs % 60).padStart(2, '0')

	return hours > 0
		? `${hours}:${String(minutes).padStart(2, '0')}:${seconds}`
		: `${minutes}:${seconds}`
}
