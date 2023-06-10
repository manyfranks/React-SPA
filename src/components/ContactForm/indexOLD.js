import React, { useReducer, useState } from 'react';
import { InfoContainer, 
        InfoWrapper, 
        InfoRow, 
        Column1, 
        Column2, 
        Column3, 
        TextWrapper, 
        TopLine, 
        Heading, 
        Subtitle, 
        BtnWrap,
				FormWrap,
				FormLabel,
				FormInput,
				FormTextarea,
				FormContent,
				Form,
				FormButton
        } from './FormElements';

	const formReducer = (state, event) => {
		return {
			...state,
			[event.name]: event.value
		}
	}

const ContactForm = ({
                    lightText,  
                    darkText, 
                    description, 
                    description2, 
                    buttonLabel, 
                    img,
                    alt,
                    primary,
                    dark,
                    dark2
                    }) => {
											const [formData, setFormData] = useReducer(formReducer, {});
											const [submitting, setSubmitting] = useState(false);
										
											const handleSubmit = event => {
												event.preventDefault();
												setSubmitting(true);
										
												setTimeout(() => {
													setSubmitting(false);
												}, 3000);
											}
										
											const handleChange = event => {
												setFormData({
													name: event.target.name,
													value: event.target.value,
												});
											}
												return (
														<>
																<InfoContainer lightBg={true} id="contact">
																		<InfoWrapper>
																				<InfoRow imgStart={false}>
																						<Column1>
																						<TextWrapper>
																								<TopLine>Contact Us</TopLine>
																								<Heading lightText={lightText}>Tell Us About Your Project</Heading>
																								<Subtitle darkText={darkText}>At Indigenous Iron, our mission is to provide exceptional contracting and sub-contracting services to our clients while upholding our commitment to the values of our First Nations communities. We are dedicated to building lasting partnerships with our clients based on trust, mutual respect, and a shared vision for success. Fill out our contact form and we will be happy to help you with your project goals!</Subtitle>
																						</TextWrapper>
																						</Column1>
																						<Column2>
																						<>
																							<FormWrap>
																								<FormContent>
																								<Form 
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
																											<Column3>
																												<FormLabel>Name</FormLabel>
																												<FormInput type='text' name='name' />

																												<FormLabel htmlFor='email' >Email</FormLabel>
																												<FormInput id="email" type='email' name='email' />
																											</Column3>
																												
																											</div>

																											<div>
																												<FormLabel>Subject</FormLabel><br />
																												<fieldset>
																													<select name="apple" onChange={handleChange}>
																														<option value="">Please Choose A Subject</option>
																														<option value="option1">Request A Quote</option>
																														<option value="option2">Existing Work Order</option>
																														<option value="option3">Everything Else</option>
																													</select>
																												</fieldset>
																											</div>

																											<div>
																												<FormLabel>Message</FormLabel><br />
																													<FormTextarea name='comments'></FormTextarea>
																											</div>
																											
																											<BtnWrap>
																											<FormButton type='submit'>Send Message</FormButton>
																											</BtnWrap>
																								</Form>
																								</FormContent>
																							</FormWrap>
																						</>
																						</Column2>
																				</InfoRow>
																		</InfoWrapper>
																</InfoContainer>
														</>
												)
}

export default ContactForm
