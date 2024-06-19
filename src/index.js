import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RouterDOM from './Router';

// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyAEbM4VTHobUSRvMVGg27uLQZp2bgsAzFQ",
//     authDomain: "starforge-4315a.firebaseapp.com",
//     projectId: "starforge-4315a",
//     storageBucket: "starforge-4315a.appspot.com",
//     messagingSenderId: "215016763624",
//     appId: "1:215016763624:web:0de56dcba65289e81b995d"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// export { auth };

ReactDOM.render(
  <React.StrictMode>
    <RouterDOM />
  </React.StrictMode>,
  document.getElementById('root')
);