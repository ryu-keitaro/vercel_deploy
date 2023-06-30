import { initializeApp } from "firebase/app";
import { useState } from 'react';
import { getFirestore, doc, setDoc } from 'firebase/firestore';

// Firebaseの設定と型定義

interface FirestoreData {
  id: string;
  title: string;
  name: string;
  detail: string;
  tag: string;
}

const firebaseConfig = {
    apiKey: "AIzaSyAL2k3eiGWuVfvxZd2-1QrzPZzYUunPdSU",
    authDomain: "conpas-93e54.firebaseapp.com",
    projectId: "conpas-93e54",
    storageBucket: "conpas-93e54.appspot.com",
    messagingSenderId: "989467913511",
    appId: "1:989467913511:web:30efac48507ccec4768d02",
    measurementId: "G-5JSSYVBJR0"
};


export function useFirestoreUpload() {
    const [uploadStatus, setUploadStatus] = useState<string>('');
  
    const uploadData = async (formData: FirestoreData) => {
      try {
        const app = initializeApp(firebaseConfig);
        const db = getFirestore(app);
  
        await setDoc(doc(db, 'posts', formData.id), {
            title: formData.title,
            name: formData.name,
            detail: formData.detail,
            tag: formData.tag,
          });
  
        setUploadStatus('Success');
      } catch (error) {
        setUploadStatus('Error');
        console.error('Error uploading document:', error);
      }
    };
  
    return { uploadData, uploadStatus };
  }