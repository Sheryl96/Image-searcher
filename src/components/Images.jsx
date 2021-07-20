import Image from './Image';
import { Grid } from '@material-ui/core';

const Images = ({data}) => {
    return (
        <Grid container>
        {
            data.map(image => (
                <Grid  key={image.id} xs={4} item> <Image image={image}/> </Grid>
            ))
        }
        </Grid>
    )
}

export default Images;