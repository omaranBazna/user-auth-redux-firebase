import React from "react";

import "./App.css";
import { auth, provider } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import {
  selectUserEmail,
  selectUserName,
  setActiveUser,
  setUserLogOut,
} from "./features/userSlice";
function App() {
  const dispatch = useDispatch();
  return (
    <div>
      <img src="https://www.outsystems.com/forge/DownloadResource.aspx?FileName=&ImageBinaryId=43951"></img>
    </div>
  );
}

export default App;
