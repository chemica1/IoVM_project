export const DB_config = {
  apiKey: "AIzaSyCgfkkfgIIU3jygonUVIUlUyzvEb0Ae9aU",
  authDomain: "test-e7ccd.firebaseapp.com",
  databaseURL: "https://test-e7ccd.firebaseio.com",
  projectId: "test-e7ccd",
  storageBucket: "test-e7ccd.appspot.com",
  messagingSenderId: "365453898167"
};

/*}
const config = {
  apiKey: "AIzaSyCgfkkfgIIU3jygonUVIUlUyzvEb0Ae9aU",
  authDomain: "test-e7ccd.firebaseapp.com",
  databaseURL: "https://test-e7ccd.firebaseio.com",
  projectId: "test-e7ccd",
  storageBucket: "test-e7ccd.appspot.com",
  messagingSenderId: "365453898167"
};

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();

*/



/*
  var firebase = require("firebase/app");

  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }
  var dbRef = firebase.database().ref.child("hi");
  var go;
  dbRef.on("value", snap => (go = snap.val()));

  return go;
};
*/
