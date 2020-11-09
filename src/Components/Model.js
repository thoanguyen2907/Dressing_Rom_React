import React from 'react'; 
import { useDispatch, useSelector } from 'react-redux';
import {useSpring, animated} from 'react-spring'; 



export default function Model(props) {

    const animate = useSpring({
        to: async (next, cancel) => {
        await next({opacity: 0.8, transform: 'scale(0.6)'})
        await next({opacity: 1, transform: 'scale(0.5)'})

        },
        from: {opacity: 0.5,transform: 'scale(0.5)'}, 

        config : {duration: 500}
      }); 
    

      
    const listChosen = useSelector(state => state.dressingReducer.listChosens);

    const renderItemChosen = () =>{
        if(listChosen.length > 0){
            return listChosen.map((item, index ) => {
                if(item.type === "topclothes"){
                    return  <animated.div key={index} className="bikinitop" style={{  ...animate , width: 500, height: 500, background: `url(${item.imgSrc_png})`, position: 'absolute', top: '-9%', left: '-13%', zIndex: 3}} />
                } if (item.type === "botclothes"){
                    return  <div key={index}  className="bikinibottom" style={{  ...animate , width: 500, height: 1000, background: `url(${item.imgSrc_png})`, position: 'absolute', top: '-30%', left: '-13%', zIndex: 2}} />
                } if(item.type === "shoes"){
                    return  <div key={index}  className="feet" style={{ width: 500, height: 1000, background: `url(${item.imgSrc_png})`, position: 'absolute', bottom: '-37%', right: '3.9%', transform: 'scale(0.5)', zIndex: 1 }} />
                } if (item.type === "hairstyle") {
                   return  <div key={index}  className="hairstyle" style={{ width: 1000, height: 1000, background: `url(${item.imgSrc_png})`, position: 'absolute', top: '-75%', right: '-50%', transform: 'scale(0.15)', zIndex: 4 }} />
                }  if (item.type === "background") {
                    return <div key={index}  className="background" style={{ backgroundImage: `url(${item.imgSrc_png})`, height:"600px", width: "400px" }} />
                  } if (item.type === "necklaces") {
                    return  <div key={index}  className="necklace" style={{ width: 500, height: 1000, background: `url(${item.imgSrc_png})`, position: 'absolute', bottom: '-40%', right: '3%', transform: 'scale(0.5)', zIndex: 4 }} />
                  }if (item.type === "handbags") {
                  return  <div key={index}  className="handbag" style={{ width: 500, height: 1000, background: `url(${item.imgSrc_png})`, position: 'absolute', bottom: '-40%', right: '7%', transform: 'scale(0.5)', zIndex: 4 }} />
                  }
            })
            }
     
    }
    

    return (
        <div className="col-md-4">
        <div className="contain" style={{position: "relative", width:"460px", height:"590px"}}>
            <div className="body" style={{background:'url("../assets/images/allbody/bodynew.png")',  width: "250px",  height: "500px",top: "12%", left: "14.3%", position: "absolute" }}/>
            <div className="model" style={{background:'url("../assets/images/model/1000new.png")',  width: "60px",  height: "77px",top: "5%", left: "38%" , zIndex: 1,position: "absolute"}} />
            {/* <div className="hairstyle" style={{ width: 1000, height: 1000, background: 'url("../assets/images/hairstyle/hairstyle3.png")', position: 'absolute', top: '-75%', right: '-50%', transform: 'scale(0.15)', zIndex: 4 }} /> */}
            {/* <div className="necklace" style={{ width: 500, height: 1000, background: 'url("../assets/images/necklaces/necklace3.png")', position: 'absolute', bottom: '-40%', right: '2.5%', transform: 'scale(0.5)', zIndex: 4 }} /> */}
            {/* <div className="bikinitop" style={{ width: 500, height: 500, background: 'url("../assets/images/clothes/topcloth5.png")', position: 'absolute', top: '-9%', left: '-13%', zIndex: 3, transform: 'scale(0.5)' }} /> */}
            {/* <div className="bikinibottom" style={{ width: 500, height: 1000, background: 'url("../assets/images/clothes/botcloth4.png")', position: 'absolute', top: '-30%', left: '-13%', zIndex: 2, transform: 'scale(0.5)' }} /> */}
            {/* <div className="handbag" style={{ width: 500, height: 1000, background: 'url("../assets/images/handbags/handbag2.png")', position: 'absolute', bottom: '-40%', right: '7%', transform: 'scale(0.5)', zIndex: 4 }} /> */}
            {/* <div className="feet" style={{ width: 500, height: 1000, background: 'url("../assets/images/shoes/shoes2.png")', position: 'absolute', bottom: '-37%', right: '3.9%', transform: 'scale(0.5)', zIndex: 1 }} /> */}
            {/* <div className="background" style={{ backgroundImage: 'url("../assets/images/background/background1.jpg")', height:"600px", width: "400px" }} /> */}
            {renderItemChosen()}

        </div>
    </div>
    )
}
