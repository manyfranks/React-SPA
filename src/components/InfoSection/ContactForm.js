import React from 'react'

function ContactForm() {
	return ( <div>
		<form
			name="contact v1"
			method='post'
			data-netlify="true"
			onSubmit="submit"
			data-netlify-honeypot="bot-field"
		>
			<input type='hidden' name='form-name' value="contact v1" />

			<div hidden>
				<input name='bot-field' />
			</div>

			<div>
				<label>Name<br />
					<input type='text' name='name' />
				</label>
			</div>

			<div>
				<label htmlFor='email' >Email</label><br />
				<input id="email" type='email' name='email' />
			</div>

			<div>
				<label>Message<br />
					<textarea name='comments'></textarea>
				</label>
			</div>

			<button type='submit'>Send Message</button>

		</form>

	</div>
	)
}

export default ContactForm