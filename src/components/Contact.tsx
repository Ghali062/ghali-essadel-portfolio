import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
import emailjs from '@emailjs/browser';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

function Contact() {

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const form = useRef();

  const sendEmail = async (e: any) => {
    e.preventDefault();

    const invalidName = name.trim() === '';
    const invalidEmail = email.trim() === '';
    const invalidMessage = message.trim() === '';

    setNameError(invalidName);
    setEmailError(invalidEmail);
    setMessageError(invalidMessage);

    if (invalidName || invalidEmail || invalidMessage) return;

    try {
      const templateParams = {
        name,
        email,
        message,
      };

      // Replace with your EmailJS IDs: https://dashboard.emailjs.com/admin
      await emailjs.send('service_3ss3a2j', 'template_8vuseug', templateParams, 'V0US4xeL7zLQ9SPp6');

      setName('');
      setEmail('');
      setMessage('');

      console.log('SUCCESS! Your message has been sent.');
    } catch (error) {
      console.error('FAILED to send message:', error);
    }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Got a project waiting to be realized? Let's collaborate and make it happen!</p>
          <p style={{ marginTop: '10px', fontSize: '1.1em' }}>
            <strong>Email:</strong> <a href="mailto:g.essadel@gmail.com" style={{ color: '#5000ca', textDecoration: 'none' }}>g.essadel@gmail.com</a>
          </p>
          <Box
            ref={form}
            component="form"
            noValidate
            autoComplete="off"
            className='contact-form'
          >
            <div className='form-flex'>
              <TextField
                required
                id="outlined-required"
                label="Your Name"
                placeholder="What's your name?"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                error={nameError}
                helperText={nameError ? "Please enter your name" : ""}
              />
              <TextField
                required
                id="outlined-required"
                label="Email / Phone"
                placeholder="How can I reach you?"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                error={emailError}
                helperText={emailError ? "Please enter your email or phone number" : ""}
              />
            </div>
            <TextField
              required
              id="outlined-multiline-static"
              label="Message"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              error={messageError}
              helperText={messageError ? "Please enter the message" : ""}
            />
            <Button variant="contained" endIcon={<SendIcon />} onClick={sendEmail}>
              Send
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;