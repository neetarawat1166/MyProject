import React from 'react'
import food1 from './images/food2.jpg'

const Card = () => {
  return (
    <>
        <div className='w-[400px] border-2 border-gray-200 rounded-xl overflow-hidden '>
            <div className='h-[250px] overflow-hidden'>
                <img src={food1} alt="" className='w-full h-full duration-500 hover:scale-110 object-cover' />
            </div>
            <div className='p-4'>
              <h2 className='text-2xl font-semibold'>Delicious Pancake</h2>
              <p className='text-[16px] pb-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores doloribus ab modi aliquid dolor nihil, molestiae velit aspernatur et animi?</p>
              <div className='flex gap-4'>
                <select>
                  <option value="">Half</option>
                  <option value="">Full</option>
                </select>
                <b>₹ 130</b>
              </div>
            </div>
        </div>
    </>
  )
}

export default Card