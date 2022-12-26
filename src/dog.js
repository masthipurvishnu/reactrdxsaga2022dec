import React from "react";

class Dog extends React.Component {

    onRequestDogTrigger = (event) => {
        this.props.parentCallbackOnRequestDog();
        event.preventDefault(); // DO WE REALLY NEED THIS here?
    }
    render() {
        const { fetching, dog, parentCallbackOnRequestDog, error } = this.props;

        return (
            <>
                <img src={dog} className='dog-img' alt='logo' />
                <h1 className='App-title'>Welcome to Dog Saga</h1>
                {dog ? (
                    <p className='App-intro'>Keep clicking for new digs</p>
                ) : (
                    <p className='App-intro'>Replace the react icon with a dog!</p>
                )}

                {fetching ? (
                    <button disabled>Fetching...</button>
                ) : (
                    <button onClick={this.onRequestDogTrigger}>Request a Dog</button>
                )}
                {error && <p style={{ color: 'red' }}>Uh oh - something wend wrong..1</p>}
            </>
        )
    }
}
export default Dog