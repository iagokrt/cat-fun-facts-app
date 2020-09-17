import firebase from 'firebase';

const config = {
  apiKey: "api-key",
  authDomain: "domain-auth",
  databaseURL: "https://url.com",
  projectId: "project-id",
  storageBucket: "storage-bucket",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:123token456"
};

firebase.initializeApp(config);

export default firebase;
