//En realidad este es el registro

import '../../components/noauntenticate/Login.css'
import letters from '../../assets/name.png';
import logoPrincipal from '../../assets/study.jpg';


const Login = ({loginWithGoogle}) => {
    return ( 
       <div>
        <div className='login-container' id='logContainer'>
          <div id='left'> 
          <img src={letters} alt='letters' id='lettersLPDK'></img>
        <img src={logoPrincipal} alt='logoPrincipal' id='logoPink'></img>
          </div>
          <div id='container'>
            <h1> Registrate </h1>
        <form className='form'>
        <input
                  name='email'
                  type='text'
                  className='formLogin'
                  id='inputEmail'
                  placeholder='example@example.com'
                  required
                />
                <div>
        <input
                  name='password'
                  type='password'
                  className='formLogin'
                  placeholder='Password123?'
                  required
                />
                </div>
                <div>
<button type='submit' className='buttonLogin'>
                Log in
              </button> </div>
              <button onClick = {()=>{
        loginWithGoogle()
    }}> Login with Google</button>
        </form>
    <p>¿Ya tienes cuenta? Inicia Sesión</p>
    </div>
      </div>
    </div>);
}

export default Login;