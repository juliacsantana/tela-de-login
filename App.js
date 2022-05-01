import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

export default function App() {
  
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const cadastro = () => {
    
  }

  return (
    <View style={styles.container}>
      <Text>  </Text>
      <StatusBar hidden/>

      <Image style={{width:320,height:320}} source={require('./assets/jm-removebg-preview.png')} />
   
      <TextInput placeholder='Seu nome...' style={styles.textInput} onChangeText={text=>setNome(text)} />
      <TextInput placeholder='Seu email...' style={styles.textInput} onChangeText={text=>setEmail(text)} />
      <TextInput secureTextEntry={true} placeholder='Sua senha...' style={styles.textInput} onChangeText={text=>setSenha(text)} />
   
      <TouchableOpacity style={styles.btnCadastro} onPress={()=>cadastro()}>
        <Text style={{color:'white',textAlign:'center'}}>CADASTRAR!</Text>
      </TouchableOpacity>

   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffb0f4',
    alignItems: 'center',
    justifyContent: 'center',
    padding:20
  },

  textInput:{
    width:'100%',
    height:40,
    backgroundColor:'white',
    borderRadius:25,
    paddingLeft:10,
    marginBottom:10
  },
  btnCadastro:{
    width: '100%',
    height:40,
    backgroundColor: 'blue',
    borderRadius: 20, 
    justifyContent:'center'
  }

});
