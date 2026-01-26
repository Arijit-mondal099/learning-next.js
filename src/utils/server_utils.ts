import "server-only"; // we can do here an security that only server components are can access those server utils

export const server_side_function = (): string => {
  console.log(`
    use multiple libraries
    interact with a database
    use environment variables
    processing sencetive informations
  `);

  return "server side";
};
