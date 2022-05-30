import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    slider: {
        padding: '0 150px',
        paddingTop: '159px',
        '@media (max-width: 929px)': {
            flexDirection: 'column',
            paddingTop: '70px',
            paddingLeft: '20px !important',
            paddingRight: '20px !important',
        },
        '@media (min-width: 930px) and (max-width:1420px)': {
            paddingTop: '70px',
            paddingLeft: '30px !important',
            paddingRight: '30px !important',
        }
    },
    bannerHeaderTitle: {
        fontWeight: '600 !important',
        fontSize: '48px !important',
        lineHeight: '125% !important',
        color: '#091156 !important',
        fontFamily: 'Poppins !important'
    },

    bannerDesc: {
        width: '98% !important',
        fontWeight: '500 !important',
        fontSize: '16px !important',
        lineHeight: '24px !important',
        letterSpacing: '0.1em !important',
        color: '#091156 !important',
        fontFamily: 'Poppins !important'
    },

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
        marginTop: '44px',
        fontFamily: 'Poppins'
    },

    slideButtons: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '150px',
        marginBottom: '131px',
        alignItems: 'center',
        '@media (max-width: 929px)': {
            margin: '50px 0',
        }
    },

    slideButton: {
        width: '14px',
        height: '6px',
        borderRadius: '50px',
        backgroundColor: '#EEEEEE',
        cursor: 'pointer',
    },

    slideButtonMid: {
        backgroundColor: '#414880',
        margin: '0 2px',
    },

    sliderTitle: {
        width: '50%',
        '@media (max-width: 929px)': {
            width: '100%',
        }
    },

    sliderImg: {
        width: '50%',
        '@media (max-width: 929px)': {
            marginTop: '30px !important',
            width: '100%',
        }
    }
})

export default useStyles