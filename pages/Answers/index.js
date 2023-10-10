import { useEffect, useState } from "react";
import { getAllAnswersOfOneUser } from "../../services/answers";
import AnswerData from "../../components/AnswersData";
import { useSelector } from "react-redux";
import { getAllTopics } from "../../services/topics";

function Answers() {
  const loginValue = useSelector((state) => state.handleLogin);
  const [answers, setAnswers] = useState({ answer: [], topic: [] });
  useEffect(() => {
    const getAnswers = async () => {
      const data = await getAllAnswersOfOneUser(loginValue.userInfo.id);
      const topic = await getAllTopics();
      setAnswers({ answer: data, topic: topic });
    };
    getAnswers();
  }, [loginValue.userInfo.id]);
  return (
    <>
      <div className="answers">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="answers__title">Danh sách bài đã luyện tập</h3>
              <hr />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="answers__table">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Id</th>
                      <th scope="col">Tên chủ đề</th>
                      <th scope="col">Chi tiết</th>
                    </tr>
                  </thead>
                  <tbody>
                    {answers.answer.length > 0 &&
                      answers.answer
                        .reverse()
                        .map((item) => (
                          <AnswerData
                            item={item}
                            key={item.id}
                            topic={answers.topic}
                          />
                        ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Answers;
