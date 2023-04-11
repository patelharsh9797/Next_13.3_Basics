import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";

const fetchRepos = async (name) => {
  const res = await fetch(
    `https://api.github.com/repos/patelharsh9797/${name}`
  );
  const data = await res.json();
  return data;
};

const Repo = async ({ name }) => {
  const repo = await fetchRepos(name);

  return (
    <div>
      <h3 className="text-slate-200 text-xl font-semibold ">{repo.name}</h3>
      <p className="text-slate-500">{repo.description}</p>

      <div className="mt-4 flex gap-4">
        <span className="flex items-center justify-center gap-2">
          <FaStar className="block" />
          <span className="text-slate-300">{repo.stargazers_count}</span>
        </span>
        <span className="flex items-center justify-center gap-2">
          <FaCodeBranch />
          <span className="text-slate-300">{repo.forks_count}</span>
        </span>
        <span className="flex items-center justify-center gap-2">
          <FaEye />
          <span className="text-slate-300">{repo.watchers_count}</span>
        </span>
      </div>
    </div>
  );
};

export default Repo;
