import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Login() {

    const navigation = useNavigation();

 return (
   <View style={estilo.container}>

    <Image source={require('../../assets/images/detalhe4.png')} style={estilo.detalhe1}/>
    
    <View style={estilo.containerRow}>
    <Image source={require('../../assets/images/nuvem.png')}/>
    <Image source={require('../../assets/images/nuvem.png')}  style={{top: 80}} />
    <Image source={require('../../assets/images/nuvem.png')}/>
    </View>

    <Image source={require('../../assets/images/detalhe5.png')} style={estilo.detalhe4}/>


    <View style={estilo.containerTexto1}>
    <Text style={{fontSize: 25, fontWeight: 'bold', color: '#000'}}>Login</Text>
    <Text style={{fontSize: 16}}>Por favor, faça o login!</Text>

    <TextInput
    placeholder='Email'
    autoCorrect={false}
    style={estilo.input}
    />
    <Image source={require('../../assets/images/mail.png')} 
    style={{position: 'absolute', left: '75%', top: '31%'}}/>

    <TextInput
    placeholder='Senha'
    autoCorrect={false}
    style={estilo.input}
    />

    <Image source={require('../../assets/images/lock.png')} 
    style={{position: 'absolute', left: '75%', top: '51%'}}/>

    <TouchableOpacity>
    <Text style={{fontSize: 15, margin: 5, left: 140, fontWeight:'bold'}}>Esqueceu a senha?</Text>
    </TouchableOpacity>

    <TouchableOpacity style={estilo.botao} onPress={() => navigation.navigate('Home')}>
        <Text style={{color: '#FFF', fontWeight: 'bold'}}>Logar</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
    <Text style={{fontSize: 15, top: 15, left: 5, fontWeight:'bold'}}>Não tem uma conta? Crie agora mesmo</Text>
    </TouchableOpacity>

    </View>

    <Image source={require('../../assets/images/detalhe3.png')} style={estilo.detalhe3}/>
    <Image source={require('../../assets/images/detalhe2.png')} style={estilo.detalhe2}/>

   </View>
  );
}


const estilo = StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor: '#FFF',
        flexDirection: 'column'
    },
    
    detalhe1:{
      bottom: 80,
    },

    containerRow:{
       flexDirection: 'row',
       justifyContent: 'center',
       bottom: "70%",

    },

    containerTexto1:{
        textAlign: 'center',
        bottom: 180,
        marginLeft: 40,
    },

    input:{
        height: 41,
        borderRadius: 20,
        marginTop: 15,
        width: "87%",
        borderWidth: 1,
        padding: 10,
    },

    botao:{
        width: 280,
        height: 45,
        borderRadius: 25,
        top: 5,
        backgroundColor: '#22CDAE',
        justifyContent: 'center',
        alignItems: 'center',
        
    },

    detalhe4:{
        position: 'relative',
        bottom: "24%",
        left: 340
    },
    
    detalhe2:{
        position: 'relative',
        bottom: "55%",
    },

    detalhe3:{
        bottom:145,
        zIndex: 1,
    }
})