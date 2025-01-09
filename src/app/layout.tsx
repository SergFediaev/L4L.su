import type { Metadata } from 'next'
import './globals.css'
import { Providers } from '@/app/providers'
import { Body } from '@/components/body'
import { YandexMetrica } from '@/components/yandexMetrica'
import { GoogleAnalytics } from '@next/third-parties/google'
import { NextIntlClientProvider } from 'next-intl'
import { getLocale, getMessages } from 'next-intl/server'
import { type ReactNode, Suspense } from 'react'

export const metadata: Metadata = {
	title: {
		template: '%s | L4L',
		default: 'Left 4 Legend',
	},
	description: 'Left 4 Legend servers',
	keywords: [
		'Left 4 Legend',
		'L4L',
		'Lega',
		'Sef',
		'Sefo',
		'Noshimo',
		'Notasi',
		'Milandro',
	],
	generator: 'Next.js',
	applicationName: 'L4L.su',
	creator: 'Sefo',
	metadataBase: new URL('https://l4l.su'),
	alternates: {
		canonical: '/',
		languages: {
			'en-US': '/en-US',
			'ru-RU': '/ru-RU',
		},
	},
}

export default async function RootLayout({
	children,
}: Readonly<{
	children: ReactNode
}>) {
	const locale = await getLocale()
	const messages = await getMessages()

	return (
		<html lang={locale}>
			<Body>
				<GoogleAnalytics gaId='G-0T8YW7D27K' />
				<Suspense>
					<YandexMetrica />
				</Suspense>
				<NextIntlClientProvider messages={messages}>
					<Providers>{children}</Providers>
				</NextIntlClientProvider>
			</Body>
		</html>
	)
}
