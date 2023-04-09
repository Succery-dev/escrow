import React, { useState, useEffect } from 'react'
import getWeb3 from '../utils/web3'
import Web3 from 'web3'

interface HeroProps {
	heading: string;
	message: string;
}

const Hero: React.FC<HeroProps> = ({heading, message}) => {
	const [web3, setWeb3] = useState<typeof Web3 | null>(null)
	const [account, setAccount] = useState<string | null>(null)

	useEffect(() => {
		const init = async () => {
			const web3 = await getWeb3()
			setWeb3(web3)
		}
		init()
	}, [])

	const handleConnectWallet = async () => {
		if (web3) {
			try {
				// Connect to Metamask
				await web3.currentProvider.enable()
				console.log('Connected to Metamask')

				// Get accounts
				const accounts = await web3.eth.getAccounts()
				setAccount(accounts[0])
				console.log('Connected to Metamask with account:', accounts[0])
			} catch (error) {
				console.log(error)
			}
		} else {
			console.log('Web3 is not initialized')
		}
	}

	return (
		<div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img'>
			{/* Overlay */}
			<div className='absolute top-0 left-0 right-0 bottom-0 bg-black/50 z-[2]' />
			<div className='flex flex-col p-5 text-white z-[2] mt-[-10rem]'>
				<h2 className='text-5xl font-bold'>{heading}</h2>
				<p className='py-5 text-xl'>{message}</p>
				<button onClick={handleConnectWallet} className='mx-auto px-8 py-2 border'>{account ? account : 'Connect Wallet'}</button>
			</div>
		</div>
	)
}

export default Hero