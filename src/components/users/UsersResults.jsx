import React, { useContext } from "react";
import Spinner from "../layouts/Spinner";
import UserItem from "./UserItem";
import GithubContext from "../../githubContext/github/GithubContext";

function UsersResults() {
  const { users, loading } = useContext(GithubContext);

  return (
    <div>
      {loading ? (
        <div>
          <Spinner />
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
          {users.map((user) => (
            <UserItem key={user.id} user={user} />
          ))}
        </div>
      )}
    </div>
  );
}

export default UsersResults;
