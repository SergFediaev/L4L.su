export const filterValues = <T>(values: readonly T[], currentValue: T) =>
	values.filter(value => value !== currentValue)
