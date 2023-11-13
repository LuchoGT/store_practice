import { FieldError } from "react-hook-form";
import './InputField.scss'
interface InputFieldProps {
    label: string;
    name: string;
    register: Function;
    error?: FieldError;
    pattern?: { value: RegExp; message: string };
    type?:string;
    validate?:Record<string, (value:string) => boolean | string>;
  }
  

export const InputField = ({label,name,register,error,pattern,type,validate}:InputFieldProps) => {
  
    return (
    <div className="input-field">
        <label className="input-field__label">{label}</label>
        <input
            className={`input-field__input ${error?.message ? 'input-field__input--error': ''}`}
            placeholder={`${label}`}
            {...register(name,
                {
                    required: `${label} requerido`,
                    pattern: pattern ? pattern : undefined,
                    validate:validate
                }
            )}
            type={type}
            required
        />
        {error && <span className="input-field__alert">{error.message}</span>}
    </div>
  )
}
