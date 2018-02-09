var provider = new firebase.auth.GoogleAuthProvider();
var userNameL = "";
var userEmailL = "";
var userPictureL = "";


//NOTE: Función para iniciar sesión con google account

//Funcion para iniciar sesion
function googleSignin() {
  firebase.auth()
    //Se inicia sesion con un pop-up
    .signInWithPopup(provider).then(function (result) {
      //token de google
      var token = result.credential.accessToken;
      var user = result.user;
      var displayName = user.displayName;
      localStorage.setItem("userNameL", displayName);
      var email = user.email;
      localStorage.setItem("userEmailL", email);
      var photoURL = user.photoURL;
      localStorage.setItem("userPictureL", photoURL);
      window.location.assign("test.html");
      // console.log(user);
    }).catch(function (error) {
      //se manejan los erores aqui
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
      if (errorCode === 'auth/account-exists-with-different-credential') {
        alert('You have already signed up with a different auth provider for that email.');
        // If you are using multiple auth providers on your app you should handle linking
        // the user's accounts here.
      } else {
        console.error(error);
      }
    });
  console.log('SignIn Succesfull');
}

//TODO: Colocar una función de SING-OUT (Barra de navegación)
function googleSignout() {
  firebase.auth().signOut()

    .then(function () {
      window.location.assign("index.html");
      console.log('Signout Succesfull');
    }, function (error) {
      console.log('Signout Failed');
    });
}

//Final de función para iniciar sesión con google accounts


//Inicio de función para iniciar sesión con email y contraseña


$(document).ready(function () {
changeImage();


var images = ["../../assets/images/Baratheon.png","../../assets/images/Greyjoy.png", "../../assets/images/Lannister.png", "../../assets/images/Martell.png", "../../assets/images/Stark.png", "../../assets/images/Targaryen.png", "../../assets/images/Tully.png", "../../assets/images/Tyrell.png","../../assets/images/Arryn.png" ];
function changeImage(){
    var i = 0;
    var inter = setInterval(function(){
        if(i < images.length)
        {
            document.getElementById("userImage").src = images[i];
            i++;
        }
        else
        {
            i = 0;
            document.getElementById("userImage").src = images[i];
            i++;
        }
    },1000);
} //final de funcion changeImage 




}); //final funcion ready
