import React, {Component} from 'react';
import firebase from 'firebase';
import {Text} from 'react-native';
import {Button, Card, CardSection, Input, Spinner} from './common';


class LoginForm extends Component{
    state = {
        email: '',
        password: '',
        error:'',
        loading: false
    }
    onPressButton = () => {
        const {email, password} = this.state;
        this.setState({error:'', loading: true});

        firebase.auth().signInWithEmailAndPassword(email,password)
            .then(this.onLoginSuccess)
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email,password)
                    .then(this.onLoginSuccess)
                    .catch(() => {
                        this.onLoginFail()
                    });
            });
    }

    onLoginFail = () => {
        this.setState({
            error: 'Authentication Failed',
            loading: false
        })
    }
    
    onLoginSuccess = () => {
        this.setState({
            email:'',
            password:'',
            error:'',
            loading: false
        })
    }
    renderButton = () => {
        const {loading} = this.state;
        if (loading) {
            return <Spinner size = {'small'}/>
        }
        return <Button onPress ={this.onPressButton}>Log in</Button>
    }

    render(){
        const {errorStyles} = styles;
        return(
            <Card>
                <CardSection>
                    <Input
                        value={this.state.email}
                        label = {'Email'}
                        placeholder = {'Enter email'}
                        onChangeText = {email => this.setState({email})}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        secureTextEntry
                        value={this.state.password}
                        label = {'Password'}
                        placeholder = {'Enter password'}
                        onChangeText = {password => this.setState({password})}
                    />
                </CardSection>
                <Text style = {errorStyles}>{this.state.error}</Text>
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        )
    }
}

const styles = {
    errorStyles:{
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}

export default LoginForm;