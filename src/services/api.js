import axios from 'axios';

const base = axios.create({
    baseURL: "https://agendamento-consulta-92354-default-rtdb.firebaseio.com/",
})


export async function save () {
    try {
      await axios.post(`${FIREBASE_URL}/usuarios.json`, {nome: 'henrique'})
      Alert.alert('informação', 'usuário reistrado com sucesso')
       navigation.navigate('Home')
    } catch (error) {
      Alert.alert('erro', 'erro ao registrar um usuário')
    }

  }