import React, { useState } from "react";

const detectHover1 = (BaseComponent) => {

    return (props) => {
        const [hovered, setHovered] = useState(false)
        return (
            <div
                onMouseOver={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                <BaseComponent hovered={hovered} {...props} />
            </div>
        )
    }
}
// Here we are using the render props (props.render)
const DetectHover2 = (props) => {
    const [hovered, setHovered] = useState(false)
    return (
        <div
            onMouseOver={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {props.render(hovered, props.value)}
        </div>
    )
}
export { detectHover1, DetectHover2 }

/*

comments = withSubscription(
    CommentsList,
    () => comments = DataSource.getComments()
) => {

    selectSource = () =>{
     commentsList= DataSource.getComments()
    }
}
blogpost = withSubscription(abc, (props) => {
        blockposts = DataSource.getBlogPosts(this.props.id)
    }
}

const withSubscription = (WrappedComponent, selectSource) => {
    return class extends Ract.Component {
        constructor(props) {
            super(props)
            this.state = {
                dataSource:  
            }
        }
        componentDidMount() {
            dataSource.addEventListener(this.handleChange)
        }
        componentDidUpdate() {
            dataSource.updateEventListener(this.handleChange)
        }
        componentDidUnmount() {
        dataSource.removeEventListener(this.handleChange)
        }
        handleChange() {
            this.setState({
            data: selectSource
            })
        }
        render() {
            <WrappedComponent data={this.state.data} {...props} />
        }
    }
    export default withSubscription()

    }
}



*/