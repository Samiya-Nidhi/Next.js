import React from 'react';
import SkincareCard from './SkincareCard';
const productData=
[
  {
       img: "/S1.jpg",
       Brand:" innisfree",
      Item_Form: "Clay",
      Product_Benefits: "Cleansing and Exfoliate",
      Scent:   "Unscented",
      Skin_Type: "All types of skin",
      Price: "$25",
  },
  {
    img: "/S8.jpeg",
    
   Brand:" innisfree",
   Item_Form: "Clay",
   Product_Benefits: "Cleansing and Exfoliate",
   Scent:   "Unscented",
   Skin_Type: "All types of skin",
   Price: "$25",
},
{
  img: "/S2.jpeg",
  
 Brand:" innisfree",
 Item_Form: "Clay",
 Product_Benefits: "Cleansing and Exfoliate",
 Scent:   "Unscented",
 Skin_Type: "All types of skin",
 Price: "$25",
},
{
  img: "/S3.jpeg",
  
 Brand:" innisfree",
 Item_Form: "Clay",
 Product_Benefits: "Cleansing and Exfoliate",
 Scent:   "Unscented",
 Skin_Type: "All types of skin",
 Price: "$25",
},
{
  img: "/S4.jpeg",
  
 Brand:" innisfree",
 Item_Form: "Clay",
 Product_Benefits: "Cleansing and Exfoliate",
 Scent:   "Unscented",
 Skin_Type: "All types of skin",
 Price: "$25",
},
{
  img: "/S5.jpeg",
  
 Brand:" innisfree",
 Item_Form: "Clay",
 Product_Benefits: "Cleansing and Exfoliate",
 Scent:   "Unscented",
 Skin_Type: "All types of skin",
 Price: "$25",
},
{
  img: "/S6.jpeg",
  
 Brand:" innisfree",
 Item_Form: "Clay",
 Product_Benefits: "Cleansing and Exfoliate",
 Scent:   "Unscented",
 Skin_Type: "All types of skin",
 Price: "$25",

},
{
  img: "/S7.jpeg",
  
 Brand:" innisfree",
 Item_Form: "Clay",
 Product_Benefits: "Cleansing and Exfoliate",
 Scent:   "Unscented",
 Skin_Type: "All types of skin",
 Price: "$25",
},

];












const Skin_Care = () => {
  return (
    <div>
      <div className="container pt-16">
        <h2 className="text-2xl font-bold pb-4 ">Skin Care Products</h2>
      
      <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols2 lg:grid-col-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
      {productData.map((item,index) => (
        <SkincareCard
        key={index}
        img={item.img}
        brand={item.Brand}
        itemform={item.Item_Form}
        benefits={item.Product_Benefits}
        scent={item.Scent}
        Price={item.Price}
        
        
        
        />
      )
      )}
      
      </div>
      </div>
    </div>
  );
};

export default Skin_Care;

