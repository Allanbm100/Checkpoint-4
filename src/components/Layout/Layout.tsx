import { Menu } from "../Menu/Menu"
import { StyledLayout, StyledTitle } from "./Layout.style"

interface LayoutProps {
    children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
    return (
        <StyledLayout>
            <StyledTitle>{children}</StyledTitle>
            <Menu />
        </StyledLayout>
    )
}