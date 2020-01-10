import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';
import profilepic from './pic1.jpg';
import Education from './education';

class Resume extends Component{
    render(){
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img 
                                src={profilepic}
                                alt='avatar'
                                style={{height: '200px'}}
                            />
                        </div>
                        <h2 style={{paddingTop: '2em'}}>Tom Nguyen</h2>
                        <h4 style={{color: 'grey'}}>Full-Stack Developer</h4>
                        <hr style={{borderTop:'3px sold grey', width:'50%'}}/>
                        <p>Talented web developer with over 1,000 hours of hands-on experience with coding. Demonstrated skills in Django, MEAN, and Java Spring Framework. Skilled in HTML/DOM, CSS, Java, Python, JavaScript. Strong computer science background, graduating from California State University Los Angeles.</p>
                        <hr style={{borderTop:'3px sold grey', width:'50%'}}/>

                        <h5>Arcadia, CA</h5>
                        <h5>Phone: 626-560-5689</h5>
                        <h5>Email: tom.nguyen.nht@gmail.com</h5>
                        <hr style={{borderTop:'3px sold grey', width:'50%'}}/>
                        
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                        <Education
                            startYear={2016}
                            endYear = {2019}
                            schoolName = "Cal State LA"
                            schoolDescription = "BS Degree in Computer Science"                        
                        />
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Resume;