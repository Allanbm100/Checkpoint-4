import { useState } from "react";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import { Items } from "../../components/Items/Items";
import { Layout } from "../../components/Layout/Layout";

interface Item {
    id: number;
    name: string;
}

export default function List() {
    const [Item, setItem] = useState<string>();
    const [ListItem, setListItem] = useState();
    const [HasAdded, setHasAdded] = useState<boolean>();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setItem(event.target.value);
    };

    const handleClick = () => {
        setHasAdded(true);

    const instanceItem = {
        id: Math.random(),
        name: Item
    }
    };

    return (
        <Layout>
            <h1>Nova Lista</h1>
            <form>
                <label htmlFor="add">Adicionar Item</label>
                <Input
                    type="text"
                    id="add"
                    name="add"
                    onChange={handleChange}
                    value={Item}
                />
                <Button type="button" onClick={handleClick}></Button>
            </form>

            <ul>
                {
                  ListItem.map((item) => (
                    <li key={item.id}> {/* Esse 'key' serve pq precisamos definí-lo caso citemos um .map */}
                      {item.nome}
                    </li>
                  ))}
              </ul>


            <Items></Items>
        </Layout>
    )
} 