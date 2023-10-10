import { Link } from "react-router-dom";
import "./Home.scss";
import { useSelector } from "react-redux";

function Home() {
  const loginValue = useSelector((state) => state.handleLogin);
  return (
    <div className="home">
      <div className="container">
        {loginValue.isLogin && (
          <div className="row">
            <div className="col-12">
              <h3 className="home__title">
                Chúc mừng bạn đã đăng nhập thành công !
              </h3>
              <Link
                className="btn btn-outline-secondary home__link"
                to={"/topic"}
              >
                Danh sách chủ đề ôn luyện
              </Link>
              <Link
                className="btn btn-outline-secondary home__link"
                to={"/answers"}
              >
                Danh sách bài đã luyện tập
              </Link>
              <hr />
            </div>
          </div>
        )}
        <div className="row">
          <div className="col-12">
            <p className="home__text">
              Website trắc nghiệm online là một nền tảng trực tuyến cho phép
              người dùng thực hiện các bài kiểm tra, trắc nghiệm, đánh giá và đo
              đạc kiến thức của mình trong nhiều lĩnh vực.
            </p>
          </div>
          <div className="col-12">
            <p className="home__text">
              Đối với người dùng, website trắc nghiệm online cung cấp các bài
              kiểm tra để giúp họ nâng cao kiến thức và kỹ năng của mình trong
              các công nghệ và các công cụ hữu ích trong cuộc sống.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
