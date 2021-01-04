import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const PeopleList = props => {
    const { peoples, onPressSaldo,onPressConversao,onPressCartao, cartoes } = props;



    return (
        <View style={styles.line}>
            <TouchableOpacity onPress={() => 
                
                onPressSaldo()
                }>
                <Text style={styles.lineText}>Extrato</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onPressConversao()}>
                <Text style={styles.lineText}>Conversao</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onPressCartao()}>
                <Text style={styles.lineText}>Cartões Cadastrados</Text>
            </TouchableOpacity>



        </View>
    )

};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e2f9ff'
        , paddingTop: 20

    },
    line: {
        height: 95,

        alignItems: 'flex-start',
        flexDirection: 'column',
        backgroundColor: '#e2f9ff',
        borderWidth: 1


    },
    lineText: {
        fontSize: 20,
        paddingLeft: 10,
        padding: 2


    }


})

export default PeopleList;