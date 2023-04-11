export const metadata = {
  title: "Next.JS 13.3 Basics | About",
  description: "This is about page of  Next.JS 13.3 Basics",
  keywords: "web developer, next.js, next.js 13, next.js 13.3",
};

const AboutLayout = ({ children }) => {
  return (
    <div>
      {/* <h1>this is in layout page</h1> */}
      {children}
    </div>
  );
};

export default AboutLayout;
