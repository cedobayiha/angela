import React from "react";
import PostDetails from "./postDetails"
import {Location, Verified} from "../icons/icons";
import PostSummary from '../result/postInfoSummary/postInfoSummary'


const PostDescription = () => (
    <div>
        {/* <h4>Post description here</h4> */}
        <div className="row">
            <div
                className="col-8"
                style={{display: "inline-block", padding: "0"}}
            >
                <div>
                    <h3>NEST Condos</h3>
                </div>
                <div className="address" style={{marginBottom: 7}}>
                    <div style={{position: "relative"}}>
                          <span>
                                <Location style={{position: "absolute"}}/>
                                <span>888 wellington street, Montreal QC</span>
                          </span>
                    </div>
                </div>
                <div style={{marginBottom: 7}}>by Brivia Group</div>
                <div className="website" style={{marginTop: 15, position: "relative"}}>
                    <span>
                        <Verified style={{position: "absolute"}}/>
                        <span style={{paddingLeft: 5}}>Verified</span>
                        <span style={{paddingLeft: 11}}><a href="#">www.nestcondos.com</a></span>
                    </span>
                </div>

            </div>
        </div>
        <PostSummary/>
        <PostDetails/>
    </div>
);

export default PostDescription;
