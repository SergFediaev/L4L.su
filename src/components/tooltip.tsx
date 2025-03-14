import { combine } from '@/utils/combine'
import type { Placement } from '@floating-ui/react'
import {
	FloatingPortal,
	autoUpdate,
	flip,
	offset,
	shift,
	useDismiss,
	useFloating,
	useFocus,
	useHover,
	useInteractions,
	useMergeRefs,
	useRole,
} from '@floating-ui/react'
import * as React from 'react'
import { useEffect, useState } from 'react'

interface TooltipOptions {
	initialOpen?: boolean
	placement?: Placement
	open?: boolean
	onOpenChange?: (open: boolean) => void
}

export function useTooltip({
	initialOpen = false,
	placement = 'top',
	open: controlledOpen,
	onOpenChange: setControlledOpen,
}: TooltipOptions = {}) {
	const [uncontrolledOpen, setUncontrolledOpen] = React.useState(initialOpen)

	const open = controlledOpen ?? uncontrolledOpen
	const setOpen = setControlledOpen ?? setUncontrolledOpen

	// noinspection Annotator
	const data = useFloating({
		placement,
		open,
		onOpenChange: setOpen,
		whileElementsMounted: autoUpdate,
		middleware: [
			offset(5),
			flip({
				crossAxis: placement.includes('-'),
				fallbackAxisSideDirection: 'start',
				padding: 5,
			}),
			shift({ padding: 5 }),
		],
	})

	const context = data.context

	// noinspection Annotator
	const hover = useHover(context, {
		move: false,
		enabled: controlledOpen == null,
	})

	// noinspection Annotator
	const focus = useFocus(context, {
		enabled: controlledOpen == null,
	})

	const dismiss = useDismiss(context)

	// noinspection Annotator
	const role = useRole(context, { role: 'tooltip' })

	const interactions = useInteractions([hover, focus, dismiss, role])

	return React.useMemo(
		() => ({
			open,
			setOpen,
			...interactions,
			...data,
		}),
		[open, setOpen, interactions, data],
	)
}

type ContextType = ReturnType<typeof useTooltip> | null

const TooltipContext = React.createContext<ContextType>(null)

export const useTooltipContext = () => {
	const context = React.useContext(TooltipContext)

	if (context == null) {
		throw new Error('Tooltip components must be wrapped in <Tooltip />')
	}

	return context
}

export function Tooltip({
	children,
	...options
}: { children: React.ReactNode } & TooltipOptions) {
	const tooltip = useTooltip(options)

	return (
		<TooltipContext.Provider value={tooltip}>
			{children}
		</TooltipContext.Provider>
	)
}

export const TooltipTrigger = React.forwardRef<
	HTMLElement,
	React.HTMLProps<HTMLElement> & { asChild?: boolean }
>(function TooltipTrigger({ children, asChild = false, ...props }, propRef) {
	const context = useTooltipContext()

	// biome-ignore lint/suspicious/noExplicitAny: Floating UI
	const childrenRef = (children as any).ref

	const ref = useMergeRefs([context.refs.setReference, propRef, childrenRef])

	if (asChild && React.isValidElement(children)) {
		return React.cloneElement(
			children,
			context.getReferenceProps({
				ref,
				...props,
				// @ts-ignore
				...children.props,
				'data-state': context.open ? 'open' : 'closed',
			}),
		)
	}

	return (
		<button
			ref={ref}
			data-state={context.open ? 'open' : 'closed'}
			{...context.getReferenceProps(props)}
		>
			{children}
		</button>
	)
})

const TRANSITION_DURATION = 300

export const TooltipContent = React.forwardRef<
	HTMLDivElement,
	React.HTMLProps<HTMLDivElement>
>(function TooltipContent({ style, ...props }, propRef) {
	const context = useTooltipContext()
	const ref = useMergeRefs([context.refs.setFloating, propRef])
	const [isMounted, setIsMounted] = useState(false)
	const [isVisible, setIsVisible] = useState(false)

	useEffect(() => {
		let timeout: NodeJS.Timeout

		if (context.open) {
			setIsMounted(true)

			timeout = setTimeout(() => {
				setIsVisible(true)
			}, TRANSITION_DURATION)
		} else {
			setIsVisible(false)

			timeout = setTimeout(() => {
				setIsMounted(false)
			}, TRANSITION_DURATION)
		}

		return () => {
			clearTimeout(timeout)
		}
	}, [context.open])

	if (!isMounted) {
		return null
	}

	return (
		<FloatingPortal>
			<div
				ref={ref}
				style={{
					...context.floatingStyles,
					...style,
				}}
				{...context.getFloatingProps(props)}
				className={combine(
					`z-30 rounded bg-neutral-100 px-2 text-background transition duration-${TRANSITION_DURATION}`,
					isVisible ? 'opacity-100' : 'opacity-0',
				)}
			/>
		</FloatingPortal>
	)
})
