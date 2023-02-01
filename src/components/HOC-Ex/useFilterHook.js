import { useEffect, useState } from "react"

const useFilterHook = (entity) => {
    const [items, setItems] = useState()
    const [filteredItems, setfilteredItems] = useState([])
    const [term, setTerm] = useState('')
    useEffect(() => {
        let url = 'https://jsonplaceholder.typicode.com/users'
        if (entity === 'Todo') {
            url = 'https://jsonplaceholder.typicode.com/todos'
        }
        const fetchData = async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/todos')
            let data = await res.json()
            data = data.slice(0, 10)
            setItems(data)
            setfilteredItems(data)
            return data
        }
        fetchData()
    }, [])

    const handleChange = (e) => {
        setTerm(e.target.value)
        // const filteredItems = todos.filter(item => (item.title.indexOf(term) || item.title.indexOf(e.target.value)))
        const fItems = items.filter(item => (item.title.indexOf(e.target.value) >= 0))
        setfilteredItems(fItems)
    }

    return [term, items, filteredItems, handleChange]
}
export default useFilterHook