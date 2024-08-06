import { ref } from 'vue'
import { defineStore } from 'pinia'
import router from '../router/index'
import axios from '../lib/axiosInstance'

export const useAuthUserStore = defineStore('authUser', () => {
  const user = ref(false);
  const userLoading = ref(true);
  const dayLeft = ref(0);
  try {
    user.value = JSON.parse(localStorage.getItem('user') || false)
  } catch (error) {
    localStorage.removeItem('user')
    user.value = false
  }

  function setUser(data){
    user.value = data;
    localStorage.setItem("user", JSON.stringify(data))
  }
  function checkSubscription(){
    if(user){
      axios.post("subscription-days-left", {user_id: user.value.id}, {withCredentials: true})
      .then((response) => {
          dayLeft.value = response.data.days_left
      })
    }
    
  }
  function login({email, password}){
    userLoading.value = true
    return axios.post("login",{email, password})
    .then((response) => {
      setUser(response.data.user)
      return response.data.user
    }).catch((erro) => {
      throw erro;
    }).finally(() => {
      userLoading.value = false
    })
  }
  function register({
    first_name,
    last_name,
    email,
    password,
    date_of_birth,
    sex
  }){
    userLoading.value = true
    return axios.post("register",
      {
        first_name,
        last_name,
        email,
        password,
        date_of_birth,
        sex
      }
    ).then((response) => {
      setUser(response.data.user);
      return user.value
    }).catch((erro) => {
      throw erro;
    }).finally(() => {
      userLoading.value = false
    })
  }
  async function logout(){
    localStorage.removeItem("user")
    user.value = false
    return axios.get("logout");
  }

  async function getUserInfos(){
    user.value = JSON.parse(localStorage.getItem("user") || null)
    try {
      let response = await axios.post("user-info")
      setUser(response.data.user)
    } catch (error) {
      if(error.response.status == 401){
        localStorage.removeItem("user")
        user.value = false
      }
    }
  }
  getUserInfos()
  return {
    user,
    userLoading,
    dayLeft,
    getUserInfos, 
    login,
    register,
    logout, 
    setUser, 
    checkSubscription
  }
})
