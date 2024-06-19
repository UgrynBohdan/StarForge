import React from 'react'
import './AboutUs.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
import { signOut } from 'firebase/auth';
import { auth } from '../authentication';


export default function AboutUs () {
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

	// URL до файлу, який буде завантажуватись
	const fileUrl = 'https://example.com/path/to/your/file.pdf';
	const fileName = '12.txt';
  
	// Функція для завантаження файлу
	// const downloadFile = () => {
	//   // Створюємо посилання
	//   const link = document.createElement('a');
	//   link.href = fileUrl;
	//   link.download = fileName;
  
	//   // Додаємо посилання до документу
	//   document.body.appendChild(link);
  
	//   // Імітуємо клік на посиланні
	//   link.click();
  
	//   // Видаляємо посилання з документу
	//   document.body.removeChild(link);
	// };
	const downloadFile = () => {
		const fileUrl = `${ImgAsset.resume}`;
		const link = document.createElement('a');
		link.href = fileUrl;
		link.download = 'Bohdan Uhryn.pdf';
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	  };



	return (
		<div className='AboutUs_AboutUs'>
			<img className='image2' src = {ImgAsset.Home_image2} />

			<img className='author' src={ImgAsset.author}/>
      		<button className='resume' onClick={downloadFile}>Download File</button>

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


						<Link to='/help'>
							<span className='Help'>Help</span>
						</Link>
						<span className='AboutUs_1'>About Us</span>
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