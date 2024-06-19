import React from 'react'
import './Help.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
import { auth } from '../authentication';
import { signOut } from 'firebase/auth';


export default function Help () {
	let email = null;
	let user = auth.currentUser;
	if (auth.currentUser !== null) {
		email = auth.currentUser.email;
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
		<div className='Help_Help'>
			<img className='image2' src = {ImgAsset.Home_image2} />
			<div className='Heder'>
				<div className='navigation'>
					<div className='Logo0'>
						<div className='Ellipse4'/>
						<img className='image3' src = {ImgAsset.Help_image3} />
					</div>
					<div className='Menu'>
						<Link to='/home'>
							<span className='Home'>Home</span>
						</Link>



						<Link to={user !== null ? '/storage' : '/signup'}>
							<span className='Storage'>Storage</span>
						</Link>


						<span className='Help_1'>Help</span>
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


			<div className='Text_Help'>
				<h1>How to use the program</h1>
				<p style={{ top: '100px' }}>Our program is an ideal solution for convenient storage and management of your files in cloud storage. Whether you need to store photos, documents or videos, we offer a simple and intuitive interface to upload, view and manage your files.</p>
				<p style={{ top: '230px' }}>Before you start using the app, please log in with your account. This will allow us to ensure the security of your information and ensure that only you and other authorized users have access.</p>
				<h2 style={{ top: '340px' }}>Key features</h2>
				<p style={{ top: '430px' }}>	1. File Upload: You can easily upload files from your computer to our cloud storage by selecting the appropriate file using the "Choose file" button.<br/>

					2. Browse files: After downloading, you can view all your files in a convenient list, where they are sorted by name, date modified, type and size.<br/>

					3. Downloading and deleting files: Our app allows you to download files to your device and delete them from the storage of your choice.<br/>

					4. Auto Update: Your file information is automatically updated after each download or delete, so you always have access to the latest state of your storage.
				</p>
				{/* <h2 style={{ top: '650px' }}>Getting additional help</h2>
				<p style={{ top: '700px' }}>	If you have any questions or problems using the application, please contact our support team via email or contact us using the contact details provided on our website.<br/>

					We are always available to help you with any questions or concerns you may have. Thank you for choosing our program!
				</p> */}
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