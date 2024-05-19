import React from 'react'
import Input from './Form/Input'
import useForm from "../Hooks/useForm"
import Button from './Form/Button';

const InvestForm = () => {
  const username = useForm();
  const email = useForm("email");
  const phone = useForm("phone");
  const number = useForm("number");
  
  return (
    <form>
        <Input />
        <Input />
    </form>
  )
}

export default InvestForm