import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';
import menuImg from '../../assets/menu/banner3.jpg'
import menuImg2 from '../../assets/menu/dessert-bg.jpeg'
import menuImg3 from '../../assets/menu/pizza-bg.jpg'
import menuImg4 from '../../assets/menu/salad-bg.jpg'
import menuImg5 from '../../assets/menu/soup-bg.jpg'
import PopularMenu from '../Home/PopularMenu/PopularMenu';
const Menu = () => {
  return (
    <div>
      {/**************** React Helmet Title *************/}
      <Helmet>
        <title>Restaurant || Menu</title>
      </Helmet>
       {/**************** React Helmet Title *************/}
        <Cover
        img={menuImg}
        title={"OUR MENU"}
        ></Cover>
        <PopularMenu></PopularMenu>
        <Cover
        img={menuImg2}
        title={"Bargar"}
        ></Cover>
        <PopularMenu></PopularMenu>
        <Cover
        img={menuImg3}
        title={"pizza"}
        ></Cover>
        <PopularMenu></PopularMenu>
        <Cover
        img={menuImg4}
        title={"SALADS"}
        ></Cover>
        <PopularMenu></PopularMenu>
        <Cover
        img={menuImg5}
        title={"SOUPS"}
        ></Cover>
        <PopularMenu></PopularMenu>
    </div>
  );
};

export default Menu;