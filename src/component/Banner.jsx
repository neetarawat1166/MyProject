import React from 'react'
import bgimg from './images/food1.webp'

const Banner = () => {
  return (
    <>
        <section className='md:py-[200px] bg-no-repeat bg-cover relative bg-center' style={{backgroundImage:`url(${bgimg})`}}>
            <div className='absolute top-0 left-0 w-full h-full bg-[#25262780]'></div>
            <div className="container mx-auto relative z-50 px-4">
                <div className="text-center text-white md:w-[50%] mx-auto">
                    <h1 className='text-4xl pb-2 font-semibold text-center'>Indulge in Flavorful Creations- Taste in Every Bite </h1>
                    <p className='text-[18px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores rem omnis deleniti iusto culpa placeat reprehenderit sint necessitatibus asperiores numquam?</p>
                </div>
            </div>
        </section>
    </>
  )
}

export default Banner