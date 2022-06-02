import axios from 'axios'

// criando constato com url da api
export const api = axios.create({
  baseURL: 'https://graphome.herokuapp.com/'
})

//método do cadastro de usuário
export const cadastroUsuario = async (url:any, dados:any, setDado:any) => {
  const resposta = await api.post(url, dados)
  setDado(resposta.data)
}

// método do login
export const login = async (url: any, dados: any, setToken: any) => {
  const resposta = await api.post(url, dados)
  setToken(resposta.data.token)
}
