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
	title: 'Left 4 Legend',
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
