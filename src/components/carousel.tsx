import { Arrow, AutoPlay, Pagination } from '@egjs/flicking-plugins'
import Flicking, { ViewportSlot } from '@egjs/react-flicking'
import '@egjs/react-flicking/dist/flicking.css'
import '@egjs/flicking-plugins/dist/arrow.css'
import '@egjs/flicking-plugins/dist/pagination.css'
import { Slide } from '@/components/slide'
import { combine } from '@/utils/combine'
import type { ComponentPropsWithoutRef } from 'react'

export const Carousel = ({
	className,
	...restProps
}: ComponentPropsWithoutRef<'div'>) => {
	const plugins = [
		new AutoPlay({ duration: 5_000, stopOnHover: true }),
		new Pagination({ type: 'fraction' }),
		new Arrow(),
	]

	return (
		<div className={combine('container mx-auto', className)} {...restProps}>
			<Flicking circular={true} plugins={plugins}>
				<Slide
					heading='Take Your Left 4 Dead 2 Experience to the Next Level'
					text='Looking for a true challenge beyond the “Expert Realism” difficulty?
						Welcome to Left 4 Legend, where survival demands teamwork, strategy,
						and skill. These enhanced servers deliver a hardcore, immersive
						experience that pushes the boundaries of the vanilla game while
						staying true to its spirit.'
					review='10/10 GOTY'
					source='Metacritic'
				/>
				<Slide
					heading='Unique Mechanics, Authentic Gameplay'
					text='Explore new, carefully balanced mechanics that enrich the original
						gameplay. No overpowered nonsense, no invincible Tanks — just a pure
						survival experience designed to test your limits.'
					review='Hidden Gem'
					source='IGN'
				/>
				<Slide
					heading='Harder, Smarter, Fairer'
					text='Every challenge is balanced with well-thought-out enhancements,
						ensuring intense but rewarding gameplay. Forget gimmicks — this is
						Left 4 Dead 2 at its finest, refined for players who crave true
						difficulty without compromising fun.'
					review='Finally, snow-free servers!'
					source="Denis DeCrow's mom"
				/>
				<Slide
					heading='Seamless Immersion'
					text='No distracting chat spam. No intrusive screen prompts. Just you,
						your team, and the undead, in an atmosphere built for total
						immersion.'
					review="It's Left 4 Dead 3 we deserve"
					source='Gabe Newell'
				/>
				<Slide
					heading='Community-Driven Servers'
					text='Our loyal administration listens to the players. No absurd rules or
						unnecessary restrictions. We focus on what matters: giving you the
						best cooperative experience possible.'
					review='Most based game experience ever'
					source='The Times'
				/>
				<Slide
					heading='Endless Adventures'
					text="With an ever-growing library of curated custom campaigns, there's
						always a fresh challenge waiting for you and your friends."
					review="I'm suffering. But I like it!"
					source='Soldier (49-th unit)'
				/>
				<Slide
					heading='Are You Ready to Become a Legend?'
					text='Left 4 Legend isn’t just a server — it’s a test of skill, teamwork,
						and survival instincts. Can you and your squad rise to the occasion?
						Join us today and prove you’ve got what it takes to survive the
						ultimate Left 4 Dead 2 experience!'
					review="That's our official instructions"
				/>
				<ViewportSlot>
					<span className='flicking-arrow-prev' />
					<span className='flicking-arrow-next' />
					<div className='flicking-pagination' />
				</ViewportSlot>
			</Flicking>
		</div>
	)
}
