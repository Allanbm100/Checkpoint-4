import { StyledInput } from "./Input.style"

interface InputProps {
    type: string;
    id: string;
    name: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string | undefined;
    placeholder: string;
  };

export const Input = ({ type, id, name, onChange, placeholder, ...rest }: InputProps) => {
    return (
        <>
            {/* <label htmlFor={id}>{label}</label> */}
            <StyledInput 
                type={type}
                id={id}
                name={name}
                onChange={(e) => onChange(e)}
                placeholder={placeholder}
                {...rest}
            />
        </>
    )
}