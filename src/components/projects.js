import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, IconButton, CardMenu} from 'react-mdl';

class Projects extends Component{  
    constructor(props){
        super();
        this.state = { activeTab: 0}
    } 
    toggleCategories(){
        if(this.state.activeTab === 0){
            return(
                <Card shadow={5} style={{minWidth: '700px', margin:"auto" }}>
                    <CardTitle style={{color: '#fff',height: '680px', background:'url(https://i.imgur.com/2DPQAnN.png) center/cover'}}></CardTitle>
                    <CardText>AI Flappy Bird</CardText>
                    <CardActions border>
                        <Button colored href="https://github.com/tomnguyen103/AI_Flappy_Bird" rel="noopener noreferrer" target="_blank">Github</Button>
                        <Button colored href="http://bird.tomnguyen.me/" rel="noopener noreferrer" target="_blank">Live Demo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="shared" />
                    </CardMenu>
                </Card>

            );
        }else if(this.state.activeTab===1){
            return(
                <div><h1>This is Project 2</h1></div>
            )
        }else if(this.state.activeTab===2){
            return(
                <div><h1>This is Project 3</h1></div>
            )
        }
    }
    
    render(){
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId)=> this.setState({ activeTab: tabId })} ripple>
                    <Tab>Project 1</Tab>
                    <Tab>Project 2</Tab>
                    <Tab>Project 3</Tab>
                </Tabs>

                <section className="projects-grid">
                    <Grid className="projects-grid">
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid> 
                </section>
            </div>
        );
    }
}

export default Projects;