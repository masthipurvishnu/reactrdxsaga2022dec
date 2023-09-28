import React from "react";
import { useQuery } from "react-query";
import { fetchDogs } from "./utils";
const Dog2 = () => {
  const { data, isLoading } = useQuery("dog", fetchDogs());
  //   if (isLoading) return <h1>Loading</h1>;
  return (
    <div style={{ border: "0px solid" }}>
      <img
        style={{ width: "150px", height: "150px" }}
        src={data?.message}
        alt={data?.message}
      />
      ;
    </div>
  );
};

export default Dog2;

// import React from "react";

// const Dog2 = ({ item }) => {
//   return (
//     <div style={{ border: "1px solid" }}>
//       <img
//         style={{ width: "150px", height: "150px" }}
//         src={item?.message}
//         alt={item?.message}
//       />
//       ;
//     </div>
//   );
// };

// export default Dog2;

// import React, { useEffect, useState } from "react";
// import { fetchDogs } from "./utils";

// const Dog2 = ({}) => {
//   const [item, setItem] = useState([]);
//   useEffect(() => {
//     fetchDogs().then((r) => setItem(r));
//   }, []); // initial load
//   return (
//     <div style={{ border: "1px solid" }}>
//       <img
//         style={{ width: "150px", height: "150px" }}
//         src={item?.message}
//         alt={item?.message}
//       />
//       ;
//     </div>
//   );
// };

// export default Dog2;
