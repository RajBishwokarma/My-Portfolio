
import axios from 'axios'

// Sign Up
export const registerLogic = async(event,navigate,setLoading) => {
    event.preventDefault()
    setLoading(true)
    try {
        const rUsername = document.getElementById('rUsername')
        const rPassword = document.getElementById('rPassword')
        const rEmail = document.getElementById('rEmail')
    
        if (rUsername && rPassword && rEmail) { //checking the data

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
            const resNewUser = await axios.post('https://my-portfolio-b9tc.onrender.com/api/user/register', pData)
            alert(resNewUser.data.msg)
            navigate('/login')
        }
        setLoading(false)
    } catch (error) {
        setLoading(false)
        console.log('Error while creating New Account: ',error)
        alert(error.response.data.msg)
    }
}
// login
export const loginLogic = async(event, navigate, setIsLogIn, setUserName, setUserEmail, setLoading) => {
    event.preventDefault()
    setLoading(true)
    try {
        const lPassword = document.getElementById('lPassword')
        const lEmail = document.getElementById('lEmail')
    
        if (lPassword && lEmail) { //checking the data
            const pData = { // pData = preparing data
                lPassword: lPassword.value,
                lEmail: lEmail.value
            }
            // requesting Call
            const lLogin = await axios.post('https://my-portfolio-b9tc.onrender.com/api/user/login', pData)
            setLoading(false)
            alert(lLogin.data.msg)
            if (lLogin.data.passwordIs) {
                setIsLogIn(true)
                setUserName(lLogin.data.username)
                setUserEmail(lLogin.data.email)
                return navigate('/todo')
            }
        } else {
            setLoading(false)
            alert('Error while processing data. Please check your email and password.')
        }
    } catch (error) {
        setLoading(false)
        alert(error.response.data.msg)
    }
}
// Logout
export const logoutLogic = (setIsLogIn, setUserName, setUserEmail) => {
    setIsLogIn(false)
    setUserName('Guest')
    setUserEmail('')
}
  
  