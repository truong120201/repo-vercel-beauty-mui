import backgr from '../../../assets/images/slogan-backgr.svg'

import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    slogan: {
        backgroundImage: `url('${backgr.src}')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'auto',
        marginTop: '149px',
        padding: '164px 355px 168px 354px',
        '@media (max-width: 929px)': {
            padding: '164px 20px 168px 20px'
        },
        '@media (min-width: 930px) and (max-width:1420px)': {
            padding: '164px 30px 168px 30px'
        }
    },
    sloganTitleTop: {
        fontWeight: '600',
        fontSize: '16px',
        lineHeight: '125%',
        textAlign: 'center',
        color: '#ABB4FF',
        marginBottom: '12px',
    }

    , sloganTitleBot: {
        fontWeight: '600',
        fontSize: '36px',
        lineHeight: '125%',
        textAlign: 'center',
        color: '#FFFFFF',
        marginBottom: '12px',
    }

    , sloganAbout: {
        fontWeight: '400',
        fontSize: '16px',
        lineHeight: '24px',
        textAlign: 'center',
        letterSpacing: '0.1em',

        color: '#CACACA',
    }
})

export default useStyles