import React, { Component } from 'react'
import './Contact.css'

class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      poster: '',
      comment: '',
    }
    this.onChange = this.onChange.bind(this)
    this.submitForm = this.submitForm.bind(this)
  }
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }
  submitForm(e) {
    e.preventDefault()
    alert('Message envoyé')
  }

  render() {
    return (
      <div className="FormContact">
        <h1>Contact</h1>

        <form onSubmit={this.submitForm}>
          <div className="Contact-global">
            <div className="form-data">
              <input
                type="text"
                id="name"
                name="name"
                onChange={this.onChange}
                value={this.state.name}
                placeholder="Nom"
              />
            </div>

            <div className="form-data">
              <input
                type="text"
                id="poster"
                name="poster"
                onChange={this.onChange}
                value={this.state.poster}
                placeholder="Email"
              />
            </div>

            <div className="form-data">
              <input
                type="textarea"
                id="comment"
                name="comment"
                onChange={this.onChange}
                value={this.state.comment}
                placeholder="Message"
              />
            </div>

            <div className="form-send">
              <input type="submit" value="Envoyer" input />
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default Contact
