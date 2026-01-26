import { server_side_function } from "@/utils/server_utils";
// import { useAppContext } from "@/components/app_context";
import { DisplayName } from "@/components/DisplayName";

const ServerRoutePage = async () => {
  const val = server_side_function();

  // Server Components cannot call Client Hooks or Client Context
  // useAppContext() is a client hook, so it can only run in Client Components, not Server Components.
  // const { user } = useAppContext(); 

  return (
    <div>
      <h1>Hey im form server -&gt; {val}</h1>
      {/* the solution is we can create an seperate client component to display conext data */}
      <DisplayName />
    </div>
  );
};

export default ServerRoutePage;
