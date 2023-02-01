import React from "react";

const HOCFilterComponent = (Component, entity) => {

    return class extends React.Component {
        state = {
            term: '',
            items: [],
            filteredItems: []
        }
        constructor(props) {
            super(props)
            this.handleChange = this.handleChange.bind(this)
        }
        componentDidMount() {
            let url = 'https://jsonplaceholder.typicode.com/users'
            if (entity === 'todo') {
                url = 'https://jsonplaceholder.typicode.com/todos'
            }
            const fetchData = async () => {
                const res = await fetch(`https://jsonplaceholder.typicode.com/${entity}`)
                let data = await res.json()
                data = data.slice(0, 10)

                this.setState({
                    items: data,
                    filteredItems: data
                })
            }
            fetchData()
        }
        componentDidUpdate() {
        }
        handleChange(e) {
            const fItems = this.state.items.filter(item =>
            (entity === 'todos' ?
                item.title.indexOf(e.target.value) >= 0 :
                item.name.indexOf(e.target.value) >= 0
            ))
            this.setState({
                term: e.target.value,
                filteredItems: fItems
            })
        }
        render() {
            const { term, filteredItems } = this.state
            return (
                <>
                    <Component
                        term={this.state.term}
                        items={this.state.items}
                        filteredItems={this.state.filteredItems}
                        handleChange={this.handleChange}
                    />

                    <input value={term} onChange={this.handleChange} />
                    {filteredItems?.length > 0 ?
                        filteredItems.map((item, i) => {
                            return (
                                <div key={i}>{item?.name || item?.title}</div>
                            )
                        })

                        :
                        <>{'No users list available'}</>
                    }
                </>
            )
        }
    }
}
export default HOCFilterComponent