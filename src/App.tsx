import React from 'react';
import {initializeApp} from 'firebase/app';
import './App.css';

const firebaseConfig = {
    apiKey: "AIzaSyB2tlU2Z0IhAZfWk98ocQHhrNRweswlShU",
    authDomain: "discoverit-b9578.firebaseapp.com",
    projectId: "discoverit-b9578",
    storageBucket: "discoverit-b9578.appspot.com",
    messagingSenderId: "833947976976",
    appId: "1:833947976976:web:01d6fca46aa063ad1c1195"
};

const fireBaseApp = initializeApp(firebaseConfig);

function App() {
  return (
    <div className="App">
      <header className="App-header">Discover it! sss</header>
    </div>
  );
}

export default App;
