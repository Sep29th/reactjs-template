export const getAllAnswersOfOneUser = async (id) => {
  const result = await fetch("http://localhost:3001/answers?userId=" + id);
  const data = await result.json();
  return data;
};
export const createAnswers = async (newAnswer) => {
  const result = await fetch("http://localhost:3001/answers", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newAnswer),
  });
  const data = await result.json();
  return data;
};
export const getAnswer = async (id) => {
  const result = await fetch("http://localhost:3001/answers?id=" + id);
  const data = await result.json();
  return data;
};
