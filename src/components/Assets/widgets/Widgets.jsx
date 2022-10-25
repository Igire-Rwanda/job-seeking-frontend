import React from 'react';
import './widget.css';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import PersonIcon from '@mui/icons-material/Person';
const Widgets = ({type}) => {
    
    let data;

    // eslint-disable-next-line default-case
    switch (type){
        case "User":
       data={
        title:"Clients",
        counter:"$471",
        link: "See all clients",
        icon:<PersonIcon className="icon"/> ,
    
    };
    break;
    case "TotalOrder":
    data={
        title:"Talents",
        counter:"$529",
        link: "See all Talents",
        icon:<PersonIcon className="icon"/> ,
    };
    break;
    case "Price":
    data={
        title:"Posts",
        counter:"$239",
        link: "See all jobPosts",
        icon:<MonetizationOnIcon className="icon"/> ,
    };
    break;
    case "TotalEarning":
    data={
        title:"Earnings",
        counter:"$2879",
        link: "See all earnings",
        icon:<MonetizationOnIcon className="icon"/> ,
    };
}
return(
<>
            <div className='widget'>
            <div className='left'>
            <span className='title'>{data.title}</span>
            <span className='counter'>{data.counter}</span>
            <span className='link'>{data.link}</span>
            </div>
            <div className='right'>
            <div className='percentage positive'>
                <KeyboardArrowUpIcon />
                40%</div>
                <span className='icon'>{data.icon}</span>    
            </div>
            </div>

            

            </>
    );
}
export default Widgets;