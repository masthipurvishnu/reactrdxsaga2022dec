/*
// Southwest Health/UST
// UST - screening

    //Questions - Write a groupBy function to group users based on a property like name, age, id.
    //You code should also handle exceptions
    const users = [
      { id: 1, name: "Rahul", age: 30, gender: "male" },
      { id: 7, name: "John", age: 30 },
      { id: 3, name: "David", age: 50, city: "NY" },
      { id: 4, name: "Abhi", age: 40 },
      { id: 5, name: "Smith", age: 40 },
    ];

    //An example of Expected output as per one property - age
    // {
    //   40: [{ id: 5, name: "Abhi", age: 40 }, { id: 4, name: "Smith", age: 40 }],
    //   50: [{ id: 3, name: "David", age: 50, city: 'NY' }],
    //   30: [{ id: 1, name: "Rahul", age: 30, gender: 'male' },{ id: 7, name: "John", age: 30 }]
    // }
    //2. search feature
    // dropdown - unique keys should be populated, id, name age, gender, city, ....
    // dropdown - input box -> search button
    // dropdown -> age =>
    // {
    //   40: [{ id: 5, name: "Abhi", age: 40 }, { id: 4, name: "Smith", age: 40 }],
    //   50: [{ id: 3, name: "David", age: 50, city: 'NY' }],
    //   30: [{ id: 1, name: "Rahul", age: 30, gender: 'male' },{ id: 7, name: "John", age: 30 }]
    // }
    // age -> 30 -> click search => 2 records
    // result: [{ id: 1, name: "Rahul", age: 30, gender: 'male' },{ id: 7, name: "John", age: 30 }]
    // age -> male -> invalid search exception
    // search should happen based on the groupby data....
*/
import { CurrencyBitcoin } from "@mui/icons-material";
import React from "react";
import { useState, useEffect } from "react";
import { redirect } from "react-router-dom";
import User, { printAge, printName } from "./user";
function GroupBy() {
  const users = [
    { id: 1, name: "Rahul", age: 25, gender: "male" },
    { id: 7, name: "John", age: 25 },
    { id: 3, name: "David", age: 64, city: "NY" },
    { id: 4, name: "Abhi", age: 49 },
    { id: 5, name: "Smith", age: 49 },
  ];
  // const [dropdownValues, setDropdownValues] = useState(["a", "b", "c"]);
  const [dropdownValues, setDropdownValues] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [groupByValues, setGroupByValues] = useState([]);
  const [selectedVAlue, setSElectedValue] = useState("");
  let f = 0;
  useEffect(() => {
    if (f === 0) {
      jsMethods();
      f++;
    }
    dropdownValues?.length <= 0 && getDropdownValues(users);
  }, [dropdownValues, inputValue]);

  const getDropdownValues = (usersList) => {
    let elements = [];
    usersList.map((el) => {
      const keyValues = Object.keys(el);
      if (elements?.length <= 0) {
        elements = keyValues;
      } else {
        keyValues.map((key) => {
          if (!elements.find((e) => e === key)) {
            elements.push(key);
          } else {
          }
        });
      }
    });
    setDropdownValues(elements);
  };
  const btnClick = () => {};
  const getUniqueValues = (value) => {
    console.log(users);
    let uniqueValues = [];
    users.map((el) => {
      let v;
      if (uniqueValues.length <= 0) {
        uniqueValues.push(el[value]);
      } else {
        if (uniqueValues.findIndex((v) => v === el[value]) < 0) {
          !!el[value] && uniqueValues.push(el[value]);
        }
      }
    });
    return uniqueValues;
  };
  const onDropdownValueChange = (e) => {
    // group by here
    const uniqueValues = getUniqueValues(e.target.value);
    console.log(uniqueValues);

    let groupBy = [];
    uniqueValues.forEach((v) => {
      groupBy[v] = users.filter((u) => u[e.target.value] === v);
    });
    console.log(groupBy);

    // setGroupByValues(groupByresults);
  };
  const onButtonClick = () => {
    //search functionalities
    //if enterd text is not there int he group by value, error
    // if()
    if (groupByValues.filter((ele) => ele[selectedVAlue] === inputValue)) {
      // render results
      // Object.groupBy(users, {type: name})
    } else {
      // error
    }
  };
  const onTextChange = (e) => {
    // e.defaultProperities()
    setInputValue(e.target.value);
  };
  const onOpsButtonClick = () => {
    console.log("asdfasdf", users);
    // sort
    const sortedUsers = users.sort((a, b) => (a.name > b.name ? 1 : -1));
    // console.log(sortedUsers);
    // const sortedUsersRev = users.sort((a, b) => (a.id < b.id ? 1 : -1));
    // console.log(sortedUsersRev);
    // map
    const ageMap = users.map((u) => Math.sqrt(u.age));
    // console.log(ageMap);
    const ageMap2 = users.map((u) => Math.sqrt(u.age)).map((am) => am * 2);
    // console.log(ageMap2);
    //reduce
    const array1 = [1, 2, 3, 4, 5];
    let arra1Sum = 0;
    for (let i = 0; i < array1.length; i++) {
      arra1Sum += array1[i];
    }
    console.log(arra1Sum);
    const redSum = array1.reduce((acc, cur) => acc + cur);
    console.log(redSum);

    const accumulater = array1.reduce((acc, cur) => {
      return { acc: cur };
    });
    console.log(accumulater);
  };
  /*

  */
  function jsMethods() {
    const u = new User("vishnu", 43);
    printName(u);
    printAge(u);
  }
  return (
    <div className="App">
      <div>{"GroupBy Main Content"}</div>
      <div style={{ margin: "20px" }}>
        <button onClick={jsMethods}>{"Ops"}</button>
      </div>
      <div>
        <select onChange={onDropdownValueChange}>
          {dropdownValues && dropdownValues.length > 0 ? (
            <>
              {dropdownValues.map((value, i) => {
                return <option key={i}>{value}</option>;
              })}
            </>
          ) : (
            <>
              <option key={0}>{"no value"}</option>
            </>
          )}
        </select>
        <input value={inputValue} onChange={onTextChange} />
        <button onClick={onButtonClick}>{"Search"}</button>
        {/* <ul> */}
        {groupByValues ? (
          <>
            {groupByValues.map((el, k) => {
              return <li key={k}>{el?.name}</li>;
            })}
          </>
        ) : (
          <>{"No results"}</>
        )}
        {/* </ul> */}
      </div>
    </div>
  );
}

export default GroupBy;
