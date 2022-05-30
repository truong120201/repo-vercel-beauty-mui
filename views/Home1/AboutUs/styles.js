import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    bannerButton: {
        textDecoration: 'none',
        fontWeight: '600',
        fontSize: '16px',
        letterSpacing: '0.1em',
        color: '#FFFFFF',
        background: '#FF64AE',
        boxShadow: '0px 17px 22px #FFEDF6',
        borderRadius: '50px',
        padding: '16px 40px 15px 41px',
        display: 'block',
        width: 'fit-content',
    },

    aboutUs: {
        marginTop: '134px',
        padding: '0 150px',
        '@media (min-width: 930px) and (max-width:1420px)': {
            width: '100%',
            padding: '0 30px',
        },
        '@media (max-width: 929px)': {
            padding: '0 20px',
            flexDirection: 'column',
        }
    },

    aboutUsDes: {
        width: '55%',
        '@media (max-width: 929px)': {
            width: '100%'
        }
    },
    aboutUsPlayText: {
        fontFamily: 'Poppins !important',
        fontStyle: 'normal !important',
        fontWeight: '600 !important',
        fontSize: '16px !important',
        lineHeight: '24px !important',
        letterSpacing: '0.1em !important',

        color: '#8B8B8B !important',
    },

    aboutUsPlayBtn: {
        width: 'fit-content !important',
        marginLeft: '44px !important',
        cursor: 'pointer',
        fontFamily: 'Poppins !important',
    },

    aboutUsPlayText: {
        fontWeight: '600',
        fontSize: '16px',
        lineHeight: '24px',
        letterSpacing: '0.1em',
        marginLeft: '20px',
        color: '#8B8B8B',
    },

    aboutUsBtns: {
        marginTop: '54px',
    },
    aboutUsImg: {
        width: '45%',
        '@media (max-width: 929px)': {
            width: '100%',
            marginTop: '20px'
        }
    }
})

export default useStyles