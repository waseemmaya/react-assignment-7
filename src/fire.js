import firebase from "firebase";

var config = {
 	apiKey: "AIzaSyDqtdGhl0kAykn6LWz4DlGUwTi--Rdajpo",
			authDomain: "olxapp-60a3a.firebaseapp.com",
			databaseURL: "https://olxapp-60a3a.firebaseio.com",
			projectId: "olxapp-60a3a",
			storageBucket: "olxapp-60a3a.appspot.com",
			messagingSenderId: "3723958208"
};

var fire = firebase.initializeApp(config);
export default fire;
