import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <div className="container my-5 my-md-10">
        <h1 className="heading-large text-bold text-center mt-5 mt-lg-10">404</h1>
        <p className="text-center">
          <Link to="/" className="link-primary">
            Back to home
          </Link>
        </p>
      </div>
    </div>
  );
};

export default NotFound;
