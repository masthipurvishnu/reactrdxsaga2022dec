const fetchDogs = () => {
    const data = getDogs();

    return data;
};

const getDogs = async () => {
    const res = await fetch("https://api.thecatapi.com/v1/breeds");
    const data = await res.json();

    return data;
};

export default fetchDogs;
