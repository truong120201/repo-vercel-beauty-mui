import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import useStyles from './styles'


function TitleAndDesc(props) {

    const classes = useStyles()

    return (
        <Grid container direction='column' justifyContent='center' alignItems={props.left == true ? 'flex-start' : 'center'} >
            <Typography component='p' className={classes.titleTop}>{props.title1}</Typography>
            <Typography align={props.left == true ? 'left' : 'center'} component='p' className={`${classes.titleBot}`}>{props.title2}</Typography>
            <Grid container justifyContent={props.left == true ? 'flex-start' : 'center'}>
                <Grid item lg={props.left == true ? 10 : 8}>
                    <Typography align={props.left == true ? 'left' : 'center'} component='p' className={`${classes.desc}`}>{props.desc}</Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default TitleAndDesc