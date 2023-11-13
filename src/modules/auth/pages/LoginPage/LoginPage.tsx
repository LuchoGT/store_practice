import { Link } from "react-router-dom";
import { AuthTemplate } from "../../template/AuthTemplate";
import "./LoginPage.scss";
import { useForm } from "react-hook-form";
import { InputField } from "../../components/InputField/InputField";

export const LoginPage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const handleFormSubmit = (data) => {
    console.log(data);
    reset();
    console.log('usuario logueado');
    
  };

  return (
    <AuthTemplate>
      <main className="login">
        <div className="login-header">
          <h1 className="login-header__title">Iniciar sesión</h1>
          <h3 className="login-header__new">
            Eres nuevo?{" "}
            <Link to="/register">
              <span className="login-header__new--create">
                Crear una cuenta
              </span>
            </Link>
          </h3>
        </div>
        <div className="login-main">
          <div className="login-main__container">Crear cuenta con Google</div>
          <div className="login-main__container">Crear cuenta con Facebook</div>
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
          <div className="form-buttons">
            <button type="submit" className="form-buttons__submit">
              Iniciar sesión
            </button>
            <Link to="/lost-password">
              <span>Has olvidado tu contraseña ?</span>
            </Link>
          </div>
        </form>
      </main>
    </AuthTemplate>
  );
};
