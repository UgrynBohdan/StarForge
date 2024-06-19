import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAEbM4VTHobUSRvMVGg27uLQZp2bgsAzFQ",
    authDomain: "starforge-4315a.firebaseapp.com",
    projectId: "starforge-4315a",
    storageBucket: "starforge-4315a.appspot.com",
    messagingSenderId: "215016763624",
    appId: "1:215016763624:web:0de56dcba65289e81b995d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, app, db, storage };
