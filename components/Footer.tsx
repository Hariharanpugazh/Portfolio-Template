import React from 'react'

const Footer = () => {
  return (
    <footer className='mb-10 px-4 text-center text-gray-500'>
        <small className='mb-2 text-xs block'>&copy; 2024 Hariharan P. All right reserved.</small>
        <p className='text-xs'>
            <span className='font-semibold'>
                About this website:
            </span>
            built with React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS, Framer Motion, React Email & Resend, Vercel hosting.
        </p>
    </footer>
  )
}

export default Footer