import { useState } from "react";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import { Items } from "../../components/Items/Items";
import { Layout } from "../../components/Layout/Layout";
import { StyledForm } from "./List.style";

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
            <StyledForm>
                <label htmlFor="add">Adicionar Item</label>
                <Input
                    type="text"
                    id="add"
                    name="add"
                    onChange={handleChange}
                    value={Item}
                />
                <Button type="button" onClick={handleClick}></Button>
            </StyledForm>

            <ul>
                {ListItem.length > 0 && ListItem.map((item) => (
                    <li key={item.id}>
                        {item.name}
                    </li>
                ))}
            </ul>


            <Items></Items>
        </Layout>
    )
} 