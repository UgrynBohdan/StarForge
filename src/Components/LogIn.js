import React, { useState } from 'react'
import './LogIn.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { auth } from '../authentication';

export default function LogIn () {
	const history = useHistory(); // Ініціалізація useNavigate
	const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');



	const handleRegister = async (e) => {
		e.preventDefault();
		try {
			const userCredential = await signInWithEmailAndPassword(auth, email, password); // Виклик createUserWithEmailAndPassword на об'єкті auth з електронною поштою та паролем
			const user = auth.currentUser; // Отримання поточного користувача
            history.push('/storage'); // Переадресація користувача на '/storage' з передачею стану
		} catch (error) {
			alert(error.message);
		}
	};


	return (
		<div className='LogIn_LogIn'>
			<img className='image2' src = {ImgAsset.Home_image2} />
			<div className='FieldofSignUp'>
				<div className='Field'/>
				<span className='WelcomeBack'>Welcome Back!</span>
				{/* <Link to='/storage'>
					<div className='Calltoaction'>
						<div className='Rectangle2'/>
						<span className='LogIn_1'>Log In</span>
					</div>
				</Link> */}

				<form onSubmit={handleRegister}>
				<div className='Email'>
					<span className='Email_1'>Email</span>
					<div className='fieldem'>
						<div className='Rectangle4'/>
						<input
							type="email"
							placeholder="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className='email'
						/>
					</div>
				</div>


				<div className='Password'>
					<span className='Password_1'>Password</span>
					<div className='fieldem'>
						<div className='Rectangle4'/>
						<input
							type="password"
							placeholder="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							className='password'
						/>
					</div>
				</div>

				<button type="submit" className='Calltoaction'>
					<div className='Rectangle2'/>
					<span className='LogIn_1'>Log In</span>
				</button>

				</form>

				<Link to='/signup'>
					<p className='Sign_up'>Sign up?</p>
				</Link>


				<div className='Logo0'><div className='Ellipse4' style={{backgroundImage: `url(${ImgAsset.Help_image3})`}}/>
					<img className='image3' src = {ImgAsset.Help_image3} />
				</div>
			</div>
			<div className='_'>
				<span className='_2024UkraineLvivAllrightsreserved'>2024 Ukraine, Lviv. All rights reserved</span>
				<div className='Contus'>
					<span className='Contactus'>Contact us</span>
					<div className='socialfooter'>
					<img className='image4' src = {ImgAsset.Home_image4} onClick={() => {window.location.href = 'https://www.instagram.com/starcat7770?igsh=MXkwZ3NpcXUxODEw';}}/>
						<img className='image5' src = {ImgAsset.Home_image5} /* onClick={() => {window.location.href = 'https://';}} *//>
						<img className='image6' src = {ImgAsset.Home_image6} onClick={() => {window.location.href = 'https://github.com/UgrynBohdan';}}/>
						<img className='image7' src = {ImgAsset.Home_image7} onClick={() => {window.location.href = 'https://www.linkedin.com/in/bogdan-ugryn-25b6572a8';}}/>
					</div>
				</div>
			</div>
		</div>
	)
}