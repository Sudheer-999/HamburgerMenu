import './index.css'
import Header from '../Header'

const NotFound = () => (
  <>
    <Header />
    <div className="not-found">
      <img
        src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
        alt="not found"
        className="not-found-img"
      />
      <h1 className="error-msg">Lost Your Way?</h1>
      <p>
        Sorry, we cannot find that page. You will find lots to explore on the
        homepage
      </p>
    </div>
  </>
)

export default NotFound
