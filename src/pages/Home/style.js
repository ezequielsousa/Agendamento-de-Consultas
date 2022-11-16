import styled from 'styled-components/native'

export const Background = styled.View`
flex:1;
background-color: #FFF;
flex-direction: column;
`;

export const ContainerBar = styled.View`
flex-direction: row;
justify-content: space-between;
margin: 15px;
`;

export const Image = styled.Image`
`;

export const Titulo = styled.View`
left: 15px;
`;

export const Nome = styled.Text`
font-weight: bold;
font-size: 19px;
color: #222;
position: absolute;
left: 110px;
top: 5px;
`;

export const SubTexto = styled.Text`
font-size: 14px;
`;

export const BotaoBanner = styled.TouchableOpacity`

`;

export const Banner = styled.Image`
`;

export const Pesquisa = styled.TextInput`
height: 41px;
border-radius: 10px;
margin: 10px;
width: 90%;
border-width: 1px;
border-color: #ccc;
padding: 10px;
left: 9px;
`;

export const Lupa = styled.Image`
position: absolute;
top: 18px;
left: 300px;
`;

export const Search = styled.View`
flex-direction: row;
`;

export const ContainerCard = styled.View`
flex-direction: row;
`;

export const Servico = styled.View`
flex-direction: row;
justify-content: space-between;
`;

export const STitulo = styled.Text`
font-weight: bold;
font-size: 19px;
color: #222;
margin: 10px;
left: 5px;
`;

export const SubTitulo = styled.Text`
font-weight: bold;
font-size: 14px;
color: #2D7C60;
margin: 12px;
right: 5px;
`;

export const Card = styled.View`
 padding: 19.5px;
 margin: 10px;
 border-radius: 12px;
 background-color: #FFF;
 left: 7px;
`;

export const RowTitulo = styled.View`
 flex-direction: row;
 justify-content: space-between;
`;


export const TituloCard = styled.Text`
 color: #2D7C60;
 font-size: 10px;
 margin-left: 15px;
 margin-right: 23px;
`;