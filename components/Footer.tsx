import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/logo.jpg'
import twitter_logo from '../public/twitter-logo.png'

const Footer = () => {
	return (
			<div className='mx-40 flex justify-between items-center p-4 h-36'>
				<Link href='/' className='flex items-center'>
					<Image src={logo} alt='/' height='40' className='mr-3' />
					<h1 className='font-bold text-4xl'>TransPay</h1>
				</Link>
				<div className='flex items-center'>
					<p className='mr-14'>Stay in touch</p>
					<Link href='https://twitter.com/TTranspay001'>
						<Image alt='/' src={twitter_logo} height='40' />
					</Link>
				</div>
			</div>
	)
}

export default Footer