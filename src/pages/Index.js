import React from 'react';

import { StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header';


import axios from 'axios';
import PeopleList from '../components/PeopleList';



export default class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            peoples: [],
            saldo: {},
            cartoes:[]



        };
    }


    componentDidMount() {

        axios
          .get('http://localhost:8888/api/saldo/getsaldo')
          .then(response => {

            console.log(response.data)
            this.setState({
              saldo: response.data
            });

          });


        // this.setState({
        //     saldo: { "idSaldo": 1, "saldoDotz": 26000.00, "saldoReais": 520.00, "dataSaldo": "2020-12-23T00:00:00", "saldoDate": "12/23/2020 00:00:00" }
        // });


    }

    renderList() {

        const textElements = this.state.peoples.map(people => {
            const { first } = people.name;
            return <Text key={first}>{first}</Text>;
        })

        return textElements;
    }

    render() {

        return (
            <View>
                <Header title="Dotz" />
                <Text style={styles.menu}>Menu</Text>
                <PeopleList
                    style={styles.listagem}
                    peoples={this.state.peoples}
                    onPressSaldo={() => {
                        this.props.navigation.navigate('Saldo')
                    }}
                    onPressConversao={() => {
                        this.props.navigation.navigate('Conversao')
                    }}
                    onPressCartao={() => {
                        this.props.navigation.navigate('Cartao')
                    }} />
                <Text style={styles.saldo}>Saldo em Dotz: {this.state.saldo.saldoDotz} Pontos</Text>
                <Text>Saldo em Reais: R${this.state.saldo.saldoReais}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    menu: {
        fontSize: 30,
        paddingLeft: 10,
        alignItems: 'flex-end',
        flexDirection: 'row',
        height: 70,
        paddingTop: 20
    },
    saldo: {
        paddingTop: 100
    },
    listagem:
    {
        marginTop: 20
    }
});
