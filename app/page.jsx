"use client";

import { useState, useEffect } from "react";
import LoadingP from "./loading";

import Courses from "./components/Courses";
import CourseSearch from "./components/CourseSearch";
import { Result } from "postcss";

const Home = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await fetch("/api/courses");
      const data = await res.json();

      setCourses(data);
      setLoading(false);
    };

    fetchCourses();
  }, []);

  if (loading) return <LoadingP />;

  return (
    <div>
      <h1 className="text-2xl font-bold">Home</h1>

      <CourseSearch getSearchResults={(result) => setCourses(result)} />
      <Courses courses={courses} />
    </div>
  );
};

export default Home;
