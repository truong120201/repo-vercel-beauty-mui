import { makeStyles } from "@material-ui/core"

import backgr from '../../../assets/images/blog-top-backgr.svg'

const useStyles = makeStyles({
    banner: {
        marginTop: '36px',
        backgroundImage: `url('${backgr.src}')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'auto',
        padding: '121px 150px 107px 149px',
        '@media (max-width: 929px)': {
            padding: '121px 20px 107px 20px'
        },
        '@media (min-width: 930px) and (max-width:1420px)': {
            padding: '121px 30px 107px 30px'
        }
    }


    , bannerHeading: {
        fontWeight: '600',
        fontSize: '36px',
        lineHeight: '125%',
        color: '#FFFFFF',
        fontFamily: 'Poppins'
    }

    , bannerDesc: {
        fontWeight: '500',
        fontSize: '16px',
        lineHeight: '24px',
        textAlign: 'right',
        letterSpacing: '0.1em',
        color: '#D9D9D9',
        fontFamily: 'Poppins'
    }

})

export default useStyles