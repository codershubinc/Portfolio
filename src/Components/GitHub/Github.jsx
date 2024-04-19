import React, { useEffect, useState } from "react";

function Github() {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch("https://api.github.com/users/CodersHub-ing")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, [{}]);
  return (
    <div>
      <div>
        <h1  className="text-3xl text-center  " >GitHub profile </h1>
      </div>

      {data.login}
    </div>
  );
}

export default Github;
