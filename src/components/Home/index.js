import './index.css'
import Header from '../Header'

const Home = () => (
  <>
    <Header />
    <div className="home-con">
      <div className="home-background">
        <img
          src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png"
          alt="home"
          className="sm-home-background"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
          alt="home"
          className="lg-home-background"
        />
      </div>
    </div>
  </>
)

export default Home
