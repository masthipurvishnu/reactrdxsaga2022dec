// 'https://api.thecatapi.com/v1/breeds' 11:46
const fetchCats = async () => {
    const results = await fetch('https://api.thecatapi.com/v1/breeds')
    return await results.json()
}

export default fetchCats