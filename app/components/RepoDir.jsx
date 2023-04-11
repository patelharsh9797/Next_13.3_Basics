import Link from "next/link";

const fetchRepos = async (name) => {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const res = await fetch(
    `https://api.github.com/repos/patelharsh9797/${name}/contents`
  );
  const data = await res.json();
  return data;
};

const RepoDir = async ({ name }) => {
  const contents = await fetchRepos(name);

  const dirs = contents.filter((content) => content.type === "dir");

  console.log(dirs);

  return (
    <div>
      <h3 className="text-xl">Directories : </h3>
      <ul className="list-disc pl-6">
        {dirs.length > 0 ? (
          dirs.map((dir) => (
            <li>
              <Link
                href={`/code/repos/${name}/${dir.path}`}
                className="underline"
              >
                {dir.name}
              </Link>
            </li>
          ))
        ) : (
          <li>No dir</li>
        )}
      </ul>
    </div>
  );
};

export default RepoDir;
