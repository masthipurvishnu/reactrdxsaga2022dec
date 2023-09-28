import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { fetchDogs } from "./utils";
const Dog1 = () => {
  const { data, isLoading } = useQuery("dog", fetchDogs());
  const functionObject = () => {
    // deleteProperty();
    // deleteProperty2();
    multiplyByTwo();
    return 10;
  };
  function multiplyByTwo() {
    const settings = {
      userName: "vishnu",
      level: 18,
      health: 90,
    };
    const data = JSON.stringify(settings, ["level", "health"]);
    // console.log(data);
  }
  /*
  
    //1. output??
    const obj = {
      a: "one",
      b: "two",
      a: "three",
    };
    console.log(obj);
    
    //Q2: Create a function multiplyByTwo that multiplies all numiric property vlaues of object (below nums object) by 2.
    let nums = {
      a: 100,
      b: 200,
      title: "My nums",
    };
    //Q3 - output of the code
    const a = {};
    const b = { key: "b" };
    const c = { key: "c" };

    a[b] = 123;
    a[c] = 456;
    console.log(a[b]);
    //Q4: where do you use JSON.parse?

    //Q6. output??
    console.log([..."Lyndia"]);

    //Q6. output??
    const user = { name: "Lydia", age: 11 };
    const admin = { admin: true, ...user };
    console.log(admin);
    // output
    const settings = {
      userName: "vishnu",
      level: 18,
      health: 90,
    };
    const data = JSON.stringify(settings, ["level", "health"]);
    console.log(data);


    Ansewers:
    1. {a: 'three', b: 'two'}
    2. 
    for (let k in nums) {
      if (typeof nums[k] === "number") {
        nums[k] *= 2;
      }
    }
    console.log(nums);
    3. 456
    a[b] will become a[object, object]
    a[c] also will become a[object, object]
    a[object, object] will be 
    console.log(a[b]) // a[object, object]=456
    4. in storing/updating localstorage/sessionStorage
    const user = {
      name: "Vishnu Vadla",
      age: 10,
    };
    localStorage.setItem('userKey', JSON.stringify(user))
    console.log(JSON.parse(localStorage.getItem('test'))
    5. 
     ['L', 'y', 'n', 'd', 'i', 'a']
    6. {admin: true, name: 'Lydia', age: 11}
    6. {"level":18,"health":90} //username skipped
  */
  function objectProperty5() {
    const user = {
      name: "Vishnu Vadla",
      age: 10,
      isGraduated: true,
    };
    for (let key in user) {
      console.log(key);
      console.log(user[key]);
    }
  }
  function deleteProperty4() {
    const property1 = "firstName";
    const property2 = "lastName";
    const name1 = "vishnu";
    const name2 = "vadla";
    const user = {
      property1: name1,
      [property2]: name2, // you can have like this.
    };
    console.log(user.firstName); //undefined
    console.log(user.lastName); // vadla
  }
  function deleteProperty3() {
    const user = {
      name: "Vishnu Vadla",
      age: 10,
      "like this video": "yes",
    };
    console.log(user);
    console.log(user["like this video"]); // you can access properties with sames.
  }
  function deleteProperty2() {
    console.log(func);
    console.log(func1);
  }
  const func = (function (a) {
    // delete a; // this will not effect a, because its a local variable not an object. delete works only objects.
    return a;
  })(5);
  const func1 = (function (a) {
    delete a?.x; // this will be delted
    return a;
  })({ x: 5, y: 10 });
  function deleteProperty1() {
    const user = {
      name: "vishnu",
      age: 10,
    };
    user.name = "vadla";
    console.log(user);
    delete user.age;
    console.log(user); // here user will have only name
  }
  //   const { data: d } = useQuery("obj", () => functionObject());

  useEffect(() => {
    functionObject();
  }, []);
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

export default Dog1;

// const Dog1 = ({ item }) => {
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

// export default Dog1;

// import React, { useEffect, useState } from "react";
// import { fetchDogs } from "./utils";

// const Dog1 = ({}) => {
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

// export default Dog1;
