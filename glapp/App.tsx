import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import ligado from './assets/pictures/symbol-on.png';
import desligado from './assets/pictures/symbol-off.png';

export default function App() {
  let isActive = false;
  return (
    <View style={isActive ? styles.containerOn : styles.containerOff}>
     <Image source={isActive ? ligado : desligado}></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  containerOn: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },

  containerOff: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});