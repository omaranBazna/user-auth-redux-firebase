import React from "react";

import "./App.css";
import { auth, provider, signOut, signInWithPopup } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import {
  selectUserEmail,
  selectUserName,
  setActiveUser,
  setUserLogOut,
} from "./features/userSlice";

function App() {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const userEmail = useSelector(selectUserEmail);
  const handleSignIn = () => {
    signInWithPopup(provider).then((result) => {
      dispatch(
        setActiveUser({
          userName: result.user.displayName,
          userEmail: result.user.email,
        })
      );
    });
  };
  const handleSignOut = () => {
    signOut()
      .then(() => {
        dispatch(setUserLogOut);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div>
      <img src="https://www.outsystems.com/forge/DownloadResource.aspx?FileName=&ImageBinaryId=43951"></img>

      {userName ? (
        <button onClick={handleSignOut}>Sign Out</button>
      ) : (
        <button onClick={handleSignIn}>Sign In</button>
      )}
    </div>
  );
}

export default App;
