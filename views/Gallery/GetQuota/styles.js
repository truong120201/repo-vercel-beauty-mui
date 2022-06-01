import { makeStyles } from "@material-ui/core"

import backgr from '../../../assets/images/gal-bubble-backgr.svg'

const useStyles = makeStyles({
    getQuota: {
        backgroundImage: `url(${backgr.src})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'auto',
        backgroundPosition: 'top 0 right 0',

        padding: '120px 206px 115px 150px',
        '@media (max-width: 929px)': {
            flexDirection: 'column',
            flexWrap: 'wrap',
            padding: '120px 20px 115px 20px'
        },
        '@media (min-width: 930px) and (max-width:1420px)': {
            padding: '120px 30px 115px 30px'
        }
    }

    , titleAndDescWrapper: {
        width: '65%',
        '@media (max-width: 929px)': {
            width: '100%',
            marginBottom: '40px'
        }
    }

    , getQuotaBtn: {
        fontWeight: '600',
        fontSize: '16px',
        lineHeight: '24px',
        textAlign: 'center',
        letterSpacing: '0.1em',

        color: '#FFFFFF',

        padding: '16px 39px 15px 41px',
        background: '#FF64AE',
        boxShadow: '0px 17px 22px #FFEDF6',
        borderRadius: '50px',
        width: 'fit-content',
        fontFamily: 'Poppins'
    }
})

export default useStyles