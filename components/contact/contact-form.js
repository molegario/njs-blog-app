import { useContext, useRef, useState } from 'react';
import classes from './contact-form.module.css';
import axios from 'axios';
import NotificationContext from '../../store/notification-context';

export default function ContactForm({ onSendMessage }) {
  const notificatioCtx = useContext(NotificationContext)
  const [isInvalid, setIsInvalid] = useState(false);

  const emailRef = useRef();
  const nameRef = useRef();
  const messageRef = useRef();

  function resetInvalid() {
    setIsInvalid(false);
  }

  function resetForm() {
    emailRef.current.value = '';
    nameRef.current.value = '';
    messageRef.current.value = '';
    resetInvalid();
  }

  function sendMessageHandler(evt) {
    evt.preventDefault();

    notificatioCtx.showNotification(
      {
        title: 'Registering contact message',
        message: `Registering new contact request to DB`,
        status: 'pending',
      }
    );

    const enteredEmail = emailRef.current.value;
    const enteredName = nameRef.current.value;
    const enteredMessage = messageRef.current.value;

    if(
      !enteredEmail ||
      enteredEmail.trim() === '' ||
      !enteredEmail.includes('@') ||
      !enteredName ||
      enteredName.trim() === '' ||
      !enteredMessage ||
      enteredMessage.trim() === ''
    ) {
      notificatioCtx.showNotification({
        title: 'Invalid message posted',
        message: 'Invalid message.  Please adjust your values.',
        status: 'error'
      });
      setIsInvalid(true);
      return;
    }

    axios({
      method: 'post',
      url: '/api/contacts',
      data: {
        email: emailRef.current.value,
        name: nameRef.current.value,
        message: messageRef.current.value,
      }
    }).then(
      response=>{
        if(
          response && response.status === 201 && response.statusText === 'Created'
        ) {
          return response;
        } else {
          throw new Error(response.data.message ?? 'Failed to insert record');
        }
      }
    ).then(
      response=>{
        notificatioCtx.showNotification({
          title: `Contact was successfully delivered`,
          message: `Posted message from ${nameRef.current.value}`,
          status: 'success'
        });
        resetForm();
      }).catch((err)=>{
        notificatioCtx.showNotification({
          title: `Failed to send message`,
          message: err.message ?? 'Message was not delivered. Please try again.',
          status: 'error',
        });
      }
    );
  }

  return <section className={classes.contact} onSubmit={sendMessageHandler}>
    <h1>How can I help?</h1>
    <form className={classes.form}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='text' id='email' name='email' ref={emailRef} onChange={resetInvalid} required />
        </div>
        <div className={classes.control}>
          <label htmlFor='name'>Your Name</label>
          <input type='name' id='name' name='name' ref={nameRef} onChange={resetInvalid} required />
        </div>
      </div>
      <div className={classes.control}>
        <label htmlFor='message'>Your Message</label>
        <textarea id='message' name='message' rows={5} required ref={messageRef} onChange={resetInvalid} ></textarea>
      </div>
      {
        isInvalid && <p className='center'>Please enter a valid email address, name, and message!</p>
      }
      <div className={classes.actions}>
        <button>Send Message</button>
      </div>
    </form>
  </section>;
}