import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';


export class Cartao extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            peoples: [],
            saldo: {},
            cartoes: []



        };
    }

    componentDidMount() {

        axios
          .get('http://localhost:8888/api/cartao/get')
          .then(response => {

            console.log(response.data)
            this.setState({
                cartoes: response.data
            });

          });


        // this.setState({
        //     cartoes:  [
        //             { "idCartao": 1, "numeroCartao": "5423380353454469", "dataValidade": "2022-12-04", "cvv": "***", "bandeira": "Master", "nome": "Cartao Teste " }
        //             , { "idCartao": 2, "numeroCartao": "4556871005216134", "dataValidade": "2022-11-29", "cvv": "***", "bandeira": "Visa", "nome": "Cartao Teste Visa" },
        //             { "idCartao": 3, "numeroCartao": "346595200070730", "dataValidade": "2022-10-13T", "cvv": "***", "bandeira": "Express", "nome": "Cartao Teste Express" }
        //         ]
        // });


    }

    renderList() {
             
        const textElements = this.state.cartoes.map((item, index) => {

            //const { idCartao } = card.idCartao;
            return <View style={styles.line}>
                <Text style={styles.lineText} key={item.idCartao}>Cartao: {item.numeroCartao}</Text>
                <Text style={styles.lineText} >Nome: {item.nome}</Text>
                <Text style={styles.lineText} >Validade: {item.dataValidade}</Text>
                <Text style={styles.lineText} >Bandeira: {item.bandeira}</Text>



            </View>
        })

        return textElements;
    }





    render() {

        return (


            <View>
                <Text style={styles.cartao}>Cartões Cadastrados</Text>
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
        flex: 1
    },
    cartao:{
        fontSize: 25,
        color: '#03114a',
        fontWeight: 'bold'
    }

});

export default Cartao;

