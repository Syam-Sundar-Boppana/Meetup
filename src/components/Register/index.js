import RegisterContext from '../context/RegisterContext'
import './index.css'

const topicsList = [
  {
    id: 'ARTS AND CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER AND BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION AND LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION AND BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

const Register = props => (
  <RegisterContext.Consumer>
    {value => {
      const {
        name,
        topic,
        updateName,
        updateTopic,
        changeRegistrationStatus,
        updateError,
        registerError,
      } = value

      const submitForm = event => {
        event.preventDefault()
        changeRegistrationStatus()

        if (name !== '' && topic !== '') {
          const {history} = props
          history.replace('/')
        } else {
          updateError(true)
        }
      }

      const onChangeName = event => {
        updateName(event.target.value)
      }

      const onChangeTopic = event => {
        updateTopic(event.target.value)
      }
      return (
        <div>
          <nav className="navbar">
            <img
              src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
              alt="website logo"
            />
          </nav>
          <div className="inside-container">
            <img
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
              alt="website register"
            />
            <form className="form-container" onSubmit={submitForm}>
              <h1 className="form-heading">Let us join</h1>
              <label htmlFor="name" className="label">
                NAME
              </label>
              <br />
              <input
                id="name"
                type="text"
                placeholder="Your name"
                className="input"
                onChange={onChangeName}
                value={name}
              />
              <br />
              <label className="label" htmlFor="topics">
                TOPICS
              </label>
              <br />
              <select
                value={topic}
                id="topics"
                onChange={onChangeTopic}
                className="input"
              >
                {topicsList.map(each => (
                  <option key={each.id} value={each.id}>
                    {each.displayText}
                  </option>
                ))}
              </select>
              <br />
              <button className="button" type="submit">
                Register Now
              </button>
              {registerError ? (
                <p className="error">please enter your name?</p>
              ) : null}
            </form>
          </div>
        </div>
      )
    }}
  </RegisterContext.Consumer>
)

export default Register
