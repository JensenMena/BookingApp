
import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import '../components/styles/RegisterPage.css'

const RegisterPage = () => {

 const {register, handleSubmit, reset, formState: {errors} } = useForm()

 const { createUser } = useAuth()

const submit = data  => {

    createUser(data)
    reset({
        firstName: '',
        lastName: '',
        email: '',
        password:'',
        gender: 'male'
    })

}


  return (
    <article className="register_container">
     <form className="register_form" onSubmit={handleSubmit(submit)}>
        <h2 className="register_title">Register</h2>
        <div className="register_div">
          <label className="register_label">
            <span className="register_name">First Name</span>
            <input className="register_input" {...register( 'firstName', {required: true})}
            aria-invalid = {errors.firstName ? "true" : "false"} type="text" />
             {errors.firstName?.type === "required" && (
                <p className="register_required" role="alert"> ✋📢 Required name...</p>
             )}
          </label>
          <label className="register_label">
            <span className="register_name">Last Name</span>
            <input className="register_input" {...register('lastName', {required: true})}
            aria-invalid={errors.lastName ? "true" : "false"} type="text" />
            {errors.lastName?.type === "required" && (
                <p className="form_alert" role="alert"> ✋📢 Required Last name... </p>
              )}
              
          </label>
          <label className="register_label">
            <span className="register_name">Email</span>
            <input className="register_input" {...register('email', {
              required: "Required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: " 🚧 invalid email address 🚧",
              },
            })} type="email" />
            {errors.email && errors.email.message}
          </label>
          <label className="register_label">
            <span className="register_name">Password</span>
            <input className="register_input" {...register('password', {required: true})}
            aria-invalid={errors.password ? "true" : "false"}  type="password" />
            {errors.password?.type === "required" && (
              <p className="register_required">✋📢 Required password... </p>
            )}
          </label>

          <label className="register_label">
            <span className="register_name">Gender</span>
            <select className="register_input register_select" {...register('gender')}>
              <option className="register_option" value="male">Male</option>
              <option className="register_option" value="female">Female</option>
              <option className="register_option" value="other">Other</option>
            </select>
          </label>
        <button className="register_btn">Submit</button>
        </div>
      </form>
    </article>
  );
};

export default RegisterPage;
