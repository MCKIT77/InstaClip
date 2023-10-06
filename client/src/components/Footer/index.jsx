import { useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <footer className="mt-auto text-dark p-4">
      <div className="container text-center mb-5">
        {location.pathname !== '/' && (
          <button
            className="btn btn-dark mb-3"
            onClick={() => navigate(-1)}
          >
            &larr; Go Back
          </button>
        )}
        <h3>Project Repository</h3>
        <p><a href="https://github.com/ElijahAFrancis/video-player"> Github repo </a></p>
        <h4>&copy; {new Date().getFullYear()} - Insta Clip </h4>
      </div>
    </footer>
  );
};

export default Footer;