import React, { useState } from 'react'

const Flow = () => {
	const [tab, setTab] = useState('company')

	return (
		<div className='mx-40 my-20 p-[60px] bg-white rounded-[30px]'>
			<div className='flex justify-center space-x-20 mb-8'>
				<button onClick={() => setTab('company')} style={{color: tab === 'company' ? 'black' : 'grey'}} className='font-bold text-4xl'>Company</button>
				<button onClick={() => setTab('lancer')} style={{color: tab === 'lancer' ? 'black' : 'grey'}} className='font-bold text-4xl'>Lancer</button>
			</div>
			<ul className='list-inside list-decimal text-3xl font-bold space-y-5'>
				{
					tab === 'company' 
						? <>
								<li>Connect your wallet</li>
								<li>Write the details of the contract and generate a link</li>
								<li>Share the link you generated with Lancer</li>
							</>
						: <>
								<li>Open the link you got from the opposite party</li>
								<li>Connect your wallet</li>
								<li>Hit the agree button</li>
							</>
				}
			</ul>
		</div>
	)
}

export default Flow