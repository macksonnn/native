import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'
import Index from './src/pages/Index';
import Saldo from './src/pages/Saldo';
import Conversao from './src/pages/Corversao';
import Cartao from './src/pages/Cartao';


const AppNavigator = createStackNavigator({
  'Home':{
    screen: Index
  },
  'Saldo':{
    screen: Saldo
  },
  'Conversao':{
    screen: Conversao
  },
  'Cartao':{
    screen: Cartao
  }
});
const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
