import React, { useState } from "react";

const UserSearch = () => {
  const [text, setText] = useState("");

  //   const { users, dispatch } = useContext(GithubContext);
  //   const { setAlert } = useContext(AlertContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      alert("epp me epp me");
    } else {
      //do someting
      setText("");
    }
  };

  const handleChange = (e) => setText(e.target.value);
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
      <div>
        <form>
          <div className="form-control">
            <div className="relative">
              <input
                type="text"
                className="w-full pr-40 bg-gray-200 input input-lg text-black"
                placeholder="Search"
                value={text}
                onChange={handleChange}
              />
              <button
                type="submit"
                className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg"
              >
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
      {/* {users.length > 0 && ( */}
      <div>
        <button
          // onClick={() => dispatch({ type: "CLEAR_USERS" })}
          className="btn btn-ghost btn-lg"
        >
          Clear
        </button>
      </div>
      {/* )} */}
    </div>
  );
};

export default UserSearch;