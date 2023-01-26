import React, { useEffect, useState } from "react";
import fetchCats from "./request";
const CatsFComponent = () => {
    const [items, setItems] = useState(null)
    const [selectedItem, setSelectedItem] = useState(0)
    useEffect(() => {
    }, [selectedItem, items])

    return (
        <>
            <h1>Cats Lists1</h1>
            <button onClick={() => {
                fetchCats().then(r => {
                    setItems(r)
                    setSelectedItem(r[0].name)
                })
            }}>Get Cats</button>
            <select onChange={(e) => setSelectedItem(e.target.value)}>
                {items?.length > 0 ?
                    items.map((item, i) => <option key={i} >{item.name}</option>)
                    : <option key={'2323'}>Cats not avaialable</option>
                }
            </select>

            <span>{selectedItem}</span>
            <span>{items && JSON.stringify(items.filter(v => v.name === selectedItem))}</span>
        </>
    )
}
export default CatsFComponent