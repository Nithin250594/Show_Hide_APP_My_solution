// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {isFirstNameHide: true, isLastNameHide: true}

  firstnameButton = () => {
    this.setState(prev => ({isFirstNameHide: !prev.isFirstNameHide}))
  }

  lastnameButton = () => {
    this.setState(prev => ({isLastNameHide: !prev.isLastNameHide}))
  }

  render() {
    const {isFirstNameHide, isLastNameHide} = this.state

    const firstName = isFirstNameHide ? null : 'Joe'
    const lastName = isLastNameHide ? null : 'Jonas'
    const firstNameBox = isFirstNameHide ? null : 'text-box'
    const lastNameBox = isLastNameHide ? null : 'text-box'
    const firstNameText = isFirstNameHide ? null : 'text-font'
    const lastNameText = isFirstNameHide ? null : 'text-font'

    return (
      <div className="showHide-bg">
        <h1 className="showHide-title">Show/Hide</h1>
        <div className="buttonsAndTextBoxes">
          <div className="buttonAndText-container ">
            <button
              type="button"
              onClick={this.firstnameButton}
              className="button-style"
            >
              Show/Hide Firstname
            </button>
            <div className={firstNameBox}>
              <p className={firstNameText}>{firstName}</p>
            </div>
          </div>

          <div className="buttonAndText-container ">
            <button
              type="button"
              onClick={this.lastnameButton}
              className="button-style"
            >
              Show/Hide Lastname
            </button>
            <div className={lastNameBox}>
              <p className={lastNameText}>{lastName}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
