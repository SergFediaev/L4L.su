'use client'

import { Review } from '@/components/review'
import { Text } from '@/components/text'
import Image from 'next/image'

import { Accent } from '@/components/accent'
import { List } from '@/components/list'
import { NumCell } from '@/components/numCell'
import { Saira_Stencil_One } from 'next/font/google'

const saira = Saira_Stencil_One({
	subsets: ['latin'],
	weight: '400',
})

const SERVERS_ANCHOR = '/#Servers'

export default function Home() {
	return (
		<main className='sm:text-2xl text-neutral-50'>
			<List
				isColumn={false}
				className='justify-evenly sticky top-0 bg-black p-4 z-10 shadow-2xl shadow-black backdrop-blur-lg bg-opacity-80'
			>
				<li>
					<a href={SERVERS_ANCHOR}>Servers</a>
				</li>
				<li>
					<a href='https://steamcommunity.com/groups/Left4Legend/announcements'>
						News
					</a>
				</li>
				<li>
					<a href='https://steamcommunity.com/groups/Left4Legend'>Group</a>
				</li>
				<li>
					<a href='https://steamcommunity.com/chat/invite/HWJHvO7g'>Chat</a>
				</li>
				<li>
					<a href='https://steamcommunity.com/sharedfiles/filedetails/?id=3384448522'>
						Guide
					</a>
				</li>
				<li>
					<a href='https://steamcommunity.com/sharedfiles/filedetails/?id=3388609126'>
						Maps
					</a>
				</li>
			</List>
			<div id='Servers' className='flex p-8 flex-col items-center gap-10'>
				<header className='flex flex-wrap items-center justify-center gap-x-10'>
					<h1
						className={`${saira.className} text-center text-6xl antialiased sm:text-8xl glow hover:text-accent transition hover:drop-shadow-[0_0_10px_rgba(0,0,0,1)]`}
					>
						Left 4 Legend
					</h1>
					<Image
						src='/logo.png'
						alt='Logo'
						width={200}
						height={200}
						className='glow hover:animate-pulse'
					/>
				</header>
				<div className='max-w-full mb-32'>
					<Accent className='text-center'>Servers monitoring</Accent>
					<div className='overflow-x-auto'>
						<table className='text-left sm:border-spacing-y-4 sm:border-spacing-x-8 border-spacing-x-4 border-spacing-y-2 border-separate'>
							<thead className='align-top'>
								<tr>
									<th>Server name</th>
									<th>IP address : port</th>
									<th>Tickrate</th>
									<th>Players</th>
								</tr>
							</thead>
							<tbody className='align-top'>
								<tr>
									<td>Left 4 Legend #1</td>
									<td>
										<a href='steam://connect/95.143.216.252:27021'>
											95.143.216.252:27021
										</a>
									</td>
									<NumCell>30</NumCell>
									<NumCell>4</NumCell>
								</tr>
								<tr>
									<td>Left 4 Legend #2</td>
									<td>
										<a href='steam://connect/95.143.216.252:27022'>
											95.143.216.252:27022
										</a>
									</td>
									<NumCell>30</NumCell>
									<NumCell>4</NumCell>
								</tr>
								<tr>
									<td>Left 4 Legend #3</td>
									<td>
										<a href='steam://connect/95.143.216.252:27023'>
											95.143.216.252:27023
										</a>
									</td>
									<NumCell>30</NumCell>
									<NumCell>4</NumCell>
								</tr>
								<tr>
									<td>Left 4 Legend #4</td>
									<td>
										<a href='steam://connect/95.143.216.252:27024'>
											95.143.216.252:27024
										</a>
									</td>
									<NumCell>30</NumCell>
									<NumCell>4</NumCell>
								</tr>
								<tr>
									<td>Left 4 Legend #5</td>
									<td>
										<a href='steam://connect/95.143.216.252:27025'>
											95.143.216.252:27025
										</a>
									</td>
									<NumCell>30</NumCell>
									<NumCell>4</NumCell>
								</tr>
								<tr>
									<td>L4L #0 Test</td>
									<td>
										<a href='steam://connect/95.143.216.252:27020'>
											95.143.216.252:27020
										</a>
									</td>
									<NumCell>30</NumCell>
									<NumCell>4</NumCell>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<Accent>Take Your Left 4 Dead 2 Experience to the Next Level</Accent>
				<Text>
					Looking for a true challenge beyond the “Expert Realism” difficulty?
					Welcome to Left 4 Legend, where survival demands teamwork, strategy,
					and skill. These enhanced servers deliver a hardcore, immersive
					experience that pushes the boundaries of the vanilla game while
					staying true to its spirit.
				</Text>
				<Review source='Metacritic'>10/10 GOTY</Review>
				<Accent>Unique Mechanics, Authentic Gameplay</Accent>
				<Text>
					Explore new, carefully balanced mechanics that enrich the original
					gameplay. No overpowered nonsense, no invincible Tanks — just a pure
					survival experience designed to test your limits.
				</Text>
				<Review source='IGN'>Hidden Gem</Review>
				<Accent>Harder, Smarter, Fairer</Accent>
				<Text>
					Every challenge is balanced with well-thought-out enhancements,
					ensuring intense but rewarding gameplay. Forget gimmicks — this is
					Left 4 Dead 2 at its finest, refined for players who crave true
					difficulty without compromising fun.
				</Text>
				<Review source="Denis DeCrow's mom">Finally, snow-free servers!</Review>
				<Accent>Seamless Immersion</Accent>
				<Text>
					No distracting chat spam. No intrusive screen prompts. Just you, your
					team, and the undead, in an atmosphere built for total immersion.
				</Text>
				<Review source='Gabe Newell'>It's Left 4 Dead 3 we deserve</Review>
				<Accent>Community-Driven Servers</Accent>
				<Text>
					Our loyal administration listens to the players. No absurd rules or
					unnecessary restrictions. We focus on what matters: giving you the
					best cooperative experience possible.
				</Text>
				<Review source='The Times'>Most based game experience ever</Review>
				<Accent>Endless Adventures</Accent>
				<Text>
					With an ever-growing library of curated custom campaigns, there's
					always a fresh challenge waiting for you and your friends.
				</Text>
				<Review source='Soldier (49-th unit)'>
					I'm suffering. But I like it!
				</Review>
				<Accent>Are You Ready to Become a Legend?</Accent>
				<Text>
					Left 4 Legend isn’t just a server — it’s a test of skill, teamwork,
					and survival instincts. Can you and your squad rise to the occasion?
					Join us today and prove you’ve got what it takes to survive the
					ultimate Left 4 Dead 2 experience!
				</Text>
				<Review>That's our official instructions</Review>
				<a
					href={SERVERS_ANCHOR}
					className='text-4xl sm:text-8xl font-black underline-offset-8 mb-28'
				>
					Now playing!
				</a>
				<button
					type='button'
					className='self-end shadow-lg shadow-black transition text-black hover:bg-variant hover:glow sticky bottom-8 px-4 py-2 bg-accent rounded-2xl hover:shadow-none'
					title='Play on random server'
				>
					<a
						href='steam://connect/95.143.216.252:27021'
						className='no-underline hover:text-black'
					>
						Play now
					</a>
				</button>
			</div>
			<footer className='shadow-inner shadow-background p-6 text-base bg-black sm:justify-around flex flex-wrap gap-y-4 gap-x-10'>
				<List>
					<li>
						<a href={SERVERS_ANCHOR}>Monitoring servers</a>
					</li>
					<li>
						<a href='https://steamcommunity.com/groups/Left4Legend/discussions/0/601891362926791888'>
							Support by donation
						</a>
					</li>
					<li>
						<a href='https://steamcommunity.com/groups/Left4Legend/discussions/0/601891362926791278'>
							Report a servers problem
						</a>
					</li>
					<li>
						<a href='https://steamcommunity.com/sharedfiles/filedetails/?id=3384448522'>
							Complete servers guide
						</a>
					</li>
				</List>
				<List className='sm:text-center'>
					<li>
						© 2022–{new Date().getFullYear()} <a href='https://Sefo.su'>Sefo</a>
					</li>
					<li>
						<q className='italic'>Legends never die!</q>
					</li>
					<li>
						<a href='https://github.com/SefoNotasi/Left4LegendServer'>
							GitHub servers repository
						</a>
					</li>
				</List>
				<List>
					<li>
						<a href='https://steamcommunity.com/groups/Left4Legend'>
							Steam community group
						</a>
					</li>
					<li>
						<a href='https://steamcommunity.com/chat/invite/HWJHvO7g'>
							Steam community chat
						</a>
					</li>
					<li>
						<a href='https://steamcommunity.com/groups/Left4Legend/announcements'>
							Community announcements
						</a>
					</li>
					<li>
						<a href='https://steamcommunity.com/sharedfiles/filedetails/?id=3388609126'>
							Servers maps collection
						</a>
					</li>
				</List>
			</footer>
		</main>
	)
}
