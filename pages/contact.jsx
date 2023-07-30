import {useEffect, useRef, useState} from "react"
import Head from "next/head"
import {Triangle} from "react-loader-spinner"
const ContactPage = () => {
  const emailRef = useRef()
  const nameRef = useRef()
  const messageRef = useRef()
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState()
  const handelSendMessage = async (e) => {
    setLoading(true)
    e.preventDefault()
    const email = emailRef.current.value
    const name = nameRef.current.value
    const message = messageRef.current.value
    const userMessage = {
      email,
      name,
      message,
    }
    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(userMessage),
      headers: {
        "Content-Type": "application/json",
      },
    })

    const data = await response.json()
    if (data) {
      setLoading(false)
      setMessage(data)
    }
    e.target.reset()
  }
  useEffect(() => {
    if (message) {
      const timeOut = setTimeout(() => {
        setMessage()
      }, 1500)
      return () => clearTimeout(timeOut)
    }
  }, [message])
  return (
    <section className="min-h-screen mx-auto max-w-lg">
       <Head>
        <title>Contact</title>
      </Head>
      <h1 className="text-white my-3 text-3xl font-bold text-center">
        How Can I Help You?
      </h1>
      {loading && (
        <div className="flex flex-col justify-center items-center">
          <Triangle
            height="40"
            width="40"
            color="#0F172A"
            ariaLabel="triangle-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
          <span className="text-slate-900 text-center my-2">Sending...</span>
        </div>
      )}
      {message && (
        <div className="text-green-800 text-xl text-center font-bold">
          {message.message}
        </div>
      )}
      <form className="flex flex-col gap-2" onSubmit={handelSendMessage}>
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-white">
            Your email
          </label>
          <input
            ref={emailRef}
            type="email"
            className="focus:outline-none p-1 rounded"
            placeholder="enter email"
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="text-white">
            Your Name
          </label>
          <input
            ref={nameRef}
            type="text"
            className="focus:outline-none p-1 rounded"
            placeholder="enter name"
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="message" className="text-white">
            Your Message
          </label>
          <textarea
            ref={messageRef}
            name="message  "
            className="focus:outline-none p-1 rounded"
            required
            cols="30"
            rows="10"></textarea>
        </div>
        <div className="rounded w-32 p-2 flex place-self-end text-white bg-slate-900 text-center">
          <button type="submit">Send Message</button>
        </div>
      </form>
    </section>
  )
}

export default ContactPage
