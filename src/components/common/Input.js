import React from 'react';
import {View, TextInput, Text} from 'react-native';

const Input = ({label, value, onChangeText, placeholder, secureTextEntry}) => {
    const {viewStyles, labelStyles, inputStyles} = styles;

    return(
        <View style={viewStyles}>
            <Text style={labelStyles}>{label}</Text>
            <TextInput 
                secureTextEntry = {secureTextEntry}
                autoCorrect = {false}
                placeholder = {placeholder}
                style={inputStyles}
                value={value}
                onChangeText={onChangeText}
            />
        </View>
    )
}

const styles = {
    viewStyles:{
        height: 40,
        flex:1,
        flexDirection:'row',
        alignItems: 'center'
    },
    labelStyles:{
        paddingLeft: 20,
        fontSize: 18,
        flex:1
    },
    inputStyles:{
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight:23,
        flex:2
    }
}

export {Input};