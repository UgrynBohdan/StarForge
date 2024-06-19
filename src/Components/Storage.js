import React, { useEffect, useState } from 'react'
import './Storage.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import { auth, db, storage } from '../authentication';
import { signOut } from 'firebase/auth';
import { uploadFile } from '../database';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { deleteObject, ref } from 'firebase/storage';

export default function Storage () {
	//const location = useLocation(); // Отримання об'єкта location
    //const email = location.state?.email; // Отримання електронної пошти зі стану, якщо він є
	const [files, setFiles] = useState([]);
    const user = auth.currentUser;
	
	
	const history = useHistory(); // Ініціалізація useNavigate
	let email = null;
	if (user !== null) {
		email = user.email;
	}

	const handleSignOut = () => {
        signOut(auth).then(() => {
            // Успішний вихід
			history.push('/home');
        }).catch((error) => {
            // Обробка помилок
            console.error('Error signing out: ', error);
        });
    };

	// const handleFileUpload = (e) => {
	// 	const file = e.target.files[0];
	// 	const user = auth.currentUser;
	// 	if (user && file) {
	// 		uploadFile(file, user);
	// 	}
	// };

	const handleFileUpload = async (e) => {
		const file = e.target.files[0];
		const user = auth.currentUser;
		if (user && file) {
			const isUploaded = await uploadFile(file, user);
			history.push('/home');
			history.push('/storage');
			if (isUploaded) {
				console.log('File uploaded successfully');
			} else {
				console.error('Error uploading file');
			}
		} else {
			console.error('No user authenticated or no file selected');
		}
	};


	////////////////////////////////////////////
	useEffect(() => {
        const fetchFiles = async () => {
            if (user) {
                const userDocRef = doc(db, "users", user.uid);
                const userDocSnapshot = await getDoc(userDocRef);

                if (userDocSnapshot.exists()) {
                    setFiles(userDocSnapshot.data().files);
                }
            }
        };

        fetchFiles();
    }, [user]);

    const handleDownload = async (fileURL) => {
        const link = document.createElement('a');
        link.href = fileURL;
        link.download = true;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

	const handleDelete = async (fileURL) => {
		try {
			const storageRef = ref(storage, fileURL); // Отримання посилання на файл в Firebase Storage
			await deleteObject(storageRef); // Видалення файлу з Firebase Storage
	
			// Отримання користувача
			const user = auth.currentUser;
			if (!user) {
				console.error('No authenticated user found');
				return;
			}
	
			// Отримання посилання на документ користувача в Firestore
			const userDocRef = doc(db, "users", user.uid);
			const userDocSnapshot = await getDoc(userDocRef);
	
			if (!userDocSnapshot.exists()) {
				console.error('User document not found in Firestore');
				return;
			}
	
			// Отримання списку файлів користувача з Firestore
			const userFiles = userDocSnapshot.data().files;
	
			// Видалення вибраного файлу зі списку
			const updatedFiles = userFiles.filter(file => file.url !== fileURL);
	
			// Оновлення документа користувача в Firestore з новим списком файлів
			await updateDoc(userDocRef, {
				files: updatedFiles
			});

			history.push('/home');
			history.push('/storage');
	
			console.log('File deleted successfully');
		} catch (error) {
			console.error('Error deleting file:', error);
		}
	};
	
	//////////////////////////////////////////////////
	

	return (
		<div className='Storage_Storage'>
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
						<span className='Storage_1'>Storage</span>
						<Link to='/help'>
							<span className='Help'>Help</span>
						</Link>
						<Link to='/aboutus'>
							<span className='AboutUs'>About Us</span>
						</Link>
					</div>
				</div>
				
				<div className='LogIn'>
					<div className='Rectangle1'/>
					{email ? (
						<button onClick={handleSignOut} className='Emailgmailcom'>{email}</button>
					) : (
						<span className='Emailgmailcom'>Loading...</span>
					)}
				</div>


				{/* Додайте обробник події до елементу input для завантаження файлів */}
				<input type="file" onChange={handleFileUpload} />







			</div>
			<div className='Window'>
				<div className='Rectangle5'/>
				<img className='Line1' src = {ImgAsset.Storage_Line1} />
				<div className='Description'>
					<span className='Name'>Name</span>
					<span className='Changedate'>Change date</span>
					<span className='Type'>Type</span>
					<span className='Size'>Size</span>
				</div>
				<div className='Files'>

					{/* <div className='catpng'>
						<div className='Rectangle6'/>
						<div className='pngsvgrepocom1'>
							<img className='Vector' src = {ImgAsset.Storage_Vector} />
							<div className='Group'>
								<img className='Vector_1' src = {ImgAsset.Storage_Vector_1} />
								<img className='Vector_2' src = {ImgAsset.Storage_Vector_2} />
							</div>
							<div className='Group_1'>
								<img className='Vector_3' src = {ImgAsset.Storage_Vector_3} />
								<img className='Vector_4' src = {ImgAsset.Storage_Vector_4} />
								<img className='Vector_5' src = {ImgAsset.Storage_Vector_5} />
								<img className='Vector_6' src = {ImgAsset.Storage_Vector_6} />
							</div>
						</div>
						<span className='_110320241112'>11.03.2024 11:12 </span>
						<span className='png'>png</span>
						<span className='_65KB'>65 KB</span>
						<span className='catpng_1'>cat.png</span>
					</div> */}

					{files.map((file, index) => (
						<div key={index} className='catpng'>
							<div className='Rectangle6'/>
							<div className='pngsvgrepocom1'>
								<img className='Vector' src='/path/to/vector/image' />
								<div className='Group'>
									<img className='Vector_1' src='/path/to/vector/image1' />
									<img className='Vector_2' src='/path/to/vector/image2' />
								</div>
								<div className='Group_1'>
									<img className='Vector_3' src='/path/to/vector/image3' />
									<img className='Vector_4' src='/path/to/vector/image4' />
									<img className='Vector_5' src='/path/to/vector/image5' />
									<img className='Vector_6' src='/path/to/vector/image6' />
								</div>
							</div>
							{/* {isImage && <img src={URL.createObjectURL(file)} alt='file preview' />} */}
							<span className='_110320241112'>{new Date(file.lastModified).toLocaleString()}</span>
							<span className='png'>{file.type}</span>
							<span className='_65KB'>{(file.size / 1024).toFixed(2)} KB</span>
							<span className='catpng_1'>{file.name}</span>

							<button className='button_dow' onClick={() => handleDownload(file.url)}>Download</button>
							<button className='button_del' onClick={() => handleDelete(file.url)}>Delete</button>

						</div>
					))}


					{/* <div className='catxlsx'>
						<div className='Rectangle6_1'/>
						<div className='excelsvgrepocom1'>
							<img className='Vector_7' src = {ImgAsset.Storage_Vector_7} />
							<div className='Group_2'>
								<img className='Vector_8' src = {ImgAsset.Storage_Vector_8} />
								<img className='Vector_9' src = {ImgAsset.Storage_Vector_9} />
							</div>
							<div className='Group_3'>
								<img className='Vector_10' src = {ImgAsset.Storage_Vector_10} />
								<img className='Vector_11' src = {ImgAsset.Storage_Vector_11} />
								<img className='Vector_12' src = {ImgAsset.Storage_Vector_12} />
								<img className='Vector_13' src = {ImgAsset.Storage_Vector_13} />
								<img className='Vector_14' src = {ImgAsset.Storage_Vector_14} />
							</div>
						</div>
						<span className='_120320241311'>12.03.2024 13:11 </span>
						<span className='xlsx'>xlsx</span>
						<span className='_112KB'>112 KB</span>
						<span className='catxlsx_1'>cat.xlsx</span>
					</div> */}
					{/* <div className='catdocx'>
						<div className='Rectangle6_2'/>
						<div className='wordsvgrepocom1'>
							<img className='Vector_15' src = {ImgAsset.Storage_Vector_15} />
							<div className='Group_4'>
								<img className='Vector_16' src = {ImgAsset.Storage_Vector_16} />
								<img className='Vector_17' src = {ImgAsset.Storage_Vector_17} />
							</div>
							<div className='Group_5'>
								<img className='Vector_18' src = {ImgAsset.Storage_Vector_18} />
								<img className='Vector_19' src = {ImgAsset.Storage_Vector_19} />
								<img className='Vector_20' src = {ImgAsset.Storage_Vector_20} />
								<img className='Vector_21' src = {ImgAsset.Storage_Vector_21} />
							</div>
						</div>
						<span className='_130220241522'>13.02.2024 15:22 </span>
						<span className='docx'>docx</span>
						<span className='_512KB'>512 KB</span>
						<span className='catdocx_1'>cat.docx</span>
					</div>
					<div className='catpdf'>
						<div className='Rectangle6_3'/>
						<div className='pdfsvgrepocom1'>
							<img className='Vector_22' src = {ImgAsset.Storage_Vector_22} />
							<div className='Group_6'>
								<img className='Vector_23' src = {ImgAsset.Storage_Vector_23} />
								<img className='Vector_24' src = {ImgAsset.Storage_Vector_24} />
							</div>
							<div className='Group_7'>
								<img className='Vector_25' src = {ImgAsset.Storage_Vector_25} />
								<img className='Vector_26' src = {ImgAsset.Storage_Vector_26} />
								<img className='Vector_27' src = {ImgAsset.Storage_Vector_27} />
								<img className='Vector_28' src = {ImgAsset.Storage_Vector_28} />
							</div>
						</div>





						<span className='_230220242256'>23.02.2024 22:56 </span>
						<span className='pdf'>pdf</span>
						<span className='_132KB'>132 KB</span>
						<span className='catpdf_1'>cat.pdf</span>
					</div> */}
				</div>
			</div>
			<span className='MyFiles'>My Files</span>
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