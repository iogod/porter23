import React from 'react'

function About() {
  return (
    <div className='text-white grid h-screen  lg:w-6/12 md:w-11/12 sm:w-11/12 m-auto  text-2xl'> 
    
    
 
    

 <div className='grid grid-cols-1  w-full  m-auto   text-gray-500 gap-16 dark:text-gray-400   text-2xl  h-full  p-6  text-left'>
 <div className=' flex  flex-col  uppercase justify-center  text-left  w-full items-center  gap-3  '>
    <h2 className='text-5xl  text-white text-bold'>About</h2>
    <h3>Full Stack Developer</h3>
    <h3 className='text-xl'> Based in Los Angeles</h3>
    <h2>Email:</h2>
 
    <button type='button'>
    <a className='uppercase   underline lg:text-2xl md:text-xl sm:text-xl  text-teal-200' href = "mailto:johnson.roscoea@gmail.com<">JOHNSON.ROSCOEA@gmail.com</a> 

    </button>

  
    

    
    </div>

<div className='flex  flex-col gap-8 items-start  '>



<div className='first-letter:text-3xl first-letter:text-teal-200 '>My name is Roscoe Johnson, I create secure stateful web applications, 
    
    templates, and web experiences for clients to engage and grow their business. </div>



<strong className='text-4xl'>
    Developer Details
    </strong>
    <div>I specialize in developing ideas into stateful applications. I develop front end templates for e-commerce and custom
        full stack applications.
    </div>

    <strong className='text-4xl'>
        Expertise
    </strong>

    <div>I have deep expertise in Firebase Express React Node.js (FERN) as well as Shopify e-commerce stack.
         I primarily use CSS (SCSS), Bootstrap, and Tailwind CSS for styling. </div>



    <div className='grid grid-cols-2 gap-8  m-auto p-3 text-2xl '>
    <strong className='text-5xl'>
        Skills
    </strong>
        <div>JavaScript</div>
        <div>HTML</div>
        <div>CSS</div>
        <div>Express</div>
        <div>React.JS</div>
        <div>Node.JS</div>
        <div>Firebase Realtime Database</div>
        <div>PostgreSQL</div>
        <div>REST APIs</div>
        <div>Context API</div>
        <div>Vite</div>
        <div>Github</div>
        <div>Tailwind CSS</div>
        <div>Bootstrap</div>
        <div>SCSS</div>
        <div>OAuth</div>
        <div>JEST</div>
        <div>Java</div>
        <div>Python</div>
        <div>NPM</div>
        <div>Shopify CLI/Liquid</div>
        <div>Z Shell (zsh)</div>
        <div>Data Analysis</div>
        
        </div>

         <strong className='text-4xl'>
        Education 
    </strong>

<div className='text-center'> MS Systems Engineering University of Southern California (<a className='text-red-800'>USC </a> <a className='text-yellow-400'>2016</a>)</div>

</div>




 </div>



 
 <div className='mb-2 p-5 w-full italic'>Regardless what you're into, regardless what you've been through. I feel like I have to tell you, you've got something to contribute <div className='not-italic'>- Airmiess Joseph Asghedom</div> </div>
 
    </div>
  )
}

export default About