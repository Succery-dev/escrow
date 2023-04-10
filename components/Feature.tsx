import React from 'react'

const Feature = () => {
	return (
		<div className='mx-40 my-20 p-[60px] bg-white rounded-[30px] space-y-10'>
			<h1 className='text-5xl font-bold'>Features of TransPay</h1>
			<div className='flex space-x-8'>
				<div className='bg-gray-200 rounded-[20px] p-5'>
					<h2 className='font-bold text-2xl'>Free for all users</h2>
					<p className='font-bold text-lg'>We believe that a secure payment experience should be accessible to everyone.</p>
				</div>
				<div className='bg-gray-200 rounded-[20px] p-5'>
					<h2 className='font-bold text-2xl'>Smart contract</h2>
					<p className='font-bold text-lg'>This automate payment processes, ensuring that funds are released only when the agreed-upon conditions are met.</p>
				</div>
				<div className='bg-gray-200 rounded-[20px] p-5'>
					<h2 className='font-bold text-2xl'>Trustworthy</h2>
					<p className='font-bold text-lg'>TransPay fosters trust between freelancers and businesses and make the work experience better.</p>
				</div>
			</div>
		</div>
	)
}

export default Feature