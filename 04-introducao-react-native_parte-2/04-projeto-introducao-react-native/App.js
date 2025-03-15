import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

// Função que define o componente
// Retornar o que vai ser renderizado na tela do APPA

export default function App() {
  const nome = 'Sérgio Silva';
  
  function alerta(){
      alert(`${nome} Clicou no botão!`);
  };

  return (
    <View style={styles.container}>
      <Image 
        source={{
          uri: "https://i1.sndcdn.com/artworks-000531584691-jcd7iu-t500x500.jpg"
        }}

        style={{
          height: 300,
          width: 300
        }}
        />
      <Text>Tobax - Burning (Eatbrain082) by EATBRAIN</Text>
      <Button title='EATBRAIN' onPress={alerta}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

// CSS
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
