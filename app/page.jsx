import Link from "next/link";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
    
      <ul>
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/about"}>About</Link>
        </li>
        <li>
          <Link href={"/about/team"}>Team</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
