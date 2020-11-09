import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function TabPanes(props) {
    const tabPanes = useSelector(state => state.dressingReducer.tabPaneArrayChosens);
    const navPills = useSelector(state => state.dressingReducer.navPills);
    let dispatch = useDispatch();
    const tryClothes = (tabPane) => {
        let action = {
            type: "TRY_CLOTHES",
            tabPane
        };

        dispatch(action);
    }
    const renderTabPaneDemo = () => {
        return navPills.map((item, index) => {
            let activeClass = item.tabName === "tabTopClothes" ? "active" : "";
            let fadeClass = item.tabName !== "tabTopClothes" ? "fade" : "";
          
            
            return <div className={`tab-pane container ${fadeClass} ${activeClass}`} id={item.tabName} key={index}>
                <div className="row">
                   {renderTabPanes()}
                </div>

            </div>

        })
    }
    const renderTabPanes = () => {
        return tabPanes.map((tabPane, index) => {
            return <div className="col-md-3" key={index} >
                    <div className="card text-center">
                        <img src={tabPane.imgSrc_jpg} alt={tabPane.name} />
                        <h4><b>{tabPane.name}</b></h4>
                        <button onClick={() => { tryClothes(tabPane) }}>Thử đồ</button>
                    </div>
                </div>          
        })

    }

    return (
        <div className="tab-content my-4">

            {renderTabPaneDemo()}
        </div>



    )
}

