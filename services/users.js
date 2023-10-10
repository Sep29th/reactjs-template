import randomString from "../helpers/randomToken";

export const getUserWithCondition = async (key, value) => {
  const result = await fetch(
    "http://localhost:3001/users?" + key + "=" + value
  );
  const data = await result.json();
  return data;
};
export const createUser = async (user) => {
  const result = await fetch("http://localhost:3001/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...user, token: randomString(20) }),
  });
  const data = await result.json();
  return data;
};
