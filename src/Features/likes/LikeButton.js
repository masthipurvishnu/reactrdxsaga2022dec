//https://app.codility.com/demo/results/training37XVCN-Z9U/
/*
Build a "like button" component using React 16. The component should be the default export (use export default).

Requirements:
1. There should be a like button:

The content of the like button should be in the following format: "Like | 100", where 100 is the total number of likes.
It should have a "like-button" class.
Wrap the number of likes in a span with a "likes-counter" class.
The initial number of likes in the counter should be 100.
2. Users can add a like. By clicking the button:

The number of likes should increase by one.
Like button should have "liked" class in addition to the "like-button" class (you can use the classnames tool for that).
3. Users can undo their like by clicking again on the button:

The counter should decrease by one.
"liked" class should be removed.
Assessment/Tools:
Only two imports are allowed: react (v16.8.6) and classnames (v2.2.5). Both are at the top of the starting code.
Use the animation below as a reference for your solution.
Design/styling is not assessed and will not affect the score. You should focus only on implementing the requirements.
The "Preview" tab will display your component. You can use it for testing purposes.
*/
import cx from "classnames";
import { Component } from "react";

export default class LikeButton extends Component {
  constructor() {
    super();
    this.state = { counter: 100, liked: false };
  }
  onBtnClick = () => {
    if (!this.state.liked) {
      this.setState({ counter: this.state.counter + 1, liked: true });
    } else {
      this.setState({ counter: this.state.counter - 1, liked: false });
    }
  };
  render() {
    return (
      <>
        <div>
          <h2>Like Button</h2>
          <span className="likes-counter">{this.state.counter}</span>
          <br />
          <button
            id="like"
            onClick={this.onBtnClick}
            className={`like-button${this.state.liked ? " liked" : ""}`}
          >
            {`Like | ${this.state.counter}`}
          </button>
        </div>
        <style>{`
                    .like-button {
                        font-size: 1rem;
                        padding: 5px 10px;
                        color:  #585858;
                        border: '1px solid red'
                    }
                   .liked {
                        font-weight: bold;
                        color: #1565c0;
                   }
                `}</style>
      </>
    );
  }
}
