import React from 'react';
import {View,Text} from 'react-native';

const Card = (props) => {
    return(
        <View style = {styles.cardView}>
            {props.children}
        </View>
    )
}

const styles = {
    cardView: {
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 2,
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: {width:0, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 1,
        marginTop: 10,
        marginLeft: 5,
        marginRight: 5,
    }
}

export { Card };