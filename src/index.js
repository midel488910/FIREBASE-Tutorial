import {initializeApp} from 'firebase/app'
import {
    getFirestore, collection, getDocs
} from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyCpsSu2tVqSBpqJ6Q2pQlgPbxNZ3tr8yKQ",
    authDomain: "toggle-button-814c3.firebaseapp.com",
    databaseURL: "https://toggle-button-814c3-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "toggle-button-814c3",
    storageBucket: "toggle-button-814c3.appspot.com",
    messagingSenderId: "801690073443",
    appId: "1:801690073443:web:a4da9d3e7ab9cb805b7b56",
    measurementId: "G-31LGZSNMF4"
  };

  //init firebase app
  initializeApp(firebaseConfig)

  // init services
const db = getFirestore()



  // collection refs
const colRef = collection(db, 'books')

  // get collection data
getDocs(colRef)
  .then((snapshot)=>{
    let books = []
    snapshot.docs.forEach((doc)=>{
      books.push({...doc.data(), id: doc.id})
    })
    console.log(books)
  })
  .catch(err =>{
    console.log(err.message)
  })
