async function fetchCourse() {
  const res = await fetch("http://localhost:3000/api/courses");
  const data = await res.json();
  return data;
}

const Courses = async () => {
  const courses = await fetchCourse();
  console.log(courses);

  return <div>Courses</div>;
};

export default Courses;
