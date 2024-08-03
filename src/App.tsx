import { useState } from "react";
import { FaStar} from "react-icons/fa"

export default function StarRatingApp ({stars = 7}){
    const[hover , setHover] = useState(0);
    const[rating , setRating] = useState(0);


function mouseClick(currentIndex: number){
console.log(currentIndex);
    setRating(currentIndex);

}

function mouseMove(currentIndex: number){
    console.log(currentIndex);
    setHover( currentIndex);
}

function mouseLeave(){
    
    setHover( rating );
}
const activeStyle = {
    color: "fff700"
};

const inActiveStyle = {
    color: "#000000"
};



    return(
        <div className="star-rating-app" style = {{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            height: "67vh",
            
        }}>
            <p style= {{fontSize:"80px" , fontFamily:"cursive",fontWeight:"bold"}}>STAR-RATING</p>
            
            <div>
              {
                  [...Array(stars)].map( (_,index) => {
                      index+=1;
                      
                      return(
                          <FaStar
                          
                          key = {index}
                          onClick = { () => {mouseClick(index)}}
                          onMouseMove = {() => {mouseMove(index)}}
                          onMouseLeave = {() => {mouseLeave()}}
                          size ={100}
                          style = {
                              index <= (hover || rating) ? activeStyle : inActiveStyle                       
                            }
                            
                            />
                        )
                    })
                }
                     </div>           
        </div>
    )
}