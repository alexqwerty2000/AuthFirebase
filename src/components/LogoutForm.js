import React from 'react';
import firebase from 'firebase';
import {Card, CardSection, Button} from './common';

const LogoutForm = () => {
    return (
        <Card>
            <CardSection>
                <Button onPress = {() => firebase.auth().signOut()}>Log out</Button>
            </CardSection>
        </Card>
    )
}

export default LogoutForm;