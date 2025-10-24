'use client';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { servicesData } from '../src/lib/servicesData';

// Main container with light background
const PageContainer = styled.div`
  min-height: 100vh;
  background-color: #f8f9fa;
  padding: 120px 24px 60px;

  @media screen and (max-width: 768px) {
    padding: 100px 20px 40px;
  }

  @media screen and (max-width: 480px) {
    padding: 90px 16px 30px;
  }
`;

const ContactContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const PageHeader = styled.div`
  margin-bottom: 40px;
  text-align: left;

  @media screen and (max-width: 768px) {
    margin-bottom: 30px;
  }
`;

const PageTitle = styled.h1`
  font-size: 48px;
  font-weight: 700;
  color: #010606;
  margin-bottom: 12px;
  line-height: 1.2;

  @media screen and (max-width: 768px) {
    font-size: 38px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

const PageSubtitle = styled.p`
  font-size: 18px;
  color: #555;
  line-height: 1.6;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;

  @media screen and (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Card = styled.div`
  background: #fff;
  border-radius: 8px;
  padding: 32px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);

  @media screen and (max-width: 768px) {
    padding: 24px;
  }

  @media screen and (max-width: 480px) {
    padding: 20px;
  }
`;

const IntroText = styled.p`
  color: #333;
  font-size: 16px;
  line-height: 1.7;
  margin-bottom: 24px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  color: #333;
  font-size: 14px;
  margin-bottom: 6px;
  font-weight: 500;
`;

const Input = styled.input`
  padding: 12px 14px;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  background-color: #fff;
  color: #111;
  font-size: 15px;
  transition: all 0.3s;

  &:focus {
    outline: none;
    border-color: #01bf71;
    box-shadow: 0 0 0 3px rgba(1, 191, 113, 0.1);
  }

  &::placeholder {
    color: #9ca3af;
  }

  &[aria-invalid="true"] {
    border-color: #ef4444;
  }
`;

const Select = styled.select`
  padding: 12px 14px;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  background-color: #fff;
  color: #111;
  font-size: 15px;
  transition: all 0.3s;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #01bf71;
    box-shadow: 0 0 0 3px rgba(1, 191, 113, 0.1);
  }

  &[aria-invalid="true"] {
    border-color: #ef4444;
  }

  option {
    background-color: #fff;
    color: #111;
  }
`;

const TextArea = styled.textarea`
  padding: 12px 14px;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  background-color: #fff;
  color: #111;
  font-size: 15px;
  min-height: 140px;
  resize: vertical;
  transition: all 0.3s;
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: #01bf71;
    box-shadow: 0 0 0 3px rgba(1, 191, 113, 0.1);
  }

  &::placeholder {
    color: #9ca3af;
  }

  &[aria-invalid="true"] {
    border-color: #ef4444;
  }
`;

const SubmitButton = styled.button`
  background: linear-gradient(135deg, #01bf71 0%, #00a85e 100%);
  color: #fff;
  padding: 14px 32px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 2px 8px rgba(1, 191, 113, 0.2);

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(1, 191, 113, 0.3);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(1, 191, 113, 0.3);
  }

  &:disabled {
    background: #9ca3af;
    cursor: not-allowed;
    transform: none;
  }
`;

const ErrorMessage = styled.p`
  color: #ef4444;
  font-size: 13px;
  margin-top: 4px;
`;

const SuccessMessage = styled.div`
  background-color: #d1fae5;
  color: #065f46;
  padding: 16px;
  border-radius: 4px;
  border-left: 4px solid #01bf71;
  font-weight: 500;
  margin-bottom: 20px;
`;

const ContactInfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ContactInfoTitle = styled.h3`
  color: #01bf71;
  font-size: 20px;
  margin-bottom: 8px;
  font-weight: 600;
`;

const ContactInfoItem = styled.div`
  margin-bottom: 12px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const ContactInfoLabel = styled.p`
  color: #6b7280;
  font-size: 13px;
  margin-bottom: 4px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const ContactInfoValue = styled.p`
  color: #333;
  font-size: 16px;
  line-height: 1.5;
`;

const ContactLink = styled.a`
  color: #01bf71;
  text-decoration: none;
  font-size: 16px;
  transition: color 0.3s;

  &:hover {
    color: #00a85e;
    text-decoration: underline;
  }

  &:focus {
    outline: 2px solid #01bf71;
    outline-offset: 2px;
    border-radius: 2px;
  }
`;

export default function ContactPageContent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Prefill subject from URL query parameter
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const subjectParam = params.get('subject');
      if (subjectParam && serviceCategories.includes(subjectParam)) {
        setFormData(prev => ({ ...prev, subject: subjectParam }));
      }
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject) {
      newErrors.subject = 'Please select a subject';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({
          name: '',
          email: '',
          company: '',
          subject: '',
          message: '',
        });
        // Hide success message after 5 seconds
        setTimeout(() => setSubmitSuccess(false), 5000);
      } else {
        setErrors({ submit: 'Failed to submit form. Please try again.' });
      }
    } catch (error) {
      setErrors({ submit: 'An error occurred. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Extract main service categories for dropdown
  const serviceCategories = [
    'General Inquiry',
    ...servicesData.map(service => service.title)
  ];

  return (
    <PageContainer>
      <ContactContainer>
        <PageHeader>
          <PageTitle>Let's Build Together</PageTitle>
          <PageSubtitle>Contact Us Today</PageSubtitle>
        </PageHeader>

        <ContentGrid>
          <Column>
            <Card>
              {submitSuccess && (
                <SuccessMessage role="alert" aria-live="polite">
                  Thank you for your message! We'll get back to you soon.
                </SuccessMessage>
              )}

              {errors.submit && (
                <ErrorMessage role="alert">{errors.submit}</ErrorMessage>
              )}

              <Form onSubmit={handleSubmit} noValidate>
                <FormGroup>
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "error-name" : undefined}
                  />
                  {errors.name && (
                    <ErrorMessage id="error-name" role="alert">{errors.name}</ErrorMessage>
                  )}
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "error-email" : undefined}
                  />
                  {errors.email && (
                    <ErrorMessage id="error-email" role="alert">{errors.email}</ErrorMessage>
                  )}
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="company">Company</Label>
                  <Input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company (Optional)"
                  />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="subject">Subject *</Label>
                  <Select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    aria-invalid={!!errors.subject}
                    aria-describedby={errors.subject ? "error-subject" : undefined}
                  >
                    <option value="">Select a topic...</option>
                    {serviceCategories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </Select>
                  {errors.subject && (
                    <ErrorMessage id="error-subject" role="alert">{errors.subject}</ErrorMessage>
                  )}
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="message">Message *</Label>
                  <TextArea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project or inquiry..."
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "error-message" : undefined}
                  />
                  {errors.message && (
                    <ErrorMessage id="error-message" role="alert">{errors.message}</ErrorMessage>
                  )}
                </FormGroup>

                <SubmitButton type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </SubmitButton>
              </Form>
            </Card>
          </Column>

          <Column>
            <Card>
              <ContactInfoSection>
                <ContactInfoTitle>General Inquiries</ContactInfoTitle>
                <IntroText>
                  We'd love to work with you! Whether you're looking for expert civil construction services,
                  marine division support, or want to learn more about our commitment to Indigenous stewardship,
                  we're here to help. Fill out the form, and one of our team members will get back to you shortly.
                </IntroText>
                <ContactInfoItem>
                  <ContactInfoLabel>Email</ContactInfoLabel>
                  <ContactLink href="mailto:info@indigenousironconstruction.com">
                    info@indigenousironconstruction.com
                  </ContactLink>
                </ContactInfoItem>
                <ContactInfoItem>
                  <ContactInfoLabel>Phone</ContactInfoLabel>
                  <ContactLink href="tel:+15551234567">
                    (555) 123-4567
                  </ContactLink>
                </ContactInfoItem>
              </ContactInfoSection>
            </Card>

            <Card>
              <ContactInfoSection>
                <ContactInfoTitle>Careers</ContactInfoTitle>
                <ContactInfoItem>
                  <ContactInfoLabel>Email</ContactInfoLabel>
                  <ContactLink href="mailto:careers@indigenousironconstruction.com">
                    careers@indigenousironconstruction.com
                  </ContactLink>
                </ContactInfoItem>
                <ContactInfoItem>
                  <ContactInfoLabel>Join Our Team</ContactInfoLabel>
                  <ContactInfoValue>
                    We're always looking for talented individuals who share our commitment to quality 
                    and Indigenous values.
                  </ContactInfoValue>
                </ContactInfoItem>
              </ContactInfoSection>
            </Card>

          </Column>
        </ContentGrid>
      </ContactContainer>
    </PageContainer>
  );
}