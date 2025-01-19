import { useTranslations } from 'next-intl'

const className = 'text-variant'

type Translation = {
	translation: string
	className?: string
}

type Props = {
	word: string
}

export const TranslateServerName = ({ word }: Props) => {
	const t = useTranslations('HomePage')

	const WORD_MAPPING: Record<string, Translation> = {
		test: { translation: t('test') },
		easy: { translation: t('easy') },
		normal: { translation: t('normal') },
		advanced: { translation: t('advanced') },
		expert: { translation: t('expert'), className },
		campaign: { translation: t('campaign') },
		realism: { translation: t('realism'), className },
	} as const

	const normalizedWord = word.toLowerCase()
	const mappedWord = WORD_MAPPING[normalizedWord]

	if (!mappedWord) {
		return word
	}

	return mappedWord.className ? (
		<span className={mappedWord.className}>{mappedWord.translation}</span>
	) : (
		mappedWord.translation
	)
}
