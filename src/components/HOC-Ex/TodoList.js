import { SettingsRemote } from "@mui/icons-material";
import React, { useEffect, useState } from "react";

const TodoList = () => {
    const [term, setTerm] = useState('')
    const [todos, setTodos] = useState([])
    const [filteredItems, setfilteredItems] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/todos')
            let data = await res.json()
            data = data.slice(0, 10)
            setTodos(data)
            setfilteredItems(data)
            return data
        }
        fetchData()
    }, [])
    const handleChange = (e) => {
        setTerm(e.target.value)
        // const filteredItems = todos.filter(item => (item.title.indexOf(term) || item.title.indexOf(e.target.value)))
        const fItems = todos.filter(item => (item.title.indexOf(e.target.value) >= 0))
        setfilteredItems(fItems)
    }
    return (
        <>
            <h3>Regular - Todo List</h3>
            <div>{'Todos count: '} {filteredItems?.length}</div>
            <input value={term} onChange={handleChange} />
            {filteredItems?.length > 0 ?
                filteredItems.map((item, i) => {
                    return (
                        <div key={i}>{item?.title}</div>
                    )
                })
                :
                <>'Todo list not avaialable'</>}
        </>
    )
}
export default TodoList