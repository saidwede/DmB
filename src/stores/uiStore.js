import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUiStore = defineStore('ui-store', () => {
  const toastMessage = ref("")
  const toastDisplayed = ref(false)
  const toastType = ref("info")

  document.addEventListener("click", () => {
    toastDisplayed.value = false
    toastMessage.value = ""
    toastType.value = "info"
  })
  function displayToast(msg, type = "info", time = 3000){
    toastDisplayed.value = true
    toastMessage.value = msg
    toastType.value = type
    if(time > 0){
      setTimeout(() => {
        toastDisplayed.value = false
        toastType.value = "info"
      }, time);
    }else{
      toastDisplayed.value = true
    }
  }
  return { toastType, toastMessage, toastDisplayed, displayToast }
})
