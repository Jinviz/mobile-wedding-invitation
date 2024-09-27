import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

// TODO: https://firebase.google.com/docs/web/setup?hl=ko
// 가이드에 따라 firebase config를 설정합니다.
// Import the functions you need from the SDKs you need
const firebaseConfig = {
  apiKey: "AIzaSyA_leuqL9NOf5cLCA-uLuCN-dwDmHA6ckw",
  authDomain: "mobile-wedding-invitatio-3b049.firebaseapp.com",
  databaseURL: "https://mobile-wedding-invitatio-3b049-default-rtdb.firebaseio.com",
  projectId: "mobile-wedding-invitatio-3b049",
  storageBucket: "mobile-wedding-invitatio-3b049.appspot.com",
  messagingSenderId: "687856927256",
  appId: "1:687856927256:web:f66d45bf84d05e2782796d"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const realtimeDb = getDatabase(firebaseApp);
