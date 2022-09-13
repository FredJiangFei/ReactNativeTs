import jwtDecode from 'jwt-decode'
import AsyncStorage from '@react-native-async-storage/async-storage';

const key = 'authToken'

const storeToken = (authToken: string) => AsyncStorage.setItem(key, authToken)
const getToken = () => AsyncStorage.getItem(key)
const removeToken = () => AsyncStorage.removeItem(key)

const getUser = async () => {
  const token = await getToken()
  return token ? jwtDecode(token) : null
}

export default {
  storeToken,
  getUser,
  getToken,
  removeToken,
}
