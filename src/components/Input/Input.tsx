import { StyledInput } from "./Input.style"

interface InputProps {
    type: string;
    id: string;
    name: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string | undefined;
  };

export const Input = ({ type, id, name, onChange, ...rest }: InputProps) => {
    return (
        <>
            {/* <label htmlFor={id}>{label}</label> */}
            <StyledInput 
                type={type}
                id={id}
                name={name}
                onChange={(e) => onChange(e)}
                {...rest}
            />
        </>
    )
}