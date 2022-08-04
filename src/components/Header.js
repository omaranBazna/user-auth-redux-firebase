import React from "react";
import { selectUserEmail, selectUserName } from "../features/userSlice";
import { useSelector } from "react-redux";
export default function Header() {
  const userName = useSelector(selectUserName);
  const userEmail = useSelector(selectUserEmail);
  return (
    <div>
      {userName ? (
        <>
          <div>Hello {userName}</div>
        </>
      ) : (
        <>
          <div>Log in to start the dream</div>
        </>
      )}
    </div>
  );
}
