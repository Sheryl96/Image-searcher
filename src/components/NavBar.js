import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core';
import ImageSearchIcon from '@material-ui/icons/ImageSearch';

const useStyles = makeStyles({
    component: {
        background: '#92242f'
    }
})


const NavBar = () => {
    const classes = useStyles();
    return (
        <AppBar className={classes.component} position="static">
            <Toolbar>
                <ImageSearchIcon />
                <Typography variant="h6" style={{marginLeft: 10}}>View and Search Images</Typography>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;