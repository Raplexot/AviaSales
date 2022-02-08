import React, {FC} from 'react';

interface CardProps{
    width?:string;
    height?:string;
}

const Card:React.FC<CardProps> = ({width:string , height:string, children}) => {
    return (
        <div style={{width,height, border:"red"}}>
            
        </div>
    );
};

export default Card;