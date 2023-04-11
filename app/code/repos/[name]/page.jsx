import { Suspense } from "react";
import Link from "next/link";

import Repo from "@/app/components/Repo";
import RepoDir from "@/app/components/RepoDir";
import loaderComp from "@/app/components/loaderComp";

const RepoPage = ({ params }) => {
  const { name } = params;
  return (
    <div className="bg-slate-800 text-slate-200 p-4 rounded | flex flex-col gap-4">
      <Link
        href={"/code/repos"}
        className="inline-block self-start mb-4 text-xs bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded tracking-wide"
      >
        Back To Repos
      </Link>

      <Suspense fallback={<div>Loading Repo.....</div>}>
        <Repo name={name} />
      </Suspense>

      <Suspense fallback={<div>Loading Directories....</div>}>
        <RepoDir name={name} />
      </Suspense>
    </div>
  );
};

export default RepoPage;
