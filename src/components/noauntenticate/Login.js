const Login = ({loginWithGoogle}) => {
    return ( <div>
        <div className='login-container'>
            <img src='../images/background.svg' alt='title' />
        <h1> LPDK NOTES </h1>
        <form className='form'>
        <input
                  name='email'
                  type='text'
                  className='formLogin'
                  id='inputEmail'
                  placeholder='example@example.com'
                  required
                />
        <input
                  name='password'
                  type='password'
                  className='formLogin'
                  placeholder='Password123?'
                  required
                />
                <div>
<button type='submit' className='buttonLogin'>
                Log in
              </button> </div>

        <button onClick = {()=>{
        loginWithGoogle()
    }}> Login with Google</button> </form>
    </div>
    </div>);
}

export default Login;