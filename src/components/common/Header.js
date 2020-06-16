import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = ({headerText}) => {
  const {viewStyles, fontStyles} = styles;
  return (
    <View style={viewStyles}>
      <Text style={fontStyles}>{headerText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyles: {
    paddingTop: 30,
    height: 100,
    backgroundColor: '#F8F8F8',
    justifyContent:'center',
    alignItems:'center',
    shadowColor: '#000',
    shadowOffset: {width:0, height:2},
    shadowOpacity: 0.2,
    elevation: 2,
    position:'relative'
  },
  fontStyles:{
    fontSize: 20
  }
});

export { Header };