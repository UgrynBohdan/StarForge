import { arrayUnion, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db, storage } from "./authentication";
//import { ref } from "firebase/database";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

// export const uploadFile = async (file, user) => {
//     try {
//         const storageRef = ref(storage, `${user.uid}/${file.name}`);
//         await uploadBytes(storageRef, file);
//         const fileURL = await getDownloadURL(storageRef);

//         const fileMetadata = {
//             name: file.name,
//             url: fileURL,
//             type: file.type,
//             size: file.size,
//             lastModified: file.lastModified
//         };

//         // Отримуємо посилання на документ користувача в Firestore
//         const userDocRef = doc(db, "users", user.uid);
//         const userDocSnapshot = await getDoc(userDocRef);

//         if (!userDocSnapshot.exists()) {
//             // Якщо документ не існує, створюємо його
//             await setDoc(userDocRef, {
//                 uid: user.uid,
//                 name: user.displayName,
//                 files: []
//             });
//         }

//         // Оновлюємо документ користувача посиланням на завантажений файл
//         await updateDoc(userDocRef, {
//             files: arrayUnion(fileMetadata)
//         });

//         console.log("File uploaded successfully");
//         return true; // Файл успішно завантажений
//     } catch (error) {
//         console.error("Error uploading file: ", error);
//         return false; // Помилка при завантаженні файлу
//     }
// };


export const uploadFile = async (file, user) => {
    try {
        const storageRef = ref(storage, `${user.uid}/${file.name}`);
        const userDocRef = doc(db, "users", user.uid);
        const userDocSnapshot = await getDoc(userDocRef);

        if (!userDocSnapshot.exists()) {
            await setDoc(userDocRef, {
                uid: user.uid,
                name: user.displayName,
                files: []
            });
            console.log("User document created successfully");
        }

        const userDocData = userDocSnapshot.data();
        const userFiles = userDocData ? userDocData.files || [] : [];
        const existingFile = userFiles.find(f => f.name === file.name);

        if (existingFile) {
            alert("File with the same name already exists.");
            return false;
        }

        await uploadBytes(storageRef, file);
        const fileURL = await getDownloadURL(storageRef);

        const fileMetadata = {
            name: file.name,
            url: fileURL,
            type: file.type,
            size: file.size,
            lastModified: file.lastModified
        };

        await updateDoc(userDocRef, {
            files: arrayUnion(fileMetadata)
        });

        console.log("File uploaded successfully");
        return true;
    } catch (error) {
        console.error("Error uploading file: ", error);
        return false;
    }
};

