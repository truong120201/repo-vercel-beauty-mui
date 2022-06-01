import { makeStyles } from "@material-ui/core";
import backgr from '../../../assets/images/gal-watch-backgr.svg'

const useStyles = makeStyles({
    watchVideoTour: {
        backgroundImage: `url('${backgr.src}')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'auto',
        padding: '170px 422px 94px 423px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }
    
    ,title1: {
        fontWeight: '600',
        fontSize: '36px',
        lineHeight: '125%',
        textAlign: 'center',
        marginBottom: '13px',
        color: '#FFFFFF',
        fontFamily: 'Poppins',
    }
    
    ,title2: {
        fontWeight: '400',
        fontSize: '16px',
        lineHeight: '24px',
        textAlign: 'center',
        letterSpacing: '0.1em',
        marginBottom: '41px',
        color: '#CACACA',
    }
})

export default useStyles