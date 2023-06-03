import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import Header, {} from '../../components/Header';
import Balance from '../../components/Balance';
import Movements from '../../components/Movements';
import Actions from '../../components/Actions';

const list = [
  {
    id: 1,
    label: 'Boleto conta de luz',
    value: '300,90',
    date: '17/09/2023',
    type: 0
  },
  {
    id: 2,
    label: 'Pix Cliente X',
    value: '2.500,00',
    date: '18/09/2023',
    type: 1
  },
  {
    id: 3,
    label: 'Salário',
    value: '7.200,00',
    date: '19/09/2023',
    type: 1
  },
]

export default function App() {
  return (
    <View style={styles.container}>
      <Header name="Igor Quintanilha"/>
      
      <Balance saldo="9.000,00" gastos="-527,00"/>
      
      <Actions/>

      <Text styles={styles.title}>Últimas movimentações</Text>
      
      <FlatList 
        style={styles.list} 
        data={list}
        keyExtractor={ (item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={ ({item}) => <Movements data={item}/>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  title:{
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14
  },
  list:{
    marginStart: 14,
    marginStart: 14
  }
});
