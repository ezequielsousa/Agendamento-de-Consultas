import React from 'react';
import {
  Background,
  BotaoBanner,
  Image,
  Banner,
  ContainerCard, 
  Card, 
  Servico, STitulo, SubTitulo, CardTexto, TextoMais, Pesquisa, ContainerCrono, BotaoText, Botao} from './style';
  

export default function Agendamento() {

 return (
   <Background>

    <BotaoBanner>
    <Banner source={require('../../assets/images/Banner.png')}/>
    </BotaoBanner>

    <Servico>
    <STitulo>Data</STitulo>
    <TextoMais>Ver mais</TextoMais>
    </Servico>

    <ContainerCard>

      <Card>
      <CardTexto>18</CardTexto>
      <SubTitulo>Jan</SubTitulo>
      </Card>

      <Card>
      <CardTexto>19</CardTexto>
      <SubTitulo>Jan</SubTitulo>
      </Card>

      <Card>
      <CardTexto>20</CardTexto>
      <SubTitulo>Jan</SubTitulo>
      </Card>

      <Card>
      <CardTexto>21</CardTexto>
      <SubTitulo>Jan</SubTitulo>
      </Card>

      <Card>
      <CardTexto>22</CardTexto>
      <SubTitulo>Jan</SubTitulo>
      </Card>

      <Card>
      <CardTexto>23</CardTexto>
      <SubTitulo>Jan</SubTitulo>
      </Card>

    </ContainerCard>

    <Servico>
    <STitulo>Cronograma</STitulo>
    </Servico>

    <ContainerCrono>

    <Pesquisa
    placeholder='Início'
    autoCorrect={false}
    underlineColorAndroid="transparent"
    />

    <Image source={require('../../assets/images/Group.png')} style={{position: 'absolute', top: 25, left: 135}} />

    <Pesquisa
    placeholder='Fim'
    autoCorrect={false}
    underlineColorAndroid="transparent"
    />

    <Image source={require('../../assets/images/Group.png')} style={{position: 'absolute', top: 25, left: 300}} />
    </ContainerCrono>

    <Botao>
      <BotaoText>Confirmar</BotaoText>
    </Botao>

   </Background>
  );
}