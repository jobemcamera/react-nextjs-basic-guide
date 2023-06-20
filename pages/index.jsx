import Link from "next/link";
import { Fragment } from "react";

// our-domain.com/

function HomePage() {
  return (
    <Fragment>
      <h1>The Home Page</h1>
      <ul>
        <li>
          <Link href="/news/nextjs-is-a-great-framework">
            Next.js Is A Great Framework
          </Link>
        </li>
        <li>Something Else</li>
      </ul>
    </Fragment>
  );
}

export default HomePage;
