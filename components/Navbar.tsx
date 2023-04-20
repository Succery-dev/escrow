import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import getWeb3 from '../utils/web3'
import logo from '../public/logo.jpg'

const Navbar = () => {
	const router = useRouter()
	const [account, setAccount] = useState<string | null>(null)

	const handleConnectWallet = async () => {
		try {
			const web3 = await getWeb3()
      const accounts = await web3.eth.getAccounts()
			setAccount(accounts[0])
      console.log('Connected to Metamask with account:', accounts[0])
			// router.push('/create-contract')
    } catch (error) {
      console.error(error)
    }
	}

	useEffect(() => {
		handleConnectWallet()
	}, [])

	return (
		<div className='fixed left-0 top-0 w-full bg-white z-10'>
			<div className='mx-40 flex justify-between items-center p-4'>
				<Link href='/' className='flex items-center space-x-4'>
					<Image src={logo} alt='/' height='40' />
					<h1 className='font-bold text-4xl'>TransPay</h1>
				</Link>
				<button onClick={handleConnectWallet} className='px-8 py-2 border font-bold bg-gray-200 rounded-lg'>{account ? account : 'Connect Wallet'}</button>
			</div>
		</div>
	)
}

export default Navbar