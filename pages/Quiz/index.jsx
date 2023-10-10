import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {getQuestions} from "../../services/questions";
import {getTopicWithCondition} from "../../services/topics";
import Question from "../../components/Question";
import "./Quiz.scss";
import {useSelector} from "react-redux";
import {createAnswers} from "../../services/answers";

function Quiz() {
    const id = useParams();
    const navigate = useNavigate();
    const loginValue = useSelector((state) => state.handleLogin);
    const [questions, setQuestions] = useState({
        topicName: {name: ""},
        question: [],
    });

    useEffect(() => {
        const setUp = async () => {
            const question = await getQuestions(id.id);
            const topicName = await getTopicWithCondition("id", id.id);
            topicName
                ? setQuestions({topicName: topicName[0], question: question})
                : navigate("/404");
        };
        setUp();
    }, [id, navigate]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const result = {
            userId: loginValue.userInfo.id,
            topicId: questions.topicName.id,
            answers: [],
        };
        const listAnswers = document.querySelectorAll(
            'input[type="radio"]:checked'
        );
        result.answers = [...listAnswers].map((item) => {
            return {
                questionId: parseInt(item.getAttribute("name")),
                answer: parseInt(item.getAttribute("answer")),
            };
        });
        let check = {};
        const exeCreate = async () => {
            check = await createAnswers(result);
            navigate("/result/" + check.id);
        };
        exeCreate();
    };

    let a = 1;

    return (
        <>
            <div className="quiz">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="quiz__title">
                                Bài Quiz chủ đề: {questions.topicName.name}
                            </h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <form onSubmit={handleSubmit}>
                                {questions.question.length > 0 &&
                                    questions.question.map((item) => (
                                        <Question item={item} key={item.id} order={a++}/>
                                    ))}
                                <hr/>
                                <button
                                    type="submit"
                                    className="btn btn-outline-secondary quiz__submit"
                                >
                                    Nộp bài
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Quiz;
