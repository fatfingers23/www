import Image from 'next/image'
import { FC } from 'react'

const Team = () => {
	return (
		<div className='group relative z-10 mt-24 overflow-hidden py-24 lg:mt-32'>
			<span className='pointer-events-none'>
				<Image
					src='/images/sections/team/bg.png'
					alt=''
					fill
					className='absolute top-0 left-0 -z-10 h-full w-full object-cover'
				/>
				<Image
					src='/images/sections/team/stars.png'
					alt=''
					fill
					className='absolute top-0 left-0 -z-10 hidden h-full w-full object-contain transition-transform duration-1000 group-hover:translate-x-12 group-hover:translate-y-3 md:block'
				/>
				<Image
					src='/images/sections/team/stars-2.png'
					alt=''
					fill
					className='absolute top-0 left-0 -z-10 hidden h-full w-full object-contain transition-transform duration-1000 group-hover:-translate-x-5 md:block'
				/>
				<Image
					src='/images/sections/team/comets.png'
					alt=''
					fill
					className='absolute top-0 left-0 -z-10 hidden h-full w-full object-contain transition-transform duration-1000 group-hover:-translate-x-32 group-hover:translate-y-32 md:block'
				/>
				<Image
					src='/images/sections/team/planet.png'
					alt=''
					fill
					className='absolute top-0 left-0 -z-10 hidden h-full w-full object-contain transition-transform duration-1000 group-hover:translate-x-12 group-hover:-translate-y-12 md:block'
				/>
			</span>
			<div className='mx-auto w-full max-w-7xl px-5 sm:px-10'>
				<div className='xl:px-20'>
					<h2 className='font-gradual text-4.5 font-bold leading-none text-[#C2C2C2] lg:text-[3.5rem]'>
						The team that’s making it happen
					</h2>
					<p className='mt-3 max-w-[800px] text-xl sm:mt-5 lg:text-2xl'>
						We share a vision for creating a new kind of developer experience, a passion for open
						source software and over 4 years of experience working together as a team.
					</p>
				</div>
				<div className='mt-6 grid gap-5 md:mt-20 md:grid-cols-3 md:items-center'>
					<div className='space-y-5'>
						<User
							image='/images/sections/team/user.jpg'
							name='Name Surname'
							position='CTO'
							description='PhD in Mathematics from Penn State, previously built ML models for trading.'
						/>
						<User
							image='/images/sections/team/user.jpg'
							name='Name Surname'
							position='CTO'
							description='PhD in Mathematics from Penn State, previously built ML models for trading.'
						/>
						<User
							image='/images/sections/team/user.jpg'
							name='Name Surname'
							position='CTO'
							description='PhD in Mathematics from Penn State, previously built ML models for trading.'
						/>
					</div>
					<div className='space-y-5'>
						<User
							image='/images/sections/team/user.jpg'
							name='Name Surname'
							position='CTO'
							description='PhD in Mathematics from Penn State, previously built ML models for trading. Rust expert with deep understanding of its ecosystem.'
						/>
						<User
							image='/images/sections/team/user.jpg'
							name='Name Surname'
							position='CTO'
							description='PhD in Mathematics from Penn State, previously built ML models for trading. Rust expert with deep understanding of its ecosystem.'
						/>
						<User
							image='/images/sections/team/user.jpg'
							name='Name Surname'
							position='CTO'
							description='PhD in Mathematics from Penn State, previously built ML models for trading. Rust expert with deep understanding of its ecosystem.'
						/>
					</div>
					<div className='space-y-5'>
						<User
							image='/images/sections/team/user.jpg'
							name='Name Surname'
							position='CTO'
							description='PhD in Mathematics from Penn State, previously built ML models for trading.'
						/>
						<User
							image='/images/sections/team/user.jpg'
							name='Name Surname'
							position='CTO'
							description='PhD in Mathematics from Penn State, previously built ML models for trading.'
						/>
						<User
							image='/images/sections/team/user.jpg'
							name='Name Surname'
							position='CTO'
							description='PhD in Mathematics from Penn State, previously built ML models for trading.'
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

interface UserProps {
	image: string
	name: string
	position: string
	description: string
}

const User: FC<UserProps> = ({ image, name, position, description }) => {
	return (
		<div className='rounded-[1.25rem] border border-white border-opacity-10 p-6 backdrop-blur-2xl'>
			<Image src={image} width={85} height={85} alt='user image' className='rounded-3xl' />
			<div className='mt-2 space-y-1'>
				<h3 className='font-gradual text-2xl font-bold text-[#C2C2C2]'>{name}</h3>
				<p className='text-sm'>{position}</p>
				<p className='text-white/50'>{description}</p>
			</div>
		</div>
	)
}

export default Team