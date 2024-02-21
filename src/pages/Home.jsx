import React from "react";
import UsersResults from "../components/users/UsersResults";
import UserSearch from "../components/users/UserSearch";

function Home() {
  return (
    <>
      <UserSearch />
      <UsersResults />
    </>
  );
}

export default Home;
