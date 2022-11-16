import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Cadastro() {

    const navigation = useNavigation();

 return (
   <View style={estilo.container}>

    <Image source={require('../../assets/images/detalhe5.png')} style={estilo.detalhe4}/>

    <View style={estilo.containerTexto1}>
    <Text style={{fontSize: 25, fontWeight: 'bold', color: '#000'}}>Registre-se</Text>

    <TextInput
    placeholder='Nome'
    autoCorrect={false}
    style={estilo.input}
    />

    <Image source={require('../../assets/images/user.png')} 
    style={{position: 'absolute', left: '75%', top: '16%'}}/>
    
    <TextInput
    placeholder='Email'
    autoCorrect={false}
    style={estilo.input}
    />

    <Image source={require('../../assets/images/mail.png')} 
    style={{position: 'absolute', left: '75%', top: '32%'}}/>

<TextInput
    placeholder='Cartão do SUS'
    autoCorrect={false}
    style={estilo.input}
    />
    <Image source={require('../../assets/images/cartao.png')} 
    style={{position: 'absolute', left: '75%', top: '47%'}}/>

    <TextInput
    placeholder='Senha'
    autoCorrect={false}
    style={estilo.input}
    />

    <TextInput
    placeholder='Confirmar senha'
    autoCorrect={false}
    style={estilo.input}
    />

    <Image source={require('../../assets/images/lock.png')} 
    style={{position: 'absolute', left: '75%', top: '63%'}}/>

    <TouchableOpacity style={estilo.botao} onPress={() => navigation.navigate('Home')}>
        <Text style={{color: '#FFF', fontWeight: 'bold'}}>Cadastrar</Text>
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


    containerTexto1:{
        textAlign: 'center',
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
        top: 25,
        backgroundColor: '#22CDAE',
        justifyContent: 'center',
        alignItems: 'center',
    },

    detalhe4:{
        position: 'relative',
        left: 340
    },
    
    detalhe2:{
        position: 'relative',
        bottom: "20%",
    },

    detalhe3:{
        top: '10%',
        zIndex: 1,
    },
        
    
    
})