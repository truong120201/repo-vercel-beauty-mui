import { makeStyles } from '@material-ui/core'

import backGRFooter from '../../assets/images/Footer-backgr.svg'

const useStyles = makeStyles({
    footer: {
        backgroundImage: `url('${backGRFooter.src}')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'auto',
        backgroundPosition: 'bottom 0',
        marginTop: '70px',
        padding: '225px 150px 40px 150px',
        '@media (max-width: 929px)': {
            padding: '100px 20px 20px 20px'
        },
        '@media (min-width: 930px) and (max-width:1420px)': {
            padding: '100px 30px 30px 30px'
        }
    },
    footerTop50: {
        width: '55%',
        '@media (max-width: 929px)': {
            width: '100%',
            textAlign: 'center',
            marginBottom: '30px',
        }
    },

    footerTop: {
        '@media (max-width: 929px)': {
            flexWrap: 'wrap'
        }
    },
    footerTopElement: {
        width: '22.5%',
        '@media (max-width: 929px)': {
            width: '50%',
            textAlign: 'center'
        }
    },

    footerBot: {
        marginTop: '154px',
        '@media (max-width: 929px)': {
            marginTop: '20px',
            flexDirection: 'column',
        },
    },
    footerDesc: {
        fontWeight: '400',
        fontSize: '16px',
        lineHeight: '24px',
        letterSpacing: '0.1em',
        marginTop: '23px',
        marginLeft: '23px',
        color: '#D7DBFF',
        fontFamily: 'Poppins'
    },
    beautyText: {
        fontWeight: '700',
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: '16px',
        lineHeight: '24px',
        letterSpacing: '0.1em',
        color: '#D7DBFF'
    },
    footerDesc2: {
        marginTop: '26px',
        marginLeft: '23px',
        fontStyle: 'italic',
        fontWeight: '500',
        fontSize: '14px',
        lineHeight: '21px',
        letterSpacing: '0.1em',
        color: '#D7DBFF',
        marginBottom: '4px',
        fontFamily: 'Poppins'
    },
    footerDesc3: {
        fontStyle: 'italic',
        fontWeight: '500',
        fontSize: '14px',
        lineHeight: '21px',
        letterSpacing: '0.1em',
        marginLeft: '23px',
        color: '#D7DBFF',
        fontFamily: 'Poppins'
    },
    phoneNumber: {
        marginRight: '28px'
    },
    footerTopHeading: {
        fontWeight: '600',
        fontSize: '18px',
        lineHeight: '27px',
        letterSpacing: '0.1em',
        marginBottom: '24px',
        color: '#FFFFFF',
        fontFamily: 'Poppins'
    },
    cateElement: {
        fontWeight: '400',
        fontSize: '16px',
        lineHeight: '24px',
        letterSpacing: '0.1em',
        marginBottom: '11px',
        color: '#D7DBFF',
    },
    socialMediaIcons: {
        width: '40%',
        '@media (max-width: 929px)': {
            justifyContent: 'center'
        }
    },
    socialMediaIcon: {
        marginRight: '15px',
        '@media (max-width: 929px)': {
            marginRight: '12px !important',
        },
        '@media (min-width: 930px) and (max-width:1420px)': {
            marginRight: '20px !important'
        }
    },
    footerCopyright: {
        fontWeight: '400',
        fontSize: '16px',
        lineHeight: '24px',
        textAlign: 'right',
        letterSpacing: '0.1em',
        color: '#D7DBFF',
        '@media (max-width: 929px)': {
            textAlign: 'center'
        }
    }
})

export default useStyles