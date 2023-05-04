import {Link} from 'react-router-dom'
import RegisterContext from '../context/RegisterContext'
import './index.css'

const Home = props => {
  const onClickRegister = () => {
    const {history} = props
    history.replace('/register')
  }

  const renderRegisterView = () => (
    <div className="register-container">
      <h1>Welcome to Meetup</h1>
      <p>Please register for the topic</p>
      <Link to="/register">
        <button type="button" onClick={onClickRegister}>
          Register
        </button>
      </Link>
      <img
        src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
        alt="meetup"
      />
    </div>
  )

  const renderAfterRegisterView = (name, topic) => (
    <div className="register-after-container">
      <h1 className="heading">{`Hello ${name}`}</h1>
      <p className="para">{`Welcome to ${topic}`}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
        alt="meetup"
      />
    </div>
  )

  return (
    <RegisterContext.Consumer>
      {value => {
        const {isRegister, name, topic} = value
        console.log(name, topic)
        return (
          <>
            <nav className="navbar">
              <img
                src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
                alt="website logo"
              />
            </nav>
            <div>
              {isRegister
                ? renderAfterRegisterView(name, topic)
                : renderRegisterView()}
            </div>
          </>
        )
      }}
    </RegisterContext.Consumer>
  )
}

export default Home
