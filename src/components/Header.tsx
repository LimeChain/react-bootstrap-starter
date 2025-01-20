import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="p-5 d-flex justify-content-between align-items-center bg-darker">
      <div className="d-flex align-items-center">
        <Link to={'/'}>
          <img
            loading="lazy"
            src="https://cdn.prod.website-files.com/660a86b7bec017e773968f3a/660d6a391700e6b41f95c084_LimeChan-Light.svg"
            alt="LimeChain logo light"
            className="me-4"
          />
        </Link>

        <Link className="link-white text-lead mx-4" to="/styleguide">
          Styleguide
        </Link>

        <Link className="link-white text-lead mx-4" to="/rwd">
          RWD
        </Link>
      </div>

      <div></div>
    </div>
  );
};

export default Header;
