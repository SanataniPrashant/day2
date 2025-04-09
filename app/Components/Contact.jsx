"use client";
import axios from "axios";
import { useState } from "react"


export default function Contact() {
  const [input,setInput] = useState();

  const  handleInput = (e) => {
    const name = e.target.name;
    const  value = e.target.value;
    setInput({...input,[name]: value});  

    console.log(input);

  }

  const   handleFormSubmit = async(e) => {
    e.preventDefault();
    console.log(input);
    const res =  await axios.post('http://localhost:3000/api/Inquiry', input)
    console.log(res);

  }


  return (
    <>
    <section className="bg-gray py-12 px-4" id="contact">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p className="text-gray-600 mb-8">
          If you have any questions or want to work with us? Send a message and we will get back to you soon.
        </p>

        <form className="space-y-6">
          <div>
            <input type="text" placeholder="Your Name" name="name" className="w-full px-4 py-3 border border-gray rounded-md  focus:ring-2 focus:ring-blue" onChange={handleInput} required/>
          </div>
          <div>
            <input type="email" placeholder="Your Email" name="email" className="w-full px-4 py-3 border border-gray rounded-md  focus:ring-2 focus:ring-blue" onChange={handleInput} required/>
          </div>
          <div>
            <textarea placeholder="Your Message" rows="5" name="query" className="w-full px-4 py-3 border border-gray rounded-md focus:ring-blue" onChange={handleInput} required></textarea>
          </div>
          <button type="submit" onClick={handleFormSubmit}>
            Send Message
          </button>
        </form>
      </div>
    </section>

    </>
  )
}



