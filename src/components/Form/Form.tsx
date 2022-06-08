import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import './Form.css';

export default class extends React.Component {
  constructor(props) {
	super(props);
	this.state = { feedback: '', name: '', email: '', job: ''};
	this.handleFeedbackChange = this.handleFeedbackChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleJobChange = this.handleJobChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
	return (
  	<form id="contactme">
	<AnimationOnScroll animateIn="animate__fadeIn">
	<div className="project-header">
	<h3>Let's work together.</h3>
	</div>
	</AnimationOnScroll>
	<div className="form-container">
    	<h1 className="rainbow_text_animated">Leave me a note!</h1>
        <div className="email">
		<label>Your Email</label>
      	<textarea
        	id="email"
        	name="email"
        	onChange={this.handleEmailChange}
        	placeholder="your@email.com"
        	required
        	value={this.state.email}
      	/>
    	</div>
        <div className="job">
		<label>Your Job Title</label>
      	<textarea
        	id="job"
        	name="job"
        	onChange={this.handleJobChange}
        	placeholder="Job Title"
        	required
        	value={this.state.job}
      	/>
    	</div>
        <div className="feedback">
		<label>Message</label>
      	<textarea
        	id="feedback"
        	name="feedback"
        	onChange={this.handleFeedbackChange}
        	placeholder="Ben, your portfolio is sweet. We'd like to discuss a business opportunity with you!"
        	required
        	value={this.state.feedback}
      	/>
    	</div>
    	<input type="button" value="Send this message to Ben" className="btn btn--submit" onClick={this.handleSubmit} />
	</div>
  	</form>
	)
  }

  handleFeedbackChange(event) {
    this.setState({feedback: event.target.value})
  }

  handleEmailChange(event) {
    this.setState({email: event.target.value})
  }

  handleJobChange(event) {
    this.setState({job: event.target.value})
  }

  handleSubmit (event) {
    const templateId = process.env.REACT_APP_API_KEY;

	this.sendFeedback(templateId, {message: this.state.feedback, from_name: this.state.job, reply_to: this.state.email})
  }

  sendFeedback (templateId, variables) {
    const serviceId = process.env.REACT_APP_SERVICE_ID;
	window.emailjs.send(
  	serviceId, templateId,
  	variables
  	).then(res => {
    	console.log('Email successfully sent!')
  	})
  	// Handle errors here however you like, or use a React error boundary
  	.catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
  }

}


