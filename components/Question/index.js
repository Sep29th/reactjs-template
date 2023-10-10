function Question(props) {
  const { item, order } = props;
  return (
    <>
      <p className="question__text">
        Câu thứ {order}: {item.question}
      </p>
      {item.answers &&
        item.answers.map((answer, index) => (
          <div className="form-check" key={index}>
            <input
              className="form-check-input"
              type="radio"
              name={item.id}
              id={item.id + "_" + index}
              answer={index}
            />
            <label className="form-check-label" htmlFor={item.id + "_" + index}>
              {answer}
            </label>
          </div>
        ))}
    </>
  );
}
export default Question;
