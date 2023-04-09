import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import getWeb3 from '../utils/web3'
import Web3 from 'web3'

const Navbar = () => {
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
		<div className='fixed left-0 top-0 w-full bg-white z-10'>
			<div className='mx-40 flex justify-between items-center p-4'>
				<Link href='/'>
					<h1 className='font-bold text-4xl'>TransPay</h1>
				</Link>
				<button onClick={handleConnectWallet} className='px-8 py-2 border font-bold bg-gray-200 rounded-lg'>{account ? account : 'Connect Wallet'}</button>
			</div>
		</div>
	)
}

export default Navbar