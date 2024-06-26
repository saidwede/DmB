import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import router from '../router/index'
import axios from "axios"

export const useAuthUserStore = defineStore('authUser', () => {
  axios.defaults.baseURL = "https://api.dahomeybook.com";
  const user = ref(null)
  try {
    user.value = ref(JSON.parse(localStorage.getItem('user') || false))
  } catch (error) {
    localStorage.removeItem('user')
    user.value = false
  }
  
  const dayLeft = ref(0)
  console.log(user.value)

  function setUser(data){
    user.value = data
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
  async function logout(){
    await axios.get("logout");
    localStorage.removeItem("jwt_token")
    localStorage.removeItem("user")
    user.value = false
    router.push("/connexion")
  }

  async function getUserInfos(){
    await axios.post(
      "user-info", 
      {
        jwt_token: localStorage.getItem("jwt_token")
      },
       {withCredentials: true})
    .then(response => {
      setUser(response.data.user)
    })
  }
  getUserInfos()
  return {getUserInfos, logout, setUser, user, checkSubscription, dayLeft}
})
