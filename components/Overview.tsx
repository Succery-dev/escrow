import React from 'react'
import Image from 'next/image'
import logo from '../public/logo.jpg'

const Overview = () => {
	return (
		<div className='mx-40 my-20 p-[60px] bg-white rounded-[30px]'>
			<h1 className='text-5xl font-bold mb-10'>Trusted Payments, Thriving Collaborations</h1>
			<div className='flex'>
				<div className='mr-[80px]'>
					<p className='text-3xl font-bold mb-10'>Unleash the power of secure transactions and fruitful collaborations with our Web3-based escrow platform.</p>
					<p className='text-3xl font-bold'>We're committed to fostering trust, collaboration, and growth in the Web3 ecosystem, ensuring that your payment process is secure and worry-free.</p>
				</div>
				<Image alt='/' src={logo} height='200' />
			</div>
		</div>
	)
}

export default Overview