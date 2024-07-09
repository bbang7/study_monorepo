// import type { MetaFunction } from "@remix-run/node";

// export const meta: MetaFunction = () => {
//   return [{ title: "New Remix App" }, { name: "description", content: "Welcome to Remix!" }];
// };

import { Button } from "shared-ui";
export default function Index() {
  return (
    <div>
      <h1>hello</h1>
      <Button onClick={() => console.log("hello")}>click</Button>
    </div>
  );
}
