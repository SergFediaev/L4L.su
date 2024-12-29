import type { Metadata } from 'next'
import './globals.css'
import { Providers } from '@/app/providers'
import { Body } from '@/components/body'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { Main } from '@/components/main'
import { YandexMetrica } from '@/components/yandexMetrica'
import { GoogleAnalytics } from '@next/third-parties/google'
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

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode
}>) {
	return (
		<html lang='en'>
			<Body>
				<GoogleAnalytics gaId='G-0T8YW7D27K' />
				<Suspense>
					<YandexMetrica />
				</Suspense>
				<Providers>
					<Header />
					<Main>{children}</Main>
					<Footer />
				</Providers>
			</Body>
		</html>
	)
}
