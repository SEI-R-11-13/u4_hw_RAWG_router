import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
        </div>
        <h4 className="navbar-title">RAWG</h4>
      </div>
    </nav>
  );
};

export default Header;
