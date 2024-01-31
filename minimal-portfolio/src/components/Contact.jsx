import React from 'react'

function Contact() {
  return (
    <div className='flex flex-col mb-10 mx-auto'>
      <div className='flex justify-center items-center'>
        <form 
          className='flex flex-col w-full md:w-1/2'
          action='https://getform.io/slug'
          method='POST'
        >
          <input 
            type='text'
            name='name'
            placeholder='Name'
            className='p-2 bg-transparent border-2 rounded-md focus:outline-none'
          />
          <input 
            type='text'
            name='email'
            placeholder='Email'
            className='my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none'
          />
          <textarea 
          name='message'
          placeholder='Message'
          rows='10'
          className=''
          >

          </textarea>
        </form>

      </div>
      
    </div>
  )
}

export default Contact
