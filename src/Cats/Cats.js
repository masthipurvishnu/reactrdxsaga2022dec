import React, { useEffect, useState } from "react";
import fetchDogs from "./request";

const Cats = () => {
    const [cats, setDogs] = useState(null);
    const handleClick = () => {
        const results = fetchDogs().then((d) => {
            setDogs(d)
        });

        // setDogs(() => results);
    };

    useEffect(() => {
        // setDogs(() => results);
    }, []);
    return (
        <>
            <div>Cats List</div>
            <button onClick={handleClick}>Get Cats</button>
            {cats && cats?.length > 0 ? (
                <>
                    <ul>
                        {cats.map((cat) => (
                            <li>{cat.name}</li>
                        ))}
                    </ul>
                </>
            ) : (
                <>No Dogs data avaialable</>
            )}
        </>
    );
};
export default Cats;
