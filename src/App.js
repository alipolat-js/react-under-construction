import React from 'react'

const App = () => {
  return (
    <div className='w-full h-full min-h-screen bg-gradient-to-br from-red-600 to-red-500 text-gray-100'>
      <div className='container w-full max-w-6xl h-full min-h-screen mx-auto flex items-center justify-between flex-col'>

        {/* content */}
        <div className='text-center font-bold max-w-4xl my-52'>
          <h1 className='font-lato text-4xl'>Under Construction</h1>

          <h2 className='pt-8 text-2xl'>Our website is currently under construction.</h2>

          <p className='pt-4 text-xl'>You can reach us via Whatsapp and E-Mail by clicking the buttons below or you can follow our social media accounts at the bottom of the page.</p>

          {/* Contact Buttons */}
          <div className='pt-10 text-3xl'>
            <a href='tel:+909999999999' className='mr-8 hover:text-black duration-300'>
              <i className="fa-solid fa-phone" />
            </a>

            <a href='mailto:youremail@yourdomain.com' className='text-white hover:text-black duration-300'>
              <i className="fa-solid fa-envelope" />
            </a>
          </div>
        </div>

        {/* footer - cr */}
        <footer className='flex items-center justify-between w-full max-w-full text-gray-200'>
          {/* copyright */}
          <span className='font-lato'>
            &copy; Copyright 2022. All rights reserved.
          </span>

          {/* social media buttons */}
          <span className='flex items-center justify-between w-24 text-xl'>
            <a href='www.latform.com/youraccounts' className='hover:text-black duration-300'>
              <i className="fa-brands fa-linkedin" />
            </a>

            <a href='www.latform.com/youraccounts' className='hover:text-black duration-300'>
              <i className="fa-brands fa-facebook" />
            </a>

            <a href='www.latform.com/youraccounts' className='hover:text-black duration-300'>
              <i className="fa-brands fa-instagram" />
            </a>
          </span>
        </footer>
      </div>
    </div>
  )
}

export default App