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
            classname="mt-4 bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg"
          >
            Go To Course
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Courses;
