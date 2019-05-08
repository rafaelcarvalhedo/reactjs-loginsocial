import React from 'react';
import './App.css';
import {MuiThemeProvider} from 'material-ui/styles';
import red from  '@material-ui/core/colors/blue';
import { createMuiTheme } from '@material-ui/core/styles';
import {AppBar,Toolbar,Typography,Card,CardContent} from '@material-ui/core';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
// Configure FirebaseUI.
const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    signInSuccessUrl: '/signedIn',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID
    ]
};
const firebaseConfig = {
    apiKey: "AIzaSyC_mhMng_OTgWlTDcRekSxJleQnmGv_mQQ",
    authDomain: "reactjs-login-social.firebaseapp.com",
    databaseURL: "https://reactjs-login-social.firebaseio.com",
    projectId: "reactjs-login-social",
    storageBucket: "reactjs-login-social.appspot.com",
    messagingSenderId: "326446477383",
    appId: "1:326446477383:web:7929d45989f05e15"
};
firebase.initializeApp(firebaseConfig);

const theme = createMuiTheme({
    palette: {
        primary: red,
    },
});


function App() {
  return (
      <MuiThemeProvider theme={theme}>
        <React.Fragment>
          <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" color="inherit" >
                    Login Social
                </Typography>
            </Toolbar>
          </AppBar>
            <Card >
                <CardContent>
                    <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
                </CardContent>
            </Card>

        </React.Fragment>
      </MuiThemeProvider>
  );
}

export default App;
