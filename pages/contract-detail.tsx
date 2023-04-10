import type { NextPage } from 'next'

const ContractDetail: NextPage = () => {
	return (
		<div className='bg-gradient-to-r from-cyan-500 to-blue-500 h-screen flex items-center justify-center'>
			<div className='border rounded-[20px] p-20 space-y-4 bg-gray-200 drop-shadow-2xl flex flex-col'>
				<h1 className='font-bold text-5xl underline'>Contract Detail</h1>
				<div className='space-y-2'>
					<h2 className='font-bold text-2xl'>Title</h2>
          <p className='border-2 border-black rounded-md w-full p-4 text-2xl'>Escrow Smart Contract on Polygon</p>
				</div>
				<div className='space-y-2'>
					<h2 className='font-bold text-2xl'>Detail</h2>
						<div className='border-2 border-black rounded-md w-full p-4 text-2xl'>
							<p>Specification</p>
							<ul className='list-disc list-inside'>
								<li>Built on Polygon</li>
								<li>Hold Matic on smart contract in advance</li>
								<li>Send Matic to lancer's wallet</li>
							</ul>
						</div>
				</div>
				<div className='space-y-2'>
					<h2 className='font-bold text-2xl'>Deadline</h2>
					<p className='border-2 border-black rounded-md w-full p-4 text-2xl'>May 1st, 2023</p>
				</div>
				<div className='space-y-2'>
					<h2 className='font-bold text-2xl'>Reward(MATIC)</h2>
					<p className='border-2 border-black rounded-md w-full p-4 text-2xl'>40</p>
				</div>
				<div className='space-y-2'>
					<h2 className='font-bold text-2xl'>Lancer's Wallet Address</h2>
					<p className='border-2 border-black rounded-md w-full p-4 text-2xl'>0x29C5C656cb1d5E2cc9148039B5f2c9534849759b</p>
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