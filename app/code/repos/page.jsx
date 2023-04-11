import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";
import Link from "next/link";

const fetchRepos = async () => {
  const res = await fetch("https://api.github.com/users/patelharsh9797/repos", {
    next: { revalidate: 60 },
  });
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const data = await res.json();
  return data;
};

const page = async () => {
  const repos = await fetchRepos();

  return (
    <div>
      <h1 className="text-2xl font-bold">Repos : </h1>

      <ul className="mt-10 mx-auto lg:w-1/2 w-full flex flex-col gap-4">
        {repos.map((repo) => (
          <li key={repo.id}>
            <Link
              href={`/code/repos/${repo.name}`}
              className="block  bg-slate-800 py-2 px-4 rounded hover:bg-slate-600"
            >
              <h3 className="text-slate-200 text-xl font-semibold ">
                {repo.name}
              </h3>
              <p className="text-slate-500">{repo.description}</p>

              <div className="mt-2 flex justify-between gap-2">
                <span className="flex items-center justify-center gap-2">
                  <FaStar className="block" />
                  <span className="text-slate-500">
                    {repo.stargazers_count}
                  </span>
                </span>
                <span className="flex items-center justify-center gap-2">
                  <FaCodeBranch />
                  <span className="text-slate-500">{repo.forks_count}</span>
                </span>
                <span className="flex items-center justify-center gap-2">
                  <FaEye />
                  <span className="text-slate-500">{repo.watchers_count}</span>
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default page;
