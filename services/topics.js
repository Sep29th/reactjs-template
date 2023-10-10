export const getAllTopics = async () => {
  const result = await fetch("http://localhost:3001/topics");
  const data = await result.json();
  return data;
};
export const getTopicWithCondition = async (key, value) => {
  const result = await fetch(
    "http://localhost:3001/topics?" + key + "=" + value
  );
  const data = await result.json();
  return data;
};
