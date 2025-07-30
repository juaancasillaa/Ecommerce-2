import { useState } from "react"
import axios from "axios"
import styled from "styled-components"
import backgroundImage from "./image/back.png"

const PageContainer = styled.div`
  min-height: 100vh;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 1;
  }
`

const FormContainer = styled.div`
  max-width: 48rem;
  width: 100%;
  position: relative;
  z-index: 2;
`

const FormCard = styled.div`
  background-color: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.4);
  border-radius: 0.5rem;
  overflow: hidden;
`

const Header = styled.div`
  background-color: black;
  color: white;
  padding: 2rem;
  text-align: center;
`

const Title = styled.h1`
  font-size: 1.875rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  margin: 0 0 0.5rem 0;
`

const Subtitle = styled.p`
  color: #d1d5db;
  margin: 0;
`

const FormContent = styled.div`
  padding: 2rem;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`

const Label = styled.label`
  display: block;
  font-size: 0.875rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 0.5rem;
`

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 2px solid ${(props) => (props.hasError ? "#ef4444" : "#e5e7eb")};
  border-radius: 0.5rem;
  font-size: 1rem;
  transition: border-color 0.2s ease-in-out;

  &:focus {
    outline: none;
    border-color: ${(props) => (props.hasError ? "#ef4444" : "black")};
  }

  &::placeholder {
    color: #9ca3af;
  }
`

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 2px solid ${(props) => (props.hasError ? "#ef4444" : "#e5e7eb")};
  border-radius: 0.5rem;
  font-size: 1rem;
  transition: border-color 0.2s ease-in-out;
  resize: none;
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: ${(props) => (props.hasError ? "#ef4444" : "black")};
  }

  &::placeholder {
    color: #9ca3af;
  }
`

const ErrorMessage = styled.p`
  margin-top: 0.25rem;
  font-size: 0.875rem;
  color: #dc2626;
  display: flex;
  align-items: center;
  gap: 0.25rem;
`

const ErrorIcon = styled.svg`
  width: 1rem;
  height: 1rem;
  fill: currentColor;
`

const SubmitButton = styled.button`
  width: 100%;
  padding: 1rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 1.125rem;
  transition: all 0.2s ease-in-out;
  border: none;
  cursor: ${(props) => (props.isSubmitting ? "not-allowed" : "pointer")};
  background-color: ${(props) => (props.isSubmitting ? "#9ca3af" : "black")};
  color: ${(props) => (props.isSubmitting ? "#6b7280" : "white")};

  &:hover {
    background-color: ${(props) => (props.isSubmitting ? "#9ca3af" : "#374151")};
    transform: ${(props) => (props.isSubmitting ? "none" : "scale(1.02)")};
  }

  &:active {
    transform: ${(props) => (props.isSubmitting ? "none" : "scale(0.98)")};
    background-color: ${(props) => (props.isSubmitting ? "#9ca3af" : "#1f2937")};
  }
`

const LoadingSpinner = styled.svg`
  animation: spin 1s linear infinite;
  margin-left: -0.25rem;
  margin-right: 0.75rem;
  height: 1.25rem;
  width: 1.25rem;
  color: #6b7280;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`

const SubmitError = styled.div`
  background-color: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 0.5rem;
  padding: 1rem;
`

const SubmitErrorText = styled.p`
  color: #dc2626;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0;
`

const SubmitErrorIcon = styled.svg`
  width: 1.25rem;
  height: 1.25rem;
  fill: currentColor;
`

const SuccessContainer = styled.div`
  min-height: 100vh;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 1;
  }
`

const SuccessCard = styled.div`
  max-width: 28rem;
  width: 100%;
  text-align: center;
  position: relative;
  z-index: 2;
`

const SuccessContent = styled.div`
  background-color: black;
  color: white;
  padding: 2rem;
  border-radius: 0.5rem;
`

const SuccessIcon = styled.div`
  width: 4rem;
  height: 4rem;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
`

const SuccessCheckIcon = styled.svg`
  width: 2rem;
  height: 2rem;
  color: black;
`

const SuccessTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`

const SuccessMessage = styled.p`
  color: #d1d5db;
  margin-bottom: 1.5rem;
`

const SuccessButton = styled.button`
  background-color: white;
  color: black;
  padding: 0.5rem 1.5rem;
  border-radius: 0.25rem;
  border: none;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #f3f4f6;
  }
`

const ButtonContent = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
`
function Contact() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues({ ...values, [name]: value })

    if (errors[name]) {
      setErrors({ ...errors, [name]: "" })
    }
  }

  const validate = () => {
    const formErrors = {}

    if (!values.name.trim()) {
      formErrors.name = "Name is required"
    }

    if (!values.email.trim()) {
      formErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      formErrors.email = "Please enter a valid email address"
    }

    if (!values.phone.trim()) {
      formErrors.phone = "Phone number is required"
    } else if (!/^\d{10}$/.test(values.phone.replace(/\D/g, ""))) {
      formErrors.phone = "Please enter a valid 10-digit phone number"
    }

    if (!values.subject.trim()) {
      formErrors.subject = "Subject is required"
    }

    if (!values.message.trim()) {
      formErrors.message = "Message is required"
    } else if (values.message.trim().length < 10) {
      formErrors.message = "Message must be at least 10 characters long"
    }

    return formErrors
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const formErrors = validate()

    if (Object.keys(formErrors).length === 0) {
      setIsSubmitting(true)
      try {
        await axios.post("/Contact", values)
        setIsSubmitted(true)
        setValues({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        })
      } catch (err) {
        console.error("Submission error:", err)
        setErrors({ submit: "Failed to send message. Please try again." })
      } finally {
        setIsSubmitting(false)
      }
    } else {
      setErrors(formErrors)
    }
  }

  if (isSubmitted) {
    return (
      <SuccessContainer>
        <SuccessCard>
          <SuccessContent>
            <SuccessIcon>
              <SuccessCheckIcon fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </SuccessCheckIcon>
            </SuccessIcon>
            <SuccessTitle>Message Sent!</SuccessTitle>
            <SuccessMessage>Thank you for contacting us. We'll get back to you soon.</SuccessMessage>
            <SuccessButton onClick={() => setIsSubmitted(false)}>Send Another Message</SuccessButton>
          </SuccessContent>
        </SuccessCard>
      </SuccessContainer>
    )
  }

  return (
    <PageContainer>
      <FormContainer>
        <FormCard>
          <Header>
            <Title>Get In Touch</Title>
            <Subtitle>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</Subtitle>
          </Header>

          <FormContent>
            <Form onSubmit={handleSubmit}>
              <FormRow>
                <FormGroup>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    hasError={!!errors.name}
                    placeholder="Enter your full name"
                  />
                  {errors.name && (
                    <ErrorMessage>
                      <ErrorIcon viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        />
                      </ErrorIcon>
                      {errors.name}
                    </ErrorMessage>
                  )}
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    hasError={!!errors.email}
                    placeholder="Enter your email address"
                  />
                  {errors.email && (
                    <ErrorMessage>
                      <ErrorIcon viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        />
                      </ErrorIcon>
                      {errors.email}
                    </ErrorMessage>
                  )}
                </FormGroup>
              </FormRow>

              <FormRow>
                <FormGroup>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={values.phone}
                    onChange={handleChange}
                    hasError={!!errors.phone}
                    placeholder="Enter your phone number"
                  />
                  {errors.phone && (
                    <ErrorMessage>
                      <ErrorIcon viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        />
                      </ErrorIcon>
                      {errors.phone}
                    </ErrorMessage>
                  )}
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    type="text"
                    id="subject"
                    name="subject"
                    value={values.subject}
                    onChange={handleChange}
                    hasError={!!errors.subject}
                    placeholder="Enter message subject"
                  />
                  {errors.subject && (
                    <ErrorMessage>
                      <ErrorIcon viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        />
                      </ErrorIcon>
                      {errors.subject}
                    </ErrorMessage>
                  )}
                </FormGroup>
              </FormRow>

              <FormGroup>
                <Label htmlFor="message">Message *</Label>
                <TextArea
                  id="message"
                  name="message"
                  value={values.message}
                  onChange={handleChange}
                  rows={5}
                  hasError={!!errors.message}
                  placeholder="Enter your message here..."
                />
                {errors.message && (
                  <ErrorMessage>
                    <ErrorIcon viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </ErrorIcon>
                    {errors.message}
                  </ErrorMessage>
                )}
              </FormGroup>

              {errors.submit && (
                <SubmitError>
                  <SubmitErrorText>
                    <SubmitErrorIcon viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </SubmitErrorIcon>
                    {errors.submit}
                  </SubmitErrorText>
                </SubmitError>
              )}

              <SubmitButton type="submit" disabled={isSubmitting} isSubmitting={isSubmitting}>
                {isSubmitting ? (
                  <ButtonContent>
                    <LoadingSpinner xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </LoadingSpinner>
                    Sending Message...
                  </ButtonContent>
                ) : (
                  "Send Message"
                )}
              </SubmitButton>
            </Form>
          </FormContent>
        </FormCard>
      </FormContainer>
    </PageContainer>
  )
}

export default Contact