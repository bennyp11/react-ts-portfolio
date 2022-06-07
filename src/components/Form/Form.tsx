import React from 'react';

export default class extends React.Component {
  constructor(props) {
	super(props);
	this.state = { feedback: '', name: 'Name', email: 'ben.r.pollock@gmail.com', job: ''};
	this.handleFeedbackChange = this.handleFeedbackChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleJobChange = this.handleJobChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
	return (
  	<form className="test-mailing">
    	<h1>Let's get in touch</h1>
        <div>
      	<textarea
        	id="test-mailing"
        	name="test-mailing"
        	onChange={this.handleEmailChange}
        	placeholder="your@email.com"
        	required
        	value={this.state.email}
        	style={{width: '100%', height: '150px'}}
      	/>
    	</div>
        <div>
      	<textarea
        	id="test-mailing"
        	name="test-mailing"
        	onChange={this.handleJobChange}
        	placeholder="Job Title"
        	required
        	value={this.state.job}
        	style={{width: '100%', height: '150px'}}
      	/>
    	</div>
        <div>
      	<textarea
        	id="test-mailing"
        	name="test-mailing"
        	onChange={this.handleFeedbackChange}
        	placeholder="Ben, your portfolio is sweet. We'd like to discuss a business opportunity with you!"
        	required
        	value={this.state.feedback}
        	style={{width: '100%', height: '150px'}}
      	/>
    	</div>
    	<input type="button" value="Submit" className="btn btn--submit" onClick={this.handleSubmit} />
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


