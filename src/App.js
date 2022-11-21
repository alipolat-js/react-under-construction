import React from 'react'

const App = () => {
  return (
    <div className='container h-full min-h-screen mx-auto flex items-center justify-between flex-col px-8'>
      <div></div>

      {/* content */}
      <div className='text-center font-bold max-w-4xl py-52'>
        <h1 className='font-extrabold text-5xl sm:text-6xl md:text-7xl text-white'>COMING SOON</h1>

        <h2 className='pt-8 text-2xl text-gray-200 font-bold'>My website is currently under construction.</h2>

        <p className='pt-4 text-xl text-gray-200'>You can reach me at the e-mail address below or follow me on social media to follow the developments.</p>

        <a href='mailto:contact@alipolat.tech' title='contact@alipolat.tech' target={'_blank'} rel="noopener noreferrer" className='text-white mt-4 hover:text-fuchsia-500 duration-300 block text-xl'>
          contact@alipolat.tech
        </a>
      </div>

      {/* footer - cr */}
      <footer className='flex items-baseline justify-between w-full flex-wrap sm:flex-row-reverse text-gray-200 pb-2'>
        {/* social media buttons */}
        <span className='flex justify-between w-24 text-xl text-center'>
          <a href='https://tr.linkedin.com/in/-alipolat' title='__alipolat' target={'_blank'} rel="noopener noreferrer" className='text-white hover:text-fuchsia-500 duration-300 mr-1'>
            <i className="fa-brands fa-linkedin" />
          </a>

          <a href='https://twitter.com/_alipolat' title='_alipolat' target={'_blank'} rel="noopener noreferrer" className='text-white hover:text-fuchsia-500 duration-300 mr-1'>
            <i className="fa-brands fa-twitter" />
          </a>

          <a href='https://www.instagram.com/__alipolat/' title='Ali POLAT' target={'_blank'} rel="noopener noreferrer" className='text-white hover:text-fuchsia-500 duration-300 mr-1'>
            <i className="fa-brands fa-instagram" />
          </a>
        </span>

        {/* copyright */}
        <span className='mt-4'>
          <a href='https://alipolat.tech' title='alipolat.tech' target={'_blank'} rel="noopener noreferrer" className='text-white mt-4 hover:text-fuchsia-500 duration-300 mr-1'>
            Ali POLAT
          </a>
          &copy; Copyright 2022. All rights reserved.
        </span>
      </footer>
    </div>
  )
}

export default App