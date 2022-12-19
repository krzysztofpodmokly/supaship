import { useContext } from "react";
import { UserContext } from "./App";
import { supaClient } from "./supa-client";

const UserMenu = () => {
  const { profile } = useContext(UserContext);

  return (
    <>
      <div className="flex flex-col">
        <h2>Welcome {profile?.username || "dawg"}</h2>
        <button
          className="user-menu-logout-button"
          onClick={() => supaClient.auth.signOut()}
        >
          Logout
        </button>
      </div>
    </>
  );
};

export default UserMenu;
