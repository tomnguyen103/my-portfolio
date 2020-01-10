import React, {Component} from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import profilepic from './pic1.jpg'

class Contact extends Component{
    render(){
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Tom Nguyen</h2>
                        <img 
                            src={profilepic}
                            alt="avatar"
                            style={{height:"250px"}}
                        />
                        <p style={{width:'75%', margin:"auto", paddingTop:'1em'}}>Experienced web developer with over 1,000 hours of hands-on experience with coding. Demonstrated skills in Django, MEAN, and Java Spring Framework. Skilled in HTML/DOM, CSS, Java, Python, JavaScript. Strong computer science background, graduated from California State University Los Angeles.</p>
                    </Cell>

                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize:'25px', fontFamily:'Anton'}}>
                                        <i className="fa fa-phone-square" aria-hidden="true" />
                                        (626)-560-5689
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize:'25px', fontFamily:'Anton'}}>
                                        <i className="fa fa-envelope" aria-hidden="true" />
                                        tom.nguyen.nht@gmail.com
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize:'25px', fontFamily:'Anton'}}>
                                        <i className="fa fa-linkedin-square" aria-hidden="true" />
                                        linkedin.com/in/tomnguyen103/
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize:'25px', fontFamily:'Anton'}}>
                                        <i className="fa fa-github-square" aria-hidden="true" />
                                        github.com/tomnguyen103
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                        
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Contact;