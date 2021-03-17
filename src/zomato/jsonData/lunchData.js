import Mcd from '../../images/mcd.png';
import Dominos from '../../images/dominos.png';
import Nandhana from '../../images/nandhana.png';
import KFC from '../../images/kfc.png';
import BR from '../../images/baskinRob.webp';
import keventers from '../../images/keventers.webp';
import BH from '../../images/biriyanihouse.jpg';
import BE from '../../images/bollyexpress.webp';
import CE from '../../images/chennaiexpress.webp';
import DS from '../../images/dosastation.jpg';
import HH from '../../images/hungryhope.jpg';
import ISC from '../../images/ISC.webp';
import PH from '../../images/pizzahut.webp';
import WH from '../../images/waffle.webp';

const lunchData = [{
    name: "McDonalds",
    desc: "Fast Food, Burger",
    picture: Mcd
    
},
{
    name: "Dominos Pizza",
    picture: Dominos,
    desc:"Pizza, Fast Food"
},
{
    name: "Nandhana Palace",
    picture: Nandhana,
    desc: "South Indian, Biriyani"
},
{
    name:"KFC",
    picture: KFC,
    desc: "Fast Food, Finger Food, Beverages"
},
{
    name: "Biriyani House",
    picture: BH,
    desc: "Biriyani, Mughlai"
},
{
    name:"Baskin Robins",
    picture: BR,
    desc: "Desserts, Beverages, Ice-Cream"
}
];

export default lunchData;

export const dinnerData = [{
    name: "Chennai Express",
    desc: "South Indian, Biriyani",
    picture: CE
    
},
{
    name: "Pizza Hut",
    picture: PH,
    desc: "Pizza, Fast Food"
    
},
{
    name: "Hungry Hope",
    picture: HH,
    desc: "North Indian, Chinese, Rolls"
},
{
    name:"Waffle House",
    picture: WH,
    desc: "Desserts"
},
{
    name: "Nandhana Palace",
    picture: Nandhana,
    desc: "South Indian, Biriyani"
},
{
    name:"KFC",
    picture: KFC,
    desc: "Fast Food, Finger Food, Beverages"
}
];

export const breakfastData = [{
    name: "Indian Summer Cafe",
    desc: "North Indian, Cafe, Healthy Food",
    picture: ISC
    
},
{
    name: "Dominos Pizza",
    picture: Dominos,
    desc: "Pizza, Fast Food"
    
},
{
    name: "Nandhana Palace",
    picture: Nandhana,
    desc: "South Indian, Biriyani"
},
{
    name:"Dosa Station",
    picture: DS,
    desc: "South Indian"
},
{
    name: "Bollywood Express",
    picture: BE,
    desc: "North Indian, Beverages"
},
{
    name:"KFC",
    picture: KFC,
    desc: "Fast Food, Finger Food, Beverages"
}
];

export const cafeData = [{
    name: "Waffle House",
    desc: "Desserts",
    picture: WH
    
},
{
    name: "Pizza Hut",
    picture: PH,
    desc: "Pizza, Fast Food"
    
},
{
    name: "Indian Summer Cafe",
    picture: ISC,
    desc: "North Indian, Cafe, Healthy Food"
},
{
    name:"KFC",
    picture: KFC,
    desc: "Fast Food, Finger Food, Beverages"
},
{
    name: "Nandhana Palace",
    picture: Nandhana,
    desc: "South Indian, Biriyani"
},
{
    name:"Keventers",
    picture: keventers,
    desc: "Beverages, Desserts, Ice Cream"
}
];

export const deliveryData = [{
    name: "Pizza Hut",
    desc: "Pizza, Fast Food",
    picture: PH
    
},
{
    name: "Dominos Pizza",
    picture: Dominos,
    desc: "Pizza, Fast Food"
    
},
{
    name: "Dosa Station",
    picture: DS,
    desc: "South Indian"
},
{
    name:"Keventers",
    picture: keventers,
    desc: "Beverages, Desserts, Ice-Cream"
},
{
    name: "Hungry Hope",
    picture: HH,
    desc: "North Indian, Chinese, Rolls"
},
{
    name:"KFC",
    picture: KFC,
    desc: "Fast Food, Finger Food, Beverages"
}
];

export const placeData = {
    KFC: {
        picture: KFC,
        desc: "Fast Food, Finger Food, Beverages"
    },
    HungryHope: {
       picture: HH,
       desc: "North Indian, Chinese, Rolls" 
    },
    Keventers: {
        picture: keventers,
        desc: "Beverages, Desserts, Ice-Cream" 
     },
     DominosPizza: {
        picture: Dominos,
        desc: "Pizza, Fast Food" 
     },
     PizzaHut: {
        picture: PH,
        desc: "Pizza, Fast Food" 
     },
     NandhanaPalace: {
        picture: Nandhana,
        desc: "South Indian, Biriyani" 
     },
     IndianSummerCafe: {
        picture: ISC,
        desc: "North Indian, Cafe, Healthy Food" 
     },
     WaffleHouse: {
        picture: WH,
        desc: "Desserts" 
     },
     ChennaiExpress: {
        picture: CE,
        desc: "South Indian, Biriyani" 
     },
     BollywoodExpress: {
        picture: BE,
        desc: "North Indian, Beverages" 
     },
     BaskinRobins: {
        picture: BR,
        desc: "Desserts, Beverages, Ice-Cream" 
     },
     McDonalds: {
        picture: Mcd,
        desc: "Burgers, Fast Food" 
     },
     BiriyaniHouse: {
        picture: BH,
        desc: "Biriyani" 
     },
     DosaStation: {
        picture: DS,
        desc: "South Indian" 
     }
};
