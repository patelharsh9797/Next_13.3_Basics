async function fetchCourse() {
  const res = await fetch("https://localhost:3000/api/course");
  const data = await res.json();
  return data;
}

const Courses = async () => {
  const courses = await fetchCourse();
  console.log(courses);

  return <div>Courses</div>;
};

export default Courses;
