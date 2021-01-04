import React from 'react';
import {View, Text, StyleSheet} from 'react-native'
import axios from 'axios';


export class Saldo extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            peoples: [],
            saldo: {},
            extratos: []


        };
    }


    componentDidMount() {

        axios
          .get('http://localhost:8888/api/saldo/getExtrato')
          .then(response => {

            console.log(response.data)
            this.setState({
              extratos: response.data
            });

          });


        // this.setState({
        //     extratos: [{"idSaldo":1,"saldoDotz":26000.00,"saldoReais":520.00,"dataSaldo":"2020-12-23T00:00:00","saldoDate":"12/23/2020 00:00:00"},{"idSaldo":2,"saldoDotz":1300.00,"saldoReais":26.00,"dataSaldo":"2020-12-25T00:00:00","saldoDate":"12/25/2020 00:00:00"},{"idSaldo":3,"saldoDotz":8000.00,"saldoReais":160.00,"dataSaldo":"2020-08-10T00:00:00","saldoDate":"08/10/2020 00:00:00"}]
        // });


    }






    renderList() {
             
        const textElements = this.state.extratos.map((item, index) => {

            //const { idCartao } = card.idCartao;
            return <View style={styles.line}>
                <Text style={styles.lineText} key={item.idSaldo}>Valor Dotz: {item.saldoDotz}</Text>
                <Text style={styles.lineText} >Valor em Reais: {item.saldoReais}</Text>
                <Text style={styles.lineText} >Data do extrado: {item.saldoDate}</Text>
            </View>
        })

        return textElements;
    }





    render() {

        return (


            <View>
                <Text style={styles.extrato}>Extrato(s)</Text>
                {this.renderList()}
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
    extrato:{
        fontSize: 25,
        color: '#03114a',
        fontWeight: 'bold'
    }

});

export default Saldo;



