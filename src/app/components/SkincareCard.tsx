import { title } from 'process';
import React from 'react'
interface propsType{
    img: string;
    brand: string;
    itemform: string;
    benefits: string;
    scent: string;
    Price: string;

}
const SkincareCard: React.FC<propsType> = ({
    img,
    brand,
    itemform,
    benefits,
    scent,
    Price,
}) => {
  return (
    <div>
        <div className="px-4 border border-gray-200 rounded-xl max-w-[400px]">
        <div>
          <img 
          className="w-full h-auto"
          src={img}
          width={200}
          height={300}
          alt={title}
          />
        </div>
        <div className="space-y-2 py-9">
          <h2 className="text-black font-bold uppercase">{itemform}</h2>
          <p className="text-gray-500 max-w-[150px]">{brand} </p>
           <p className="text-gray-500 max-w-[150px]">{scent} </p>
           <p className="text-gray-500 max-w-[150px]">{benefits} </p>
           {/* <p className="text-gray-500 max-w-[150px]">{Price} </p> */}
          

          <div className="font-bold flex gap-4">
            {Price}
            <del className="text-gray-500 font-normal">$45</del>
          </div>
          </div>
      </div>
    </div>
  );
};

export default SkincareCard;
