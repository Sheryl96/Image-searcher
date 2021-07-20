import { Box, TextField, makeStyles} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    component: {
        background: '#f6f6f6',
        '& > *': {
            margin: theme.spacing(1)
        }
    }
}))

const BreadCrumb = ({ onTextChange, onCountChange }) => {
    const classess = useStyles();
    return (
        <Box m = {1} className={classess.component}>
            <TextField 
                label="Search images"
                onChange={(e)=> onTextChange(e.target.value)}
            />
            <TextField 
                label="Number of images"
                onChange={(e)=> onCountChange(e.target.value)}
            />

        </Box>
    )
}

export default BreadCrumb;