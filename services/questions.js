export const getQuestions = async (topicId) => {
  const result = await fetch(
    "http://localhost:3001/questions?topicId=" + topicId
  );
  const data = await result.json();
  return data;
};
