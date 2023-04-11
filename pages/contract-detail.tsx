import type { NextPage } from 'next'

const ContractDetail: NextPage = () => {
	return (
		<div className='bg-gradient-to-r from-cyan-500 to-blue-500 h-screen flex items-center justify-center'>
			<div className='border rounded-[20px] p-20 space-y-4 bg-gray-200 drop-shadow-2xl flex flex-col'>
				<h1 className='font-bold text-5xl underline'>Contract Detail</h1>
				<div className='space-y-2'>
					<h2 className='font-bold text-2xl'>Title</h2>
					<p className='border-2 border-black rounded-md w-full p-4 text-2xl'>An introductory article about TransPay</p>
				</div>
				<div className='space-y-2'>
					<h2 className='font-bold text-2xl'>Detail</h2>
						<div className='border-2 border-black rounded-md w-full p-4 text-2xl'>
							<p>An introductory article about TransPay, to be published on Medium, and at least 3,000 words long.</p>
						</div>
				</div>
				<div className='space-y-2'>
					<h2 className='font-bold text-2xl'>Deadline</h2>
					<p className='border-2 border-black rounded-md w-full p-4 text-2xl'>April 25 , 2023</p>
				</div>
				<div className='space-y-2'>
					<h2 className='font-bold text-2xl'>Reward(USDC)</h2>
					<p className='border-2 border-black rounded-md w-full p-4 text-2xl'>15,000</p>
				</div>
				<div className='space-y-2'>
					<h2 className='font-bold text-2xl'>{`Lancer's Wallet Address`}</h2>
					<p className='border-2 border-black rounded-md w-full p-4 text-2xl'>0x9d53101902859E9a3Ea0a48de3976A2A3326c422</p>
				</div>
				<div className='flex justify-center space-x-3'>
					<button className='border-2 border-black bg-green-300 hover:bg-green-400 drop-shadow-lg rounded-lg px-8 py-3 font-bold'>PREPAY TO ESCROW</button>
					<button className='border-2 border-black bg-orange-300 hover:bg-orange-400 drop-shadow-lg rounded-lg px-8 py-3 font-bold'>PAY REWARD TO LANCER</button>
				</div>
				<p>※ Once the lancer verifies the wallet address by connecting, you can prepay the reward to escrow.</p>
			</div>
		</div>
	)
}

export default ContractDetail