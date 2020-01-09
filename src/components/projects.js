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
                    <CardTitle style={{color: '#fff',height: '900px', background:'url(https://i.imgur.com/2DPQAnN.png) center/cover'}}></CardTitle>
                    <CardText style={{color: 'black'}}>
                        <h3 style={{textDecoration:'underline'}}>AI Flappy Bird</h3>
                        <ul>
                            <li>Rewrote from my basic HTML Flappy Bird game to an AI Flappy Bird</li>
                            <li>Ultilize the AI and Machine Learning concept in Reinforcement Learning and Neural Network concept</li>
                            <li>Time of developement: 1 week</li>    
                        </ul>
                    </CardText>
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
                <Card shadow={5} style={{minWidth: '1000px', margin:"auto" }}>
                    <CardTitle style={{color: '#fff', width: "800px", height: '680px', justifyItems: "center", background:'url(https://i.imgur.com/uw70rQj.png) center/cover'}}></CardTitle>
                    <CardText style={{color:'black'}}>
                        <h3 style={{textDecoration:'underline'}}>Pant HTML App</h3>
                        <ul>
                            <li>Ultilize HTML Canvas with several functions included drawing a line, rectangel, or free draw with color selected.</li>
                            <li>Technologies used: HTML/DOM, CSS, JavaScript</li>
                            <li>Time of developement: 3 days</li>
                        </ul>
                    </CardText>
                    <CardActions border>
                        <Button colored href="https://github.com/tomnguyen103/Paint_HTML_app" rel="noopener noreferrer" target="_blank">Github</Button>
                        <Button colored href="http://paint.tomnguyen.me/" rel="noopener noreferrer" target="_blank">Live Demo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="shared" />
                    </CardMenu>
                </Card>
            )
        }else if(this.state.activeTab===2){
            return(
                <Card shadow={5} style={{minWidth: '1000px', margin:"auto" }}>
                    <CardTitle style={{color: '#fff', width: "800px", height: '680px', justifyItems: "center", background:'url(https://i.imgur.com/APQz8BH.png) center/cover'}}></CardTitle>
                    <CardText style={{color:'black'}}>
                        <h3 style={{textDecoration:'underline'}}>School Library Platform</h3>
                        <ul>
                            <li>Implemented and Developed a school library platform using Django Framework</li>
                            <li>Created a user-friendly prototype library website so users can go and browse for books.</li>
                            <li>Only registered students can borrow a book by logging in to the system and checking out the book</li>
                            <li>Technologies used: HTML/CSS, Python, Django, Bootstrap, SQLite, Mongoose</li>
                            <li>Time of developement: 1 week</li>
                        </ul>
                    </CardText>
                    <CardActions border>
                        <Button colored href="https://github.com/tomnguyen103/Project1" rel="noopener noreferrer" target="_blank">Github</Button>
                        <Button colored href="http://book.tomnguyen.me/" rel="noopener noreferrer" target="_blank">Live Demo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="shared" />
                    </CardMenu>
                </Card>
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