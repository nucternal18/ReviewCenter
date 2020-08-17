import React, { useState } from "react";

const SearchComponent = () => {
  const [text, setText] = useState("");

  //   const onSubmit = (e) => {
  //     e.preventDefault();
  //     searchText(text);
  //   };

  return (
    <div className="container overflow-hidden py-48 mx-auto opacity-75">
      <form className="w-full h-16 px-3 mb-8 focus:outline-none focus:shadow-outline text-xl px-8 shadow-lg bg-white">
        <div className="flex items-center border-b border-b-2 border-blue-500 py-2">
          <input
            className=" border-none w-full text-black mr-3 py-1 px-2 leading-tight focus:outline-none"
            name="text"
            type="text"
            value={text}
            placeholder="Search for a company or event category..."
            onChange={(e) => setText(e.target.value)}
          />
          <button
            className="flex-shrink-0 bg-blue-900 hover:bg-blue-700
                      text-base  text-white
                    py-1 px-2"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchComponent;
