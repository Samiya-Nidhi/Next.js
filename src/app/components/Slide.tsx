import React from 'react';
interface propsType {
    img: string;
    title: string;
    price: string;
}

const Slide: React.FC<propsType> = ({img , title , price}) => {
  return (
    <div className="outline-none border-none relative">
        <div className="absolute left-[30px] md:left-[70px] max-w-[250px] sm:max-w-[350px] top-[50%] -translate-y-[50%] space-y-2 lg:space-y-4 bg-[#ffffffa2] sm:bg-transparent p-4 sm:p-0 rounded-lg sm:rounded-none">
           <h3 className="text-black text-[32px] lg:text-[32px]">{title}</h3>
            <h3 className="text-[30px] text-black-500">
               
                <b className="text-[20px] md:text-24px lg:text-[30px]">
                    {price}
                    affordable price
                </b>
            </h3>
            <div className="bg-accent text-white text-[14px] md:text-[16px] p-2 px-4 rounded-lg inline-block cursor-pointer hover:bg-blackish">
                 Shop Now</div>

        </div>
      
    <img className="w-[100%] h-[300px] md:h-auto rounded-xl object-cover object-right
    md:object-left-bottom"
    src={img} alt=" 2"
    width={2000}
    height={2000} />

    </div>
  );
};

export default Slide;
