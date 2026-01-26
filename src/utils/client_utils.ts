import "client-only"; // we can do here an security that only client components are can access those client utils

export const client_side_function = (): string => {
  console.log(`
    use browser API's intractions
    use localstorage
    ...
  `);

  return "client side";
};
