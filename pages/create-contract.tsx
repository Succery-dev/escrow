import type { NextPage } from 'next'
import { useRouter } from 'next/router'

const CreateContract: NextPage = () => {
	const router = useRouter()

	return (
		<div className='bg-gradient-to-r from-cyan-500 to-blue-500 h-screen flex items-center justify-center'>
			<div className='border rounded-[20px] p-20 space-y-4 bg-gray-200 drop-shadow-2xl flex flex-col'>
				<h1 className='font-bold text-5xl underline'>Create Contract</h1>
				<div className='space-y-2'>
					<h2 className='font-bold text-2xl'>Title</h2>
					<input type="text" className='border-2 border-black rounded-md h-10 w-full p-4 text-2xl' />
				</div>
				<div className='space-y-2'>
					<h2 className='font-bold text-2xl'>Detail</h2>
					<textarea cols={30} rows={10} className='border-2 border-black rounded-md h-10 w-full p-4 text-2xl'></textarea>
				</div>
				<div className='space-y-2'>
					<h2 className='font-bold text-2xl'>Deadline</h2>
					<input type="text" className='border-2 border-black rounded-md h-10 w-full p-4 text-2xl' />
				</div>
				<div className='space-y-2'>
					<h2 className='font-bold text-2xl'>Reward(USDC)</h2>
					<input type="text" className='border-2 border-black rounded-md h-10 w-full p-4 text-2xl' />
				</div>
				<div className='space-y-2'>
					<h2 className='font-bold text-2xl'>{`Lancer's Wallet Address`}</h2>
					<input type="text" className='border-2 border-black rounded-md h-10 w-full p-4 text-2xl' />
				</div>
				<button onClick={() => router.push('/contract-detail')} className='border-2 border-black bg-green-300 hover:bg-green-400 drop-shadow-lg rounded-lg mx-auto px-8 py-3 font-bold'>SUBMIT</button>
			</div>
		</div>
	)
}

export default CreateContract