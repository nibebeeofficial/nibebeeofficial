0
// creating a user with email and password

function createaccount() {

    var userEmail = document.getElementById("signup-email").value;
    var userPass = document.getElementById("signup-password").value;
    console.log(userEmail, userPass)

    // you may redirect them to the page which you will take their details

}

// check if a user is signed in and kick them out if they are not
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        var uid = user.uid; // get user id of currently signed in user
        var email = user.email; // get email of currently signed in user
    } else {
        location.href = "signup";

    }
});


//log in with gmail firebase
function google_login_in() {
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/plus.login');
    firebase.auth().signInWithPopup(provider).then(function(result) {
        var token = result.credential.accessToken;
        var user = result.user;
    }).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
    });
}


// firebase logout 
function logout() {

    firebase.auth().signOut();
}



// upload a file/picture to firebase storage

function uploadFile() {
    // Create a root reference
    var filename = 'profilePic';
    var storageRef = firebase.storage().ref('/profilePics/' + filename);
    var uploadTask = storageRef.put(selectedFile); // selected file is the file you want to upload



    uploadTask.on('state_changed', function(snapshot) {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
            case firebase.storage.TaskState.PAUSED: // or 'paused'
                console.log('Upload is paused');
                break;
            case firebase.storage.TaskState.RUNNING: // or 'running'
                console.log('Upload is running');
                break;
        }
    }, function(error) {
        // Handle unsuccessful uploads
    }, function updateprofile() {
        // Get a reference to the database service
        var downloadURL = uploadTask.snapshot.downloadURL; //get the url of the uploaded file

        // upload the url to path users/griffins in the realtime database
        firebase.database().ref('users/griffins').update({
            profilePic: downloadURL,
        });

        uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
            console.log('File available at', downloadURL);

        });
    });
}


// write data into the database 

function write() {
    var contact = document.getElementById("contact").value; // get a field from your html

    firebase.database().ref('users/griffins').set({
        name: 'griffins',
        id: '34533556',
        contact: contact,

    });


}