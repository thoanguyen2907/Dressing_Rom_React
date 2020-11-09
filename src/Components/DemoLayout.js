import React from 'react'
import NavPills from './NavPills'; 
import TabPanes from './TabPanes'; 
import Model from './Model'; 
import data from './../data/Data.json'; 
export default function DemoLayout(props) {

        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="text-center">

                                <img src="./../assets/images/cybersoft.png" alt="Card" />
                            </div>
                            <div className="card-body">
                                <h4 className="card-title text-center">
                                    CyberLearn - Học lập trình trực tuyến - Dự án thử đồ trực tuyến
                                    - Virtual Dressing Room
          </h4>
                            </div>
                        </div>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8">
                        <NavPills/>
                        <div className="well">

                            <TabPanes/>
                       
                          
                        </div>
                    </div>
                   <Model/>
                </div>
            </div>

        )
    }
