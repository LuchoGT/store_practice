import { useForm } from 'react-hook-form';
import { InputField } from '../../components/InputField/InputField';
import { AuthTemplate } from '../../template/AuthTemplate';
import './LostPasswordPage.scss';
import { Link } from 'react-router-dom';
import { useState } from "react";
import { IconCircleCheck } from '@tabler/icons-react';

export const LostPasswordPage = () => {
    
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
      } = useForm();
    
      const handleFormSubmit = (data) => {
        console.log(data);
        reset();
        console.log('recuperando contrasenia');
        openLostPassword();
      };

    const [isLostPassword, setIsLostPassword] = useState(false);

    const openLostPassword=()=>{
        setIsLostPassword(!isLostPassword);
    }
  return (
    <AuthTemplate>
        {
            isLostPassword ?
            <main className='login'>
                <div className='lost-password'>
                    <IconCircleCheck/>
                    <h1>Email enviado</h1>
                    <p>Te hemos enviado un correo electrónico con un enlace que te permite establecer una nueva contraseña para tu cuenta.</p>
                    <p>Vuelve al <Link to='/login'>login</Link></p>
                </div>
            </main>
            :
            <main className="login">
                <div className="login-header">
                <h1 className="login-header__title">¿Has olvidado tu contraseña?</h1>
                <h3 className="login-header__new">
                    Te enviaremos un correo electrónico con un enlace que te permitirá establecer una nueva contraseña
                </h3>
                </div>
                <form onSubmit={handleSubmit(handleFormSubmit)} className="form">
                <InputField
                    type="text"
                    label="Email"
                    name="email"
                    register={register}
                    error={errors.email}
                    pattern={{
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Email no válido",
                    }}
                />
                <div className="form-buttons">
                    <button type="submit" className="form-buttons__submit">
                    Confirmar
                    </button>
                    <Link to="/login">
                    <span>Regresa al login</span>
                    </Link>
                </div>
                </form>
            </main>
        }
    </AuthTemplate>
  )
}
