import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native'

export class Corversao extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            text2: '',
            text3: ''
        };
    }


    componentDidUpdate() {
        
    }

    dotzToReal(valor) {
        var razao = 50;
        var ValorFinal = valor / razao;
        this.setState({ text2: ValorFinal })
    }

    realToDotz(valor) {
        var razao = 50;
        var ValorFinal = valor * razao;
        this.setState({ text3: ValorFinal })
    }




    render() {
        return (

            <View style={{ padding: 10 }}>
                <TextInput
                    style={styles.text}
                    editable
                    maxLength={40}
                    placeholder="Digite um valor em Dotz"
                    onChangeText={(text) => { this.dotzToReal(text) }}

                />
                <Text style={{ padding: 10, fontSize: 20, paddingBottom: 10 }}>
                    Valor em Reais: R${this.state.text2}
                </Text>
                <TextInput
                    style={styles.text}
                    editable
                    maxLength={40}
                    placeholder="Digite um valor em Reais"
                    onChangeText={(text) => { this.realToDotz(text) }}

                />
                <Text style={{ padding: 10, fontSize: 20 }}>
                    Valor em Dotz: {this.state.text3}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e2f9ff'
    },
    line: {
        height: 80,
        borderBottomWidth: 1,
        borderBottomColor: "#bbb",
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#e2f9ff',


    },
    lineText: {
        fontSize: 15,
        padding: 4,
        flex: 1,

    },
    text: {
        height: 40,
        fontSize: 25,
        borderWidth: 1,
        borderColor: "#bbb",
    }

});


export default Corversao;


