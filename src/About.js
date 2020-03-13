import React, { useState, useEffect } from "react";
import { makeStyles, Typography, Container, Grid, Fade } from "@material-ui/core";
import Profile from './assets/profile-full.svg';

const useStyles = makeStyles(themeObject => ({
    about: {
        paddingTop: 30,
        marginBottom: 50,
        flexGrow: 1,
    },
    profileContainer: {
        width: '30vw',
        height: '30vw',
        maxWidth: '30vw',
        maxHeight: '30vw',
    },
    profileImg: {
        width: '100%',
        height: '100%',
    },
    githubLink: {
        textDecoration: 'none'
    }
}));

function About() {
    const styles = useStyles();

    const [loaded, setLoaded] = useState(false);
    const [imgLoaded, setImgLoaded] = useState(false);

    console.log("imgLoaded: " + imgLoaded);

    useEffect(() => {
        setLoaded(true);
    }, []);

    return (
        <Fade in={loaded} timeout={1500}>
            <Container maxWidth="md" className={styles.about}>
                <Grid container justify="center" alignItems="center" direction="column" spacing={2}>
                    <Grid item className={styles.profileContainer}>
                        <Fade in={imgLoaded} timeout={1000}>
                            <img src={Profile} onLoad={() => setImgLoaded(true)} className={styles.profileImg} alt="Profile"/>
                        </Fade>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" component="p" color="primary">
                            Hi, I'm Taylor! I'm a San Francisco-based software engineer working for a tech company located in Boston. I have full-stack experience building
                            Java and JavaScript -based web applications for both internal and customer-facing platforms. During off-hours I enjoy deepening my knowledge of 
                            web development by working on personal projects like this website! If you want to see the code behind it, check it out on 
                            <a href="https://github.com/tvonk13/Personal-Website" className={styles.githubLink}> github</a>.
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" component="p" color="primary">
                            When I'm not programming, I am an avid climber who loves being in the sun and goofing around on the rocks. A few years ago I was also introduced to the 
                            exciting world of triathlons and have been enjoying training in running, biking, and swimming! When flexing my creative muscles, I like exploring 
                            different mediums, like ink pens and acrylic and oil paint to create abstract artwork inspired by nature. Recently, I have been pursing digital art 
                            as another medium and as a way to expand my repetoire of web development skills.
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Fade>
    );
}

export default About;