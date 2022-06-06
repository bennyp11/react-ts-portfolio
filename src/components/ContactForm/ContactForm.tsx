import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import './ContactForm.css';

interface IFormInput {
    email: string;
    firstName: string;
    lastName: string;
    mobile: number;
    job: string;
  }
  
  const schema = yup.object().shape({
    email: yup.string().required().email(),
    firstName: yup.string().required().min(2).max(25),
    lastName: yup.string().required().min(2).max(25),
    mobile: yup.number().required().min(8).max(120),
    job: yup.string().required().min(6).max(50)
  });

export default function ContactForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<IFormInput>({
        resolver: yupResolver(schema),
      });
    
const [json, setJson] = useState<string>();

const onSubmit = (data: IFormInput) => {
    console.log(data);
};
  
  return (
    <div className="contact-form-page">
    <form onSubmit={handleSubmit(onSubmit)} >
      <input type="text" placeholder="First name" {...register("firstName", {required: true, maxLength: 80})} />
      <input type="text" placeholder="Last name" {...register("lastName", {required: true, maxLength: 100})} />
      <input type="text" placeholder="Email" {...register("email", {required: true, pattern: /^\S+@\S+$/i})} />
      <input type="tel" placeholder="Mobile number" {...register("mobile", {required: false, minLength: 6, maxLength: 12})} />
      <input type="text" placeholder="Job Title" {...register("job", {required: true, minLength: 6, maxLength: 40})} />
      <input type="submit" />
    </form>
    </div>
  );
}
