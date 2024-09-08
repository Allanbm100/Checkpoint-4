import { useState } from "react";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import { Items } from "../../components/Items/Items";
import { Layout } from "../../components/Layout/Layout";
import { StyledForm, StyledLabel } from "./List.style";
import { StyledButton, StyledItem, StyledLine } from "../../components/Items/Items.style";

interface Item {
    id: number;
    name: string;
}

export default function List() {
    const [Item, setItem] = useState<string>("");
    const [ListItem, setListItem] = useState<Item[]>([]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setItem(event.target.value);
    };

    const handleClick = () => {
        const newItem = {
            id: Math.random(),
            name: Item
        }

        setListItem([...ListItem, newItem]);
        setItem("");
    };

    return (
        <Layout>
            <h1>Nova Lista</h1>
                <StyledLabel htmlFor="add">Adicionar Item</StyledLabel>
            <StyledForm>
                <Input
                    type="text"
                    id="add"
                    name="add"
                    onChange={handleChange}
                    value={Item}
                    placeholder="Digite o item desejado"
                />
                <Button type="button" onClick={handleClick}></Button>
            </StyledForm>

            <ul>
                {ListItem.length > 0 && ListItem.map((item) => (
                    <>
                        <StyledItem key={item.id}>
                            <StyledButton />
                            <a>{item.name}</a>
                        </StyledItem>
                        <StyledLine />
                    </>
                ))}
            </ul>


            <Items></Items>
        </Layout>
    )
} 