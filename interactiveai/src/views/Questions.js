import React from 'react'

const Questions = () => {
  return (
    <React.Fragment>
      <section>
        <div className='w-screen h-screen grid grid-rows-2 text-black text-4xl md:grid-cols-2'>
          <div className=' w-full h-full centered md:h-screen'>
            <p>Question</p>
          </div>

          {/* page 2 */}
          <div className='w-full h-full bg-white centered md:h-screen'>
            <p>Options</p>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Questions