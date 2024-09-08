import { AiOutlineHome, AiOutlineFileAdd } from "react-icons/ai";
import { GoPerson } from "react-icons/go";
import { StyledMenu, StyledMenuItem, StyledWrapperMenu } from "./Menu.style";
import { Link } from "react-router-dom";

export const Menu = () => {
    return (
        <StyledMenu>
            <StyledWrapperMenu>
                <StyledMenuItem>
                    <AiOutlineHome size="1.5rem" color="#2676d1" />
                    <Link to="/">Home</Link>
                </StyledMenuItem>
                <StyledMenuItem>
                    <AiOutlineFileAdd size="1.5rem" color="#2676d1" />
                    <Link to="/lista">Nova Lista</Link>
                </StyledMenuItem>
                <StyledMenuItem>
                    <GoPerson size="1.5rem" color="#2676d1" />
                    <Link to="/perfil">Perfil</Link>
                </StyledMenuItem>
            </StyledWrapperMenu>
        </StyledMenu>
    );
};