'use client'

import { getQueryClient } from '@/utils/getQueryClient'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import type { ReactNode } from 'react'

export const Providers = ({ children }: { children: ReactNode }) => {
	const queryClient = getQueryClient()

	return (
		<QueryClientProvider client={queryClient}>
			{children}
			<ReactQueryDevtools buttonPosition='bottom-left' />
		</QueryClientProvider>
	)
}
