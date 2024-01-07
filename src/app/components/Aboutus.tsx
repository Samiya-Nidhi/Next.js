import React from 'react'

const Aboutus = () => {
  return (
    <div>
      <div className="container pt-16 pb-16 grid-cols-2">
        <h2 className="font-bold text-2xl pb-4">About Us</h2>
        <div className="grid lg:grid-cols-[300px,1fr] gap-4">
            <div className="border border-gray-300 rounded-2xl grid place-items-center p-6 lg:p-0">
                <div className="text-center flex flex-col items-center gap-1">
                    <img className="rounded-full inline-block" 
                    src="/pp.PNG" 
                    width={80}
                    height={80}
                    alt="/pp.PNG"/>
                    <h2 className="text-gray-500 font-black text-[20px]">Auora Shahid</h2>
                    <p>CEO & Founder </p>
                    <img className="rounded- full inline-block" 
                    src="/quoto.PNG" 
                    width={30}
                    height={30}
                    alt="/quoto.PNG"/>
                    <p className="max-w-[200px] text-gray-500">product information with appropriate media content to send a precise product message to a 
                    specific target audience via a dedicated our channel</p>
                </div>
            </div>

           
            <div className="bg-red-600 bg-[url(/5.jpg)] bg-cover h-[500px] rounded-2xl grid place-items-center">
                <div className="bg-[#ffffffab] min-w-[270px] sm:min-w-[300px] md:min-w-[500px] rounded-xl py-8 sm:px-8 px-2 grid place-items-center gap-3">
                    <button className="bg-blackish text-white p-2 rounded-md">
                        15% Discount
                    </button>
                    <h2 className="font-extrabold text-2xl text-[#272727]">Winter Collection</h2>
                </div>
                <p className="text-blackish-500 font-bold text-[20px]">
                    Start Shopping and get discount
                    </p>
                    <button className="bg-blackish text-white p-2 rounded-md">Shop Now</button>
                
            </div>

        </div>
      
      </div>
    </div>
  )
}

export default Aboutus;
