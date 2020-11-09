import React from 'react';
import {useDispatch,useSelector} from 'react-redux';
import TabPanes from './TabPanes'; 

export default function NavPills(props) {
    const navPills = useSelector(state=> state.dressingReducer.navPills); 
    let dispatch = useDispatch();

    const tabNameChosen = (typeName) =>{
        let action = {
            type: "CHOSE_TAB_NAME", 
            typeName
        };
        dispatch(action); 
        }
   
    const renderNavPills = () =>{      
        return navPills.map((navPill, index)=>{
             let active = navPill.tabName === "tabTopClothes"? "active" : ""; 
            return <li onClick={()=>{tabNameChosen(navPill.type)}} className="nav-item" key={index}>
            <a className={`nav-link btn-default ${active}`} data-toggle="pill" href={`#${navPill.tabName}`}>{navPill.showName}</a>
            </li>;
            
        })
    }
        return (
            <div>
               <ul className="nav nav-pills">                          
                               {renderNavPills()}
                 </ul> 
                 

            </div>
        )
    }