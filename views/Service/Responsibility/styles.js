import { makeStyles } from "@material-ui/core";
import backgr from '../../../assets/images/service-response-backgr.svg'

const useStyles = makeStyles({
    responsibility: {
        padding: '182px 211px 182px 150px',
        backgroundImage: `url('${backgr.src}')`,
        backgroundRepeat:'no-repeat',
        backgroundSize: 'auto',
        '@media (max-width: 929px)': {
            padding: '20px 20px 20px 20px',
            flexDirection: 'column',
            backgroundPosition: 'top 0 left -500px'
        },
        '@media (min-width: 930px) and (max-width:1420px)': {
            padding: '182px 30px 182px 30px'
        }
    }
    ,playTreatmentsVideos: {
        width: '40%',
        '@media (max-width: 929px)': {
            width: '100%'
        }
    }
    
    ,responsibilitySlogan: {
        width: '55%',
        '@media (max-width: 929px)': {
            width: '100%',
            marginBottom: '20px'
        }
    }
    
    ,sloganHeading: {
        fontWeight: '600',
        fontSize: '36px',
        lineHeight: '125%',
        /* or 45px */
    
        marginBottom: '12px',
        color: '#FFFFFF',
    
    }
    
    ,sloganDesc: {
        fontWeight: '400',
        fontSize: '16px',
        lineHeight: '24px',
        letterSpacing: '0.1em',
        color: '#CACACA',
    }
    
    ,treatmentsText: {
        fontWeight: '600',
        fontSize: '16px',
        lineHeight: '24px',
        letterSpacing: '0.1em',
        color: '#FFFFFF',
    }
})

export default useStyles