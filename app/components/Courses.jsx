import Link from "next/link";

const Courses = ({ courses }) => {
  return (
    <div className="mt-4 grid md:grid-cols-fluid gap-4">
      {courses.map((course) => (
        <div
          key={course.id}
          className="p-4 rounded bg-slate-900 hover:bg-slate-700"
        >
          <h2 className="text-xl font-bold">{course.title}</h2>
          <small className="text-slate-400 ">Level : {course.level}</small>
          <p className="mt-2">{course.description}</p>

          <Link
            href={course?.link}
            target="_blank"
            className="inline-block mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4  rounded"
          >
            Go To Course
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Courses;
