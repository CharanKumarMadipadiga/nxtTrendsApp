import './index.css'

const Header = () => (
  <nav className="nav-container">
    <div className="nav-card">
      <div className="logo-con">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="logo"
          className="img-logo"
        />
      </div>
      <div className="list-con">
        <div className="logout-con">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
            alt="logout"
            className="logout-icon"
          />
        </div>
        <ul className="tabs-list">
          <li>Home</li>
          <li>Products</li>
          <li>Cart</li>
        </ul>
        <button type="button" className="logout-btn">
          Logout
        </button>
      </div>
    </div>
  </nav>
)

export default Header
