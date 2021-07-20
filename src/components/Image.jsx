import { Card, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    image: {
        width:'100%',
        height: 300,
        objectFit: 'cover'
    }
})

const Images = ({ image }) => {
    const classess = useStyles(); 
    return (
        <Card>
            <img src={image.largeImageURL} className={classess.image} />
        </Card>
    )
}

export default Images;