import { Color, getRandomColor } from "./module1";

const module2Fun = () => {
    const x = getRandomColor()
    console.log('module2', x);
    var c2 = new Color()

    return x
}

export default module2Fun