import React from 'react'
import './Home.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
import { auth } from '../authentication'
import { signOut } from 'firebase/auth'




export default function Home () {
	let email = null;
	let user = auth.currentUser;
	if (user !== null) {
		email = user.email;
	}

	const handleSignOut = () => {
        signOut(auth).then(() => {
            // Успішний вихід
			window.location.reload();
        }).catch((error) => {
            // Обробка помилок
            console.error('Error signing out: ', error);
        });
    };


	return (
		<div className='Home_Home'>
			<img className='image2' src = {ImgAsset.Home_image2} />
			<div className='Description'>
				<span className='WelcometoourcosmicfileexchangeandstorageplatformWeprovideasecureandefficientwayforyoutoexchangesynchronizeandcollaborateonyourfilesallwithinaspaceinspiredenvironment'>Welcome to our cosmic file exchange and storage platform! We provide a secure and efficient way for you to exchange, synchronize, and collaborate on your files, all within a space-inspired environment.</span>
				<span className='WelcometoStarForge'>Welcome to StarForge!</span>
				

				<Link to={user !== null ? '/storage' : '/signup'}>
					<div className='Calltoaction'>
						<div className='Rectangle2'/>
						<span className='Viewtherepository'>View the repository<br/></span>
					</div>
				</Link>

				
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
			<div className='Heder'>
				<div className='navigation'>
					<div className='Logo0'>
						<div className='Ellipse4'/>
						<img className='image3' src = {ImgAsset.Help_image3} />
					</div>
					<div className='Menu'>
						<span className='Home_1'>Home</span>


						<Link to={user !== null ? '/storage' : '/signup'}>
							<span className='Storage'>Storage</span>
						</Link>


						<Link to='/help'>
							<span className='Help'>Help</span>
						</Link>
						<Link to='/aboutus'>
							<span className='AboutUs'>About Us</span>
						</Link>
					</div>




					{ email ? (
						<div className='Rectangle_Emailgmailcom_con'>
							<div className='Rectangle_Emailgmailcom'/>

							<button onClick={handleSignOut} className='Emailgmailcom'>{email}</button>
						</div>
					) : (
						<div className='LogandSignin'>
							<Link to='/signup'>
								<div className='Signup'>
									<div className='Rectangle1'/>
									<span className='SignUp'>Sign Up</span>
								</div>
							</Link>

							<Link to='/login'>
								<div className='Login'>
									<div className='Rectangle1_1'/>
									<span className='LogIn'>Log In</span>
								</div>
							</Link>
						</div>
					)}


				</div>
			</div>
		</div>
	)
}