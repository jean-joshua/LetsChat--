
var firebaseConfig = {
      apiKey: "AIzaSyBhlrcp6VA5gnz7deNDUQPyYPeERdRZu0c",
      authDomain: "kwitter-app-839d9.firebaseapp.com",
      databaseURL: "https://kwitter-app-839d9-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-839d9",
      storageBucket: "kwitter-app-839d9.appspot.com",
      messagingSenderId: "298486406889",
      appId: "1:298486406889:web:c810c003d9f72c744b9a78"
    };
    
    
     firebase.initializeApp(firebaseConfig);
     user_name = localStorage.getItem("user_name");
     room_name = localStorage.getItem("room_name");

     function send()
     {
           msg = document.getElementById("msg").value;
           firebase.database().ref(room_name).push({
                 name:user_name,
                 message:msg,
                 like:0
           });

           document.getElementById("msg").value = "";
     }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
