import React, {Component} from 'react';
import {View} from 'react-native';
import firebase from 'firebase';
import { Header }  from './components/common';
import LoginForm from './components/LoginForm'

class App extends Component {
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
    }

    render(){
        return (
            <View>
                <Header headerText={'Authorization'}/>
                <LoginForm/>
            </View>
        )
    }
}

export default App;