
export class Color {
    constructor(name1, code1) {
        this.name2 = name1;
        this.code2 = code1;
    }
}

const allColors = [
    new Color('brightred', '#E74C3C'),
    new Color('soothingpurple', '#9B59B6'),
    new Color('skyblue', '#5DADE2'),
    new Color('leafygreen', '#48C9B0'),
    new Color('sunkissedyellow', '#F4D03F'),
    new Color('groovygray', '#D7DBDD'),
];

// export Color
export const getRandomColor = () => {

    return allColors[Math.floor(Math.random() * allColors.length)]
}

