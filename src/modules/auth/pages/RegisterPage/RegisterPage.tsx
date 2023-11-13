import { Link } from "react-router-dom";
import { AuthTemplate } from "../../template/AuthTemplate";
import { InputField } from "../../components/InputField/InputField";
import { useForm } from "react-hook-form";

export const RegisterPage = () => {

    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
        watch
      } = useForm();
    
      const handleFormSubmit = (data) => {
        console.log(data);
        reset();
        console.log('usuario creado');
        
      };

      const password = watch("password", "");
  return (
    <AuthTemplate>
      <main className="login">
        <div className="login-header">
          <h1 className="login-header__title">Crea tu cuenta</h1>
          <h3 className="login-header__new">
            Ya tienes una cuenta?{" "}
            <Link to="/login">
              <span className="login-header__new--create">Ingresa</span>
            </Link>
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
          <InputField
            type="password"
            label="Password"
            name="password"
            register={register}
            error={errors.password}
          />
          <InputField
            type="password"
            label="Confirmar Password"
            name="ConfirmarPassword"
            register={register}
            error={errors.ConfirmarPassword}
            validate={{
              custom:(value)=>value===password || "Las contraseñas no coinciden",
            }} 
          />
          <div className="form-buttons">
            <button type="submit" className="form-buttons__submit">
              Crea tu cuenta
            </button>
          </div>
        </form>
      </main>
    </AuthTemplate>
  );
};
