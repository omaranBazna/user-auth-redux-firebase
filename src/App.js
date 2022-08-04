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
import { signOut, signInWithPopup, signInWithRedirect } from "firebase/auth";
function App() {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const userEmail = useSelector(selectUserEmail);
  const handleSignIn = () => {
    signInWithPopup(auth, provider).then((result) => {
      dispatch(
        setActiveUser({
          userName: result.user.displayName,
          userEmail: result.user.email,
        })
      );
    });
  };
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out ");
        dispatch(setUserLogOut());
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
