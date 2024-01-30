import { Link } from 'react-router-dom'

const Header = () => {

  return (
    <header>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>About Page</Link>
      </nav>
    </header>
  )
}

export default Header
