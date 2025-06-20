export function getHeaders() {
  // const jwt = getCurrentJWT();
  // if (!jwt) throw new Error("No JWT found");
  return {
    "Content-Type": "application/json",
    Authorization: `bearer ${"woof"}`,
    // withCredentials: false,
  };
}
