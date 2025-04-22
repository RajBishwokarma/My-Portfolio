import axios from "axios"

// TODO Slider Logic ( todoSL )
export const todoSL = ()=>{
  const todoSider = document.getElementById('js-TodoSlider')
  if (todoSider) {
    if (todoSider.style.left === `0%`  ) {
      todoSider.style.left = `-100%`  
    } else {
      todoSider.style.left = `0%` 
    }
  }
}
// Rename Logic 
export const logicNameEditBtn = async (newName, setNewName, setNameEditPopup, setUserName, isLogIn, userEmail)=>{
  setNameEditPopup(false)
  const normalName = newName.trim()
  if (normalName.length < 2) {
    return alert("At least have 2 characters")
  }
  if (isLogIn) {
    try {
      await axios.patch('https://my-portfolio-b9tc.onrender.com/api/user/changename', { _Route: "Name Change!", reqData:{userEmail, newName: normalName}})  
    } catch (error) {
      alert("error while changing Name: "+error.response.data.msg);
    }
  }
  setUserName(normalName)
  setNewName('')
  return
}
