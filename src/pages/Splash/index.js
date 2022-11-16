import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Splash() {

    const navigation = useNavigation();

 return (
   <View style={estilo.container}>
    <View style={estilo.containerRow}>
    <Image source={require('../../assets/images/nuvem.png')} style={estilo.nuvem}/>
    <Image source={require('../../assets/images/nuvem.png')} style={estilo.nuvem}/>
    </View>

    <View style={estilo.faixa}>
       <Image source={require('../../assets/images/quadro.png')}/>
    </View>

    <View style={estilo.containerTexto1}>
    <Text style={{fontSize: 18}}>Bem-vindo ao</Text>
    <Text style={{fontWeight: 'bold', color: '#22215B', fontSize: 16}}>Sistema de Atendimento ao Usuário</Text>
    </View>

    <View style={estilo.containerTexto1}>
    <Text style={{width: 280, fontSize: 15}}>
        Governo do estado em parceria com equipe de 
        desenvolvedores universitários juntos para atender a 
        comunidade com mais eficiência e rapidez. Tudo isso sem 
        precisar sair de Casa !
    </Text>
    </View>

    <TouchableOpacity style={estilo.botao} onPress={() => navigation.navigate('Login')}>
        <Text style={{color: '#FFF', fontWeight: 'bold'}}>Entrar</Text>
    </TouchableOpacity>

    <Image source={require('../../assets/images/detalhe3.png')} style={estilo.detalhe3}/>
    <Image source={require('../../assets/images/detalhe2.png')} style={estilo.detalhe2}/>
   </View>
  );
}


const estilo = StyleSheet.create({
    texto:{
        fontFamily: 'Roboto.Bold',
    },
    container:{
        flex: 1,
        backgroundColor: '#FFF',
        flexDirection: 'column'
    },
    nuvem:{
        marginEnd: 30,
        marginStart: 40
        
    },
    containerRow:{
       flexDirection: 'row',
       justifyContent: 'space-between'
    },
    faixa:{
        width: 360,
        bottom: 12,
        height: 180,
        backgroundColor: '#68C0AB',
        elevation: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerTexto1:{
        textAlign: 'center',
        marginTop : 25,
        marginLeft: 40
    },
    botao:{
        width: 280,
        height: 40,
        borderRadius: 7,
        top: 10,
        backgroundColor: '#68C0AB',
        justifyContent: 'center',
        alignItems: 'center',
        left: 35
    },
    detalhe2:{
        position: 'relative',
        bottom: "18%",
        zIndex: 0,
    },
    detalhe3:{
        top:25,
        zIndex: 1,
    }
})