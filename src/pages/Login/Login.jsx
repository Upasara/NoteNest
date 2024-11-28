/* eslint-disable no-unused-vars */
import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { Link } from 'react-router-dom';

const Login = () => {
	return (
		<>
			<Navbar />
			<div className='bg-yellow-200 flex items-center justify-center mt-28'>
				<div className='bg-blue-200 w-100 border rounded px-10 py-10'>
					<form onSubmit={{}}>
						<h4 className='text-2xl mb-7'>Login</h4>
						<input type='text' placeholder='Email' className='input' />
						<button type='submit' className='primary-btn'>
							Submit
						</button>

						<p className='text-sm text-center mt-4'>
							Not Registered yet?{''}
							<Link
								to={'/signUp'}
								className='font-medium text-primary underline'
							>
								Create an Account
							</Link>
						</p>
					</form>
				</div>
			</div>
		</>
	);
};

export default Login;
