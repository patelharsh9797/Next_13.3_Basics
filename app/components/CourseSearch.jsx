"use client";

import { useState } from "react";

const CourseSearch = ({ getSearchResults }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(`/api/courses/search?query=${query}`);
    const data = await res.json();

    getSearchResults(data);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-5 w-full flex flex-wrap items-center justify-center gap-4"
    >
      <input
        type="text"
        placeholder="Search course..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full md:flex-1 py-2 px-4 rounded"
      />

      <button type="submit" className="bg-blue-500 p-2 rounded">
        Search
      </button>
    </form>
  );
};

export default CourseSearch;
