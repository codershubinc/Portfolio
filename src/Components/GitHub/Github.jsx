import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function Github() {
  const [data, setData] = useState({});
  const id = useParams()
  useEffect(() => {
    if (id) {
      fetch("https://api.github.com/users/CodersHub-in")
        .then((response) => response.json())
        .then((data) => {
          setData(data);
          console.log("Fetched");
        });

    }
  }, []);
  return (
    <div className="bg-black h-[100vh] text-white " >
      <div className="flex justify-center text-center  ">
        <h1 className="text-3xl text-center  " >GitHub profile </h1>
      </div>
      <div>
        <div className=" flex justify-center text-center w-min-[10vw]  w-max  items-center p-2 border-2 border-solid border-white rounded-xl bg-[#212121] transition-all shadow-inner shadow-white" >
          
          
          <div   className="m-2">
            <img src={data.avatar_url ? data.avatar_url : "https://avatars.githubusercontent.com/u/154464457?v=4"} className="h-60 w-60 rounded-[50%] border-2 border-solid border-gray-500" alt="" />
            <h1 className="text-xl"  >{(data.login ? data.login : "gitHub Login error please login again  |or| wait a minute")}</h1>
          </div>
           
          

          <div>
            <h1>{"Followers are " + data.followers}</h1>
          </div>
        </div>
      </div>


    </div>
  );
}

export default Github;
