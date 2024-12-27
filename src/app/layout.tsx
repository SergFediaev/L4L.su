import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { YandexMetrica } from '@/components/yandexMetrica'
import { GoogleAnalytics } from '@next/third-parties/google'
import { type ReactNode, Suspense } from 'react'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'Left 4 Legend',
	description: 'Left 4 Legend',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode
}>) {
	return (
		<html lang='en'>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<GoogleAnalytics gaId='G-0T8YW7D27K' />
				<Suspense>
					<YandexMetrica />
				</Suspense>
				{children}
			</body>
		</html>
	)
}
