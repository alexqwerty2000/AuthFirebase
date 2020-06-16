import React, {Component} from 'react';
import {View} from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection }  from './components/common';
import LoginForm from './components/LoginForm';
import LogoutForm from './components/LogoutForm';

class App extends Component {

    state = {loggedIn : null}
    componentDidMount(){
        firebase.initializeApp({
            apiKey: 'AIzaSyAkF4qJaQcof2kpNXwbBxk4T3GZcOvDyiM',
            authDomain: 'authorization-fb4u.firebaseapp.com',
            databaseURL: 'https://authorization-fb4u.firebaseio.com',
            projectId: 'authorization-fb4u',
            storageBucket: 'authorization-fb4u.appspot.com',
            messagingSenderId: '287977005990',
            appId: '1:287977005990:web:0597f7b54a45b0bc832567'
          });
          firebase.auth().onAuthStateChanged((user) => {
              if(user){
                  this.setState({loggedIn: true});
              } else {
                  this.setState({loggedIn: false});
              }
          })
    }

    onUserLoggedIn = () => {
        switch(this.state.loggedIn){
            case true:
                return <LogoutForm/>    
            case false:
                return <LoginForm/>
            default: 
            return <Spinner size = 'large'/>
        }
    }

    render(){
        return (
            <View>
                <Header headerText={'Authentication'}/>
                {this.onUserLoggedIn()}
            </View>
        )
    }
}

export default App;