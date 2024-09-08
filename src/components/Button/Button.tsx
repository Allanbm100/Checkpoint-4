import { RxPlusCircled } from "react-icons/rx";
import { StyledButton } from "./Button.style";

interface ButtonProps {
    type: "button" | "submit" | "reset" | undefined;
    onClick: () => void
}

export const Button = ({ type, onClick }: ButtonProps) => {
    return (
        <StyledButton type={type} onClick={onClick} >
            <RxPlusCircled size={30}/>
        </StyledButton>
    )
}