import { TranslateServerName } from '@/components/translateServerName'
import { Fragment } from 'react'

type Props = {
	name: string
}

export const ServerName = ({ name }: Props) => {
	return name.split(' ').map((word, index) => {
		return (
			<Fragment key={`${index}-${word}`}>
				<TranslateServerName word={word} />{' '}
			</Fragment>
		)
	})
}
