"use client"
import React,{ useState } from 'react'
import Link from 'next/link'

const Shorten = () => {
    const [url, setUrl] = React.useState('')
    const [shortUrl, setShortUrl] = React.useState('')
    const [generated, setGenerate] = React.useState("")

    const generate = () => {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
    
      const raw = JSON.stringify({
        url: url, // Use the state variable `url`
        shortUrl: shortUrl, // Use the state variable `shortUrl`
      });
    
      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };
    
      fetch("/api/generate", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          setGenerate(`${process.env.NEXT_PUBLIC_HOST}/${shortUrl}`);
          setUrl("");
          setShortUrl("");
          console.log(result);
          alert(result.message); // Show the alert with the message from the API
        })
        .catch((error) => {
          console.error(error);
          alert("An error occurred while generating the short URL."); // Show an error alert
        });
    };
    
  return (
    <div className='mx-auto max-w-lg bg-purple-100 my-16 p-8 rounded-lg flex flex-col gap-4'>
      <h1 className='font-bold text-2xl'>Generate your short URL</h1>
      <div className='flex flex-col gap-2'>
        <input type='text' 
        value={url}
        className='focus:outline-purple-500 bg-purple-50  rounded-sm p-1'
        placeholder='Enter your URL here'
        onChange={e => {setUrl(e.target.value)}} />

        <input type='text'
        value={shortUrl} 
        className='focus:outline-purple-500 bg-purple-50  rounded-sm px-6 py-3'
        placeholder='Enter your prefered short URL text '
        onChange={e => {setShortUrl(e.target.value)}} />
        <button 
        onClick={generate}
        className='bg-purple-500 rounded-lg shoadow-lg p-2 py-1 my-3 text-white font-bold'>
          Generate
        </button>
      </div>

      {generated && <> <span className='font-bold text-lg'>
        Your Link</span> <code><Link target='_blank' href={generated}>{generated}</Link>
        </code>  </>}
    </div>
  )
}

export default Shorten
// Note: Ensure the file path matches the route in your application setup.
// For example, in Next.js, the file should be placed in the `pages` directory or configured correctly in the app directory.