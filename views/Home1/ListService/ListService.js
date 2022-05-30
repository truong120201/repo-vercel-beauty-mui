import Image from 'next/image'

import service1 from '../../../assets/images/service1.svg'
import service2 from '../../../assets/images/service2.svg'
import service3 from '../../../assets/images/service3.svg'
import { Grid } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import useStyles from './styles'

function ListService() {

    const classes = useStyles()

    return (
        <>
            <Grid container justifyContent='space-around' className={classes.listService}>
                <Grid item className={classes.service}>
                    <Image
                        src={service1}
                    />
                    <Typography component='p' className={classes.serviceTitle}>Beauty consultation</Typography>
                    <Typography component='p' className={classes.serviceDesc}>Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.</Typography>
                </Grid>
                <Grid item className={classes.service}>
                    <Image
                        src={service2}
                    />
                    <Typography component='p' className={classes.serviceTitle}>Skin treatments</Typography>
                    <Typography component='p' className={classes.serviceDesc}>Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.</Typography>
                </Grid>
                <Grid item className={classes.service}>
                    <Image
                        src={service3}
                    />
                    <Typography component='p' className={classes.serviceTitle}>Beauty product</Typography>
                    <Typography component='p' className={classes.serviceDesc}>Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.</Typography>
                </Grid>
            </Grid>
        </>
    )
}

export default ListService