import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = (props) => (
    <View style={style.container}>
        
        <Text style={style.title}>{props.title}</Text>
       
    </View>
);

const style = StyleSheet.create({

    container: {
        marginTop: 0,
        backgroundColor: '#ebbf13',
        alignItems: 'center',
        justifyContent: 'center'

    },
    title: {
        fontSize: 50,
        color: '#03114a'
    },
    logo:
    {
        alignItems: 'center',
        flexDirection: 'row-reverse',
    }
});

export default Header;