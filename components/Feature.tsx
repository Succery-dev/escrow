import React from 'react'

const Feature = () => {
	return (
		<div className='mx-40 my-20 p-[60px] bg-white rounded-[30px]'>
			<h1 className='text-5xl font-bold mb-10'>Features of TransPay</h1>
			<div className='flex'>
				<div className='bg-gray-200 rounded-[20px] p-5'>
					<h2 className='font-bold text-2xl'>Free for all users</h2>
					<p className='font-bold text-lg'>We believe that a secure payment experience should be accessible to everyone.</p>
				</div>
				<div className='bg-gray-200 rounded-[20px] p-5 mx-10'>
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