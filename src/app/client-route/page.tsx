"use client";

import { client_side_function } from "@/utils/client_utils";
// import { server_side_function } from "@/utils/server_utils";

const ClientRoutePage = () => {
  // problem is we can access here server side ulils fun's
  // we can prevent this problem by installing 'npm i server-only' packege and import it at the top of the server uitls file
  // const server_val = server_side_function();

  const client_val = client_side_function();

  return (
    <div>
      <h1>Hey im form client</h1>
      <h1>Hey im form client -&gt; {client_val}</h1>
    </div>
  );
};

export default ClientRoutePage;
