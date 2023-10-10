import "./ResultData.scss";

function ResultData(props) {
  const { question, answer, correctAnswer, userAnswer, order } = props;
  let key = 0;
  return (
    <>
      <p>
        Câu thứ {order}: {question}{" "}
        {correctAnswer === userAnswer ? (
          <span class="badge text-bg-success">Đúng</span>
        ) : (
          <span class="badge text-bg-danger">Sai</span>
        )}
      </p>
      {answer.map((item, index) => (
        <div className="form-check" key={key++}>
          {index === userAnswer ? (
            <input
              className="form-check-input"
              type="radio"
              id={order}
              checked
              disabled
            />
          ) : (
            <input
              className="form-check-input"
              type="radio"
              id={order}
              disabled
            />
          )}
          {index !== correctAnswer && index !== userAnswer && (
            <label className="form-check-label" htmlFor={order}>
              {item}
            </label>
          )}
          {index === userAnswer && index !== correctAnswer && (
            <label className="form-check-label wrong" htmlFor={order}>
              {item}
            </label>
          )}
          {index === correctAnswer && (
            <label className="form-check-label pass" htmlFor={order}>
              {item}
            </label>
          )}
        </div>
      ))}
    </>
  );
}
export default ResultData;
