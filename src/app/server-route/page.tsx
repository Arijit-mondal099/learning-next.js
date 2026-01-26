import { server_side_function } from "@/utils/server_utils";
// import { useAppContext } from "@/components/app_context";
import { DisplayName } from "@/components/DisplayName";
// import { client_side_function } from "@/utils/client_utils";

const ServerRoutePage = async () => {
  const server_val = server_side_function();

  // problem is we are accessing client side code in side an server component
  // we can prevent this problem by installing 'npm i client-only' packege and import it at the top of the client uitls file
  // const client_val = client_side_function();

  // Server Components cannot call Client Hooks or Client Context
  // useAppContext() is a client hook, so it can only run in Client Components, not Server Components.
  // const { user } = useAppContext(); 

  return (
    <div>
      <h1>Hey im form server -&gt; {server_val}</h1>
      {/* <h1>Hey im form client -&gt; {client_val}</h1> */}
      {/* the solution is we can create an seperate client component to display conext data */}
      <DisplayName />
    </div>
  );
};

export default ServerRoutePage;
