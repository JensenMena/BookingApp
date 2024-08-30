import { useForm } from "react-hook-form"
import useAuth from "../hooks/useAuth"
import '../components/styles/LoginPage.css'
import { useEffect, useState } from "react"


const LoginPage = () => {

     const {handleSubmit, register, reset}=useForm()
     const {loginUser} = useAuth()
     
     const submit = data => {
       
       loginUser(data)
       
       reset({
         email: '',
         password: ''
        })
      }


    /* Aquí estoy accediendo al local storage para capturar el usuario en un JSON*/
    const [user, setUser] = useState({})
     useEffect( () => {
        const userFromLocalStorage = localStorage.getItem('userLogged')

        if(userFromLocalStorage){

          const parsedUser = JSON.parse(userFromLocalStorage)
          setUser(parsedUser)
        }

     }, [])

     const handleDeleteLocalStore = () => {
      
        localStorage.removeItem('token')
        localStorage.removeItem('userLogged')

     }

     /* Éso lo hice con ayuda del ChapGpt */

  return (
    <section className="login_container_phader">
    {

      localStorage.getItem('token')

     ?
     (
     <div className="login_user_registered">

        <img className="login_user_registered_img" src="/male.png" alt="/male.png" />
       
        <h3 className="login_user_name"><span>Welcome,</span><span className="login_user_name_data">{user.firstName} {user.lastName}</span></h3>

        <button onClick={handleDeleteLocalStore} className="login_user_btn">Logout</button>
     </div> 
     )

    :

    <div className="login_container">
        <div className="login_img_title">
            <img className="login_img" src="/user.png" alt="/user.png" />
        </div>
        <form className="login_form" onSubmit={handleSubmit(submit)}>
        <h2 className="login_form_title">USER</h2>

        <div className="login_div_inputs">
          <label className="login_form_label">
            <span className="login_form_span">Email</span>
            <input className="login_form_input" {...register('email')} type="email" />
          </label>
          <label className="login_form_label">
            <span className="login_form_span">Password</span>
            <input className="login_form_input" {...register('password')} type="password" />
          </label>
        </div>

        <button className="login_btn_submit">Submit</button>
      </form>
    </div>

   
    }
    </section>
  )
}

export default LoginPage