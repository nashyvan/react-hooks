import React, {useState, useEffect, useMemo} from "react";
import axios from "axios";


const UseMemoHook = () => {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data);
      });
  }, []);

  const findLongestName = (comments) => {
    if (!comments) return null;

    let longestName = "";
    for (let i = 0; i < comments.length; i++) {
      let currentName = comments[i].name;
      if (currentName.length > longestName.length) {
        longestName = currentName;
      }
    }

    console.log("This Was Computed");

    return longestName;
  }

  const getLongestName = useMemo(() => findLongestName(data), [data]);

  return (
    <div>
      <div>
        <h2>{getLongestName}</h2>
      </div>
      <button onClick={() => {setToggle(!toggle)}}>Toggle</button>
      {toggle && <h3>toggle text</h3>}
    </div>
  );
};

export default UseMemoHook;
