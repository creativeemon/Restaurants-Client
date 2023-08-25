import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
    const [menu , setMenu] = useState([])
    useEffect(()=>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const popularItem = data.filter(item => item.category === 'popular');
            setMenu(popularItem)})
    },[])


  return (
    <section>
      <SectionTitle
        subHeading={"Check it out"}
        heading={"FROM OUR MENU"}
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-10 mb-10">
        {
            menu.map(item =><MenuItem
            key={item._id}
            item={item}
            >
              
            </MenuItem>)
        }
      </div>
      <div className="text-center mb-10"><button className="rounded-md border-black border-b-4">View Full  Menu</button></div>
    </section>
  );
};

export default PopularMenu;
