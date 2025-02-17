// Import the functions you need from the SDKs you need
console.log("hello");

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, ref, push, set } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTi8kpP4J6gPfwpnldP7yARdY8BeJw2Lc",
  authDomain: "data-base-24eb7.firebaseapp.com",
  databaseURL: "https://data-base-24eb7-default-rtdb.firebaseio.com",
  projectId: "data-base-24eb7",
  storageBucket: "data-base-24eb7.firebasestorage.app",
  messagingSenderId: "559857043814",
  appId: "1:559857043814:web:34c917c26ab1ac741760a7",
  measurementId: "G-WMH0JWNR45"
};

const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);

  console.log("🔥 Firebase успешно инициализирован!");

  // Функция для добавления данных
  function addData() {
    const dataRef = ref(db, 'users');
    const newUserRef = push(dataRef);
    set(newUserRef, {
      username: "Anastasia",
      age: 19,
      hobby: ["3D modeling", "cycling", "chess"],
      timestamp: new Date().toISOString()
    })
    .then(() => {
      console.log("✅ Данные успешно добавлены!");
    })
    .catch((error) => {
      console.error("🚨 Ошибка при добавлении данных:", error);
    });
  }

  addData();