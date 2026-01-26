import { server_side_function } from "@/utils/server_utils";

const ServerRoutePage = async () => {
    const val = server_side_function();

  return (
    <div>
      <h1>Hey im form server -&gt; {val}</h1>
    </div>
  );
};

export default ServerRoutePage;
