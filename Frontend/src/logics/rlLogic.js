
import axios from 'axios'

// Sign Up
export const registerLogic = async(event,navigate,setLoading) => {
    event.preventDefault()
    setLoading(true)
    try {
        const rUsername = document.getElementById('rUsername')
        const rPassword = document.getElementById('rPassword')
        const rEmail = document.getElementById('rEmail')
    
        if (!rUsername || !rPassword || !rEmail) { //checking the data
            alert('username, password and email are required for signing up!');            
            return setLoading(false)
        }
        if (rUsername.value.endsWith(' ') || rPassword.value.endsWith(' ') || rEmail.value.endsWith(' ')) {
            setLoading(false)
            alert('No space allowed at the end of the inputs!')
            return;
        }
        const pData = { // pData = preparing data
            rUsername: rUsername.value,
            rPassword: rPassword.value,
            rEmail: rEmail.value
        }
        // requesting Call
        const resNewUser = await axios.post('https://my-portfolio-b9tc.onrender.com/api/user/register', {reqData:pData})
        alert(resNewUser.data.msg)
        navigate('/login')
    } catch (error) {
        alert('Error while creating New Account: ',error.response.data.msg)
    }
    setLoading(false)
}
// login
export const loginLogic = async(event, navigate, setIsLogIn, setUserName, setUserEmail, setLoading) => {
    event.preventDefault()
    setLoading(true)
    const lPassword = document.getElementById('lPassword')
    const lEmail = document.getElementById('lEmail')

    if (!lPassword || !lEmail) { //checking the data
        setLoading(false)
        return alert('Error while processing data. Please check your email and password.')
    }
    const pData = { // pData = preparing data
        lPassword: lPassword.value,
        lEmail: lEmail.value
    }
    try {
        // requesting Call
        const lLogin = await axios.post('https://my-portfolio-b9tc.onrender.com/api/user/login', {reqData:pData})
        
        navigate('/todo')
        alert(lLogin.data.msg)
        setIsLogIn(true)
        setUserName(lLogin.data.username)
        setUserEmail(lLogin.data.email)
    } catch (error) {
        alert("error while logging in: ", error.response.data.msg)
    }       
    setLoading(false)
}
// Logout
export const logoutLogic = (setIsLogIn, setUserName, setUserEmail) => {
    setIsLogIn(false)
    setUserName('Guest')
    setUserEmail('')
}
  
  