import React from 'react';
import { makeStyles, Typography, Grid } from "@material-ui/core";
import TreeOutline from '../assets/tree-icon-outline.svg'
import TreeFilled from '../assets/tree-icon-filled.svg'

const useStyles = makeStyles(themeObject => ({
    description: {
        width: 200,
    },
    icon: {
        height: 20
    }
}));

function KnowledgeItem({name, level}){
    const styles = useStyles();

    var filled = [];    
    for (var i = 1; i <= level; i++) {
        filled.push(<img src={TreeFilled} key={i} className={styles.icon} alt="filled" />);
    }

    var unfilled = []
    for (var j = 1; j <= (5 - level); j++) {
        unfilled.push(<img src={TreeOutline} key={j} className={styles.icon} alt="outlined"/>);
    }
    
    return(
        <Grid container direction="row" justify="flex-start" wrap="nowrap" >
            <Grid item className={styles.description}>
                <Typography variant="body1">{name}</Typography>
            </Grid>
            <Grid item>
                {filled}
                {unfilled}
            </Grid>
        </Grid>
    );
}

export default KnowledgeItem;