import './index.css'
import Header from '../Header'

const About = () => (
  <>
    <Header />
    <div className="about-con">
      <img
        className="sm-about-background"
        src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
        alt="about"
      />
      <img
        className="lg-about-background"
        src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
        alt="about"
      />
    </div>
  </>
)

export default About
