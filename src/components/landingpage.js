import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import pic1 from './pic1.jpg'

class Landing extends Component{
    render(){
        return(
            <div style={{width:'100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                            src={pic1}
                            alt="avatar"
                            className="avatar-pic" 
                        />
                        <div className="banner">
                            <h1>Full-Stack Developer</h1>

                            <hr></hr>

                            <p> JavaScript | HTML/CSS | Java | Python | Django | MEAN | Java Spring | MySQL | MongoDB</p>

                            <div className="social-media">

                                {/* LinkedIn */}
                                <a href="https://www.linkedin.com/in/tomnguyen103/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square"  aria-hidden="true" />
                                </a>
                                
                                {/* Github */}
                                <a href="https://github.com/tomnguyen103" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square"  aria-hidden="true" />
                                </a>

                            </div>
                        </div>
                    </Cell>
                    <Cell col={12}></Cell>
                    <Cell col={12}></Cell>
                </Grid>
            </div>
        );
    }
}

export default Landing;