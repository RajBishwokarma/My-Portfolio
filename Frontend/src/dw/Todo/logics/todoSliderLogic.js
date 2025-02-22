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
  if (normalName.length < 3) {
    console.log("At least have 3 characters")
    return
  }
  if (isLogIn) {
    const reqChangeName = await axios.patch('http://localhost:3000/api/user/changename', { email: userEmail, newUsername: normalName})  
    if ( !reqChangeName.data.nameChanged ) {
      console.log("Can't Change name because reqChangeName.data.nameChanged: ", reqChangeName.data.nameChanged );
      return
    } else {
      console.log('reqChangeName: ',reqChangeName.data);
      
    }
  }
  console.log(normalName);
  setUserName(normalName)
  setNewName('')
  return
}
