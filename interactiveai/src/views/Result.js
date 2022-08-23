import React from 'react'

const Result = () => {
  return (
    <React.Fragment>
      <section>
        <div className='w-screen h-screen grid grid-rows-2 text-black text-4xl md:grid-rows-2'>
          <div className=' w-full h-full centered md:w-screen'>
            <div className="min-h-screen text-black" style={{ display: 'block', alignItems: 'center' }}>
              <main className="container mx-auto px-6 pt-16 flex-1 text-center">
                <h2 className="text-xl md:text-xl lg:text-xl uppercase font-bold mb-16">Here are your results... </h2>
              </main>
            </div>
          </div>

          {/* page 2 */}
          <div className='w-full h-full bg-white centered md:w-screen'>
          <div className="min-h-screen text-black" style={{ display: 'block', alignItems: 'center' }}>
              <main className="container mx-auto px-6 pt-16 flex-1 text-center">
                <h2 className="text-xl md:text-xl lg:text-xl uppercase mb-16">Sample text </h2>
              </main>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Result