import React from 'react';
import { useNavigation } from '@react-navigation/native';

import {
  Background,
  ContainerBar,
  BotaoBanner,
  Image,
  Nome, 
  Banner, Pesquisa, 
  Lupa, Search, 
  ContainerCard, Card, TituloCard, RowTitulo, Servico, STitulo, SubTitulo} from './style';

export default function Home() {

  const navigation = useNavigation();

 return (
   <Background>
    <ContainerBar>
      <Image source={require('../../assets/images/menu.png')}/>
      <Nome>Bem vindo Henrique</Nome>
      <Image source={require('../../assets/images/perfil.png')}/>
    </ContainerBar>

    <BotaoBanner onPress={() => navigation.navigate('Agendamento')}>
    <Banner source={require('../../assets/images/Banner.png')}/>
    </BotaoBanner>

    <Search>
    <Pesquisa
    placeholder='Procurar Serviço'
    autoCorrect={false}
    underlineColorAndroid="transparent"
    />
    <Lupa source={require('../../assets/images/Search.png')} style={{resizeMode:'stretch'}}/>
    </Search>

    <Servico>
    <STitulo>Outros Serviços</STitulo>
    <SubTitulo>Ver mais</SubTitulo>
    </Servico>

    <ContainerCard>
      <Card style={{elevation: 5}}>
      <Image source={require('../../assets/images/Pill.png')}/>
      </Card>

      <Card style={{elevation: 5}}>
      <Image source={require('../../assets/images/Syringe.png')}/>
      </Card>

      <Card style={{elevation: 5}}>
      <Image source={require('../../assets/images/Tooth.png')}/>
      </Card>

      <Card style={{elevation: 5}}>
      <Image source={require('../../assets/images/Heartbeat.png')}/>
      </Card>
      
    </ContainerCard>
    <RowTitulo>
      <TituloCard>Medicamentos</TituloCard>
      <TituloCard>Vacinas</TituloCard>
      <TituloCard>Dentista</TituloCard>
      <TituloCard>Cardiologista</TituloCard>
    </RowTitulo>

    <Servico>
    <STitulo>Outros Pacotes</STitulo>
    <SubTitulo>Ver mais</SubTitulo>
    </Servico>

    <ContainerCard>
      <Image source={require('../../assets/images/Pacote1.png')}/>
      <Image source={require('../../assets/images/Pacote2.png')}/>
    </ContainerCard>

   </Background>
  );
}