import Validate from './components/validate';
import Form from './components/Form';
import { View } from 'react-native';
import { useState } from 'react'

export default function App() {
  const [textInputName, setTextInputName] = useState('');
  const [textInputEmail, setTextInputEmail] = useState('');
  const [textInputPassword, setTextInputPassword] = useState('');
  const [submit, setSubmit] = useState(true)
  const [emailValidError, setEmailValidError] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();
    let reg = /[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}/;
    if (!textInputName.trim()) {
      alert('Please Enter Name');
      return;
    }
    if (!textInputEmail.trim()) {
      alert('Please Enter Email');
      return;
    }
    if (!textInputPassword.trim()) {
      alert('Please Enter Password');
      return;
    }
    if (textInputEmail.length === 0) {
      setEmailValidError('email address must be entered');
      alert('email address must be entered')
      return;
    }
    if (reg.test(textInputEmail) === false) {
      setEmailValidError('enter valid email address');
      alert('email address must be entered')
      return;
    }
    if (reg.test(textInputEmail) === true) {
      setEmailValidError('');
    }
    alert('Success');
    setSubmit(false)
  }
  return (
    <>
      {submit ? <Form
        userName={textInputName}
        userEmail={textInputEmail}
        userPassword={textInputPassword}
        setName={setTextInputName}
        setEmail={setTextInputEmail}
        setPassword={setTextInputPassword}
        onSubmit={onSubmit}
      /> : <Validate name={textInputName} />}
    </>
  );
}


