import { Box, TextField, makeStyles} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    component: {
        background: '#f6f6f6',
        '& > *': {
            margin: theme.spacing(1)
        }
    }
}))

const BreadCrumb = () => {
    const classess = useStyles();
    return (
        <Box m = {1} className={classess.component}>
            <TextField 
                label="Search images"
            />
            <TextField 
                label="Number of images"
            />

        </Box>
    )
}

export default BreadCrumb;