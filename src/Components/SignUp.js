import React, { useState } from 'react';
import './SignUp.css';
import ImgAsset from '../public';
import {Link} from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'; // Ось як отримати правильну функцію
import { useHistory } from 'react-router-dom';
import { auth } from '../authentication';
import { addUserToFirestore } from '../database';


export default function SignUp () {
    const history = useHistory(); // Ініціалізація useNavigate
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const handleRegister = async (e) => {
		e.preventDefault();
		try {
			await createUserWithEmailAndPassword(auth, email, password); // Виклик createUserWithEmailAndPassword на об'єкті auth з електронною поштою та паролем
			const user = auth.currentUser; // Отримання поточного користувача
			
            // Оновіть профіль користувача
            await updateProfile(user, { displayName: name });

            // Додайте користувача до Firestore
            //await addUserToFirestore(user); 

            history.push('/storage'); // Переадресація користувача на '/storage' з передачею стану
		} catch (error) {
			alert(error.message);
		}
	};

	

    return (
        <div className='SignUp_SignUp'>
            <img className='image2' src={ImgAsset.Home_image2} />
            <div className='FieldofSignUp'>
                <div className='Field'/>
                <span className='CreateAccount'>Create Account</span>
                



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
                    <div className='Name'>
                        <span className='Name_1'>Name</span>
                        <div className='fieldname'>
                            <div className='Rectangle4_1'/>
                            <input
                                type="text"
                                placeholder="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className='name'
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
                    {/* <button type="submit">Sign Up</button>  */}
					{/* Змінив текст кнопки на "Sign Up" */}


					{/* <Link to='/storage'> */}
						<button type="submit" className='Calltoaction'>
							<div className='Rectangle2'/>
							<span className='SignUp_1'>Sign Up</span>
						</button>
                	{/* </Link> */}

                </form>

                <Link to='/login'>
					<p className='Log_in'>Log in?</p>
				</Link>


                <div className='Logo0'>
                    <div className='Ellipse4' style={{backgroundImage: `url(${ImgAsset.Help_image3})`}}/>
                    <img className='image3' src={ImgAsset.Help_image3} />
                </div>
            </div>
            <div className='_'>
                <span className='_2024UkraineLvivAllrightsreserved'>2024 Ukraine, Lviv. All rights reserved</span>
                <div className='Contus'>
                    <span className='Contactus'>Contact us</span>
                    <div className='socialfooter'>
                        <img className='image4' src={ImgAsset.Home_image4} onClick={() => {window.location.href = 'https://www.instagram.com/starcat7770?igsh=MXkwZ3NpcXUxODEw';}}/>
                        <img className='image5' src={ImgAsset.Home_image5} />
                        <img className='image6' src={ImgAsset.Home_image6} onClick={() => {window.location.href = 'https://github.com/UgrynBohdan';}}/>
                        <img className='image7' src={ImgAsset.Home_image7} onClick={() => {window.location.href = 'https://www.linkedin.com/in/bogdan-ugryn-25b6572a8';}}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
