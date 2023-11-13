import { useForm } from "react-hook-form"
import { InputField } from "../../components/InputField/InputField";
import './FormAuth.scss'
import { Link } from "react-router-dom";
export const FormAuth = () => {
    const {register,formState:{errors},handleSubmit,reset} = useForm();


    const handleFormSubmit=(data)=>{
        console.log(data);
        reset()
    }
  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="form">
        <InputField 
            type="text" 
            label="Email" 
            name="email" 
            register={register} 
            error={errors.email} 
            pattern={{
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: 'Email no válido',
            }}
        />
        <InputField type="password" label="Password" name="password" register={register} error={errors.password}/>
        <div  className="form-buttons">
            <button type="submit" className="form-buttons__submit">Iniciar sesión</button>
            <Link to=''>
                <span>Has olvidado tu contraseña ?</span>
            </Link>
        </div>
    </form>
  )
}
