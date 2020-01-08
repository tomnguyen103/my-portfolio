import React, {Component} from 'react';
import {Tabs, Tab} from 'react-mdl';

class Projects extends Component{  
    constructor(props){
        super();
        this.state = { activeTab: 0}
    } 
    render(){
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId)=> this.setState({ activeTab: tabId })} ripple>
                    <Tab>Project 1</Tab>
                    <Tab>Project 2</Tab>
                    <Tab>Project 3</Tab>
                </Tabs>

            </div>
        );
    }
}

export default Projects;