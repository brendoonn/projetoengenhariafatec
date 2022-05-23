import '../styles/auth.scss'
import googleIconImg from '../assets/images/google-icon.svg'
import logoPapelaria from "../assets/images/logoCaracas.png"
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import axios from 'axios'
import { Index } from '../Backend/index'


export function Home() {

  const handleClickButton = () =>{ 
    console.log("rodando1")
    const gett= Index();
    
    
  }
  const navigate = useNavigate()
  const {signInWithGoogle, user} = useAuth()

  async function handleLogin() {
    if (!user) {
        await signInWithGoogle()
    }        
    navigate('/main')

}

  
  return (
    <div id='page-auth'>
      <main>
        <div className="main-container">
          <img className="logoPapelaria" src={logoPapelaria} alt="Papelaria Caraca`s" />
          <div>
              <br/>
              <input 
                type= "text" 
                name="nameLogin" 
                //onChange={handleChangeValues}
              />
              <input 
                type= "text" 
                name="password"
                //onChange={handleChangeValues}
              />
              <br />
              <button className='creat-login'onClick={() => handleClickButton()}>
                Entrar
              </button>

          
        </div>
        
          <button onClick={() => handleClickButton()} className="create-login">
          
              Entrar no sistema
          </button> 
        
          <button onClick={() => handleLogin()} className="create-login">
              <img src={googleIconImg} alt="Logo Google" />
              Faça Login com o Google
          </button> 
        </div>
      </main>
    </div>
  )
}
