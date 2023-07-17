// Import the functions you need from the SDKs you need

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";

import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-analytics.js";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDiTT5DnJ2J6o2bGotKGCfuraCRwEOiwYY",

  authDomain: "breez-portfolio2.firebaseapp.com",

  projectId: "breez-portfolio2",

  storageBucket: "breez-portfolio2.appspot.com",

  messagingSenderId: "824633491374",

  appId: "1:824633491374:web:18cba6b393515e0797523f",

  measurementId: "G-Q5PJ54Y8LP",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
