import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getAnswer } from "../../services/answers";
import { getQuestions } from "../../services/questions";
import { getTopicWithCondition } from "../../services/topics";
import ResultData from "../../components/ResultData";
import "./Result.scss";

function Result() {
  const id = useParams();
  const [dataAnswer, setDataAnswer] = useState({
    correctAnswer: [],
    userAnswer: [],
    topic: {},
    countTrueAnswer: 0,
  });
  useEffect(() => {
    const exeSetUpData = async () => {
      const usrAnswer = await getAnswer(id.id);
      const crtAnswer = await getQuestions(usrAnswer[0].topicId);
      const tpic = await getTopicWithCondition("id", usrAnswer[0].topicId);
      let count = 0;
      usrAnswer[0].answers.forEach((user) => {
        crtAnswer.forEach((correct) => {
          if (
            correct.id === user.questionId &&
            correct.correctAnswer === user.answer
          ) {
            count++;
          }
        });
      });
      setDataAnswer({
        correctAnswer: crtAnswer,
        userAnswer: usrAnswer[0],
        topic: tpic[0],
        countTrueAnswer: count,
      });
    };
    exeSetUpData();
  }, [id]);

  var order = 1;

  return (
    <>
      <div className="result">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="result__title">
                Kết quả chủ đề: {dataAnswer.topic.name}
              </h3>
              <p className="result__dashboard">
                Đúng: <b>{dataAnswer.countTrueAnswer}</b> | Sai:{" "}
                <b>
                  {dataAnswer.correctAnswer.length - dataAnswer.countTrueAnswer}
                </b>{" "}
                | Tổng số câu: <b>{dataAnswer.correctAnswer.length}</b> | Tỷ lệ
                đúng:{" "}
                <b>
                  {(dataAnswer.countTrueAnswer /
                    dataAnswer.correctAnswer.length) *
                    100}
                  %
                </b>
              </p>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-12">
              {dataAnswer.correctAnswer.map((item) => {
                let indexUser = null;
                for (
                  let index = 0;
                  index < dataAnswer.userAnswer.answers.length;
                  index++
                ) {
                  if (
                    dataAnswer.userAnswer.answers[index].questionId === item.id
                  ) {
                    indexUser = dataAnswer.userAnswer.answers[index].answer;
                    break;
                  }
                }
                return (
                  <ResultData
                    question={item.question}
                    answer={item.answers}
                    correctAnswer={item.correctAnswer}
                    userAnswer={indexUser}
                    order={order++}
                    key={item.id}
                  />
                );
              })}
            </div>
          </div>
          <hr />
          <Link
            to={"/quiz/" + dataAnswer.topic.id}
            className="btn btn-outline-secondary result__button"
          >
            Làm lại
          </Link>
        </div>
      </div>
    </>
  );
}
export default Result;
