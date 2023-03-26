import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    firstNameError: false,
    lastNameError: false,
    submit: false,
  }

  firstNameChange = event => {
    this.setState({firstName: event.target.value})
  }

  lastNameChange = event => {
    this.setState({lastName: event.target.value})
  }

  submitForm = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state
    if (firstName !== '' && lastName !== '') {
      this.setState({
        firstNameError: false,
        lastNameError: false,
        submit: true,
      })
    } else {
      if (firstName === '') {
        this.setState({
          firstNameError: true,
          submit: false,
        })
      }
      if (lastName === '') {
        this.setState({
          lastNameError: true,
          submit: false,
        })
      }
    }
  }

  firstNameBlur = () => {
    const {firstName} = this.state

    const first = firstName === ''
    this.setState({firstNameError: first})
  }

  lastNameBlur = () => {
    const {lastName} = this.state

    const last = lastName === ''
    this.setState({lastNameError: last})
  }

  RegistrationForm = () => {
    this.setState({
      firstName: '',
      lastName: '',
      firstNameError: false,
      lastNameError: false,
      submit: false,
    })
  }

  getForm = () => {
    const {firstNameError, lastNameError, firstName, lastName} = this.state
    const errorF = firstNameError ? 'error' : null
    const errorL = lastNameError ? 'error' : null
    return (
      <form className="form-container" onSubmit={this.submitForm}>
        <div className="input-container">
          <label htmlFor="firstName" className="label">
            FIRST NAME
          </label>
          <input
            type="text"
            id="firstName"
            className={`input-first-name ${errorF}`}
            onChange={this.firstNameChange}
            onBlur={this.firstNameBlur}
            placeholder="First name"
            value={firstName}
          />
        </div>
        {firstNameError && <p className="error-message">Required</p>}
        <div className="input-container">
          <label htmlFor="lastName" className="label">
            LAST NAME
          </label>
          <input
            type="text"
            id="lastName"
            className={`input-first-name ${errorL}`}
            onChange={this.lastNameChange}
            onBlur={this.lastNameBlur}
            placeholder="Last name"
            value={lastName}
          />
        </div>
        {lastNameError && <p className="error-message">Required</p>}
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    )
  }

  getSubmitForm = () => (
    <div className="success-container" onSubmit={this.submitForm}>
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
      />
      <p className="submitted">Submitted Successfully</p>
      <button
        type="submit"
        className="submitted-button"
        onClick={this.RegistrationForm}
      >
        Submit Another Response
      </button>
    </div>
  )

  render() {
    const {submit} = this.state
    return (
      <div className="submit-container">
        <h1 className="heading">Registration</h1>
        {submit ? this.getSubmitForm() : this.getForm()}
      </div>
    )
  }
}
export default RegistrationForm
