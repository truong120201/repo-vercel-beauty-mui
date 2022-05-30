import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    contact: {
        padding: '0 150px !important',
        marginTop: '144px',
        '@media (max-width: 929px)': {
            padding: '0 20px'
        },
        '@media (min-width: 930px) and (max-width:1420px)': {
            padding: '0 30px'
        }
    },
    contactTop: {
        width: '45%',
        '@media (max-width: 929px)': {
            width: '100%'
        },
        '@media (min-width: 930px) and (max-width:1420px)': {
            width: '100%'
        }
    },
    contactBot: {
        '@media (max-width: 929px)': {
            width: '100%'
        },
        '@media (min-width: 930px) and (max-width:1420px)': {
            width: '100%'
        }
    },
    contactImage: {
        '@media (max-width: 929px)': {
            display: 'none'
        }
    },
    contactTitleTop: {
        fontWeight: '600',
        fontSize: '16px',
        lineHeight: '125%',
        color: '#FF64AE',
        marginBottom: '12px',
        fontFamily: 'Poppins'
    },
    contactTitleBot: {
        fontWeight: '600',
        fontSize: '36px',
        lineHeight: '125%',
        color: '#091156',
        width: '87%',
        marginBottom: '12px',
        fontFamily: 'Poppins'
    },
    contactTopDesc: {
        fontWeight: '400',
        fontSize: '16px',
        lineHeight: '24px',
        letterSpacing: '0.1em',
        color: '#8B8B8B',
        fontFamily: 'Poppins'
    },
    formContact: {
        width: '45%',
        marginTop: '44px',
        '@media (max-width: 929px)': {
            width: '100%'
        }
    },
    contactRow: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    formInputShort: {
        background: '#FFFFFF',
        border: '1px solid #D9DDFE',
        borderRadius: '15px',
        width: '45%',
        padding: '17px 0 17px 24px',
        fontWeight: '400',
        fontSize: '16px',
        lineHeight: '24px',
        letterSpacing: '0.1em',
        outline: 'none',
    },
    formInputLong: {
        width: '100%',
        background: '#FFFFFF',
        border: '1px solid #D9DDFE',
        borderRadius: '15px',
        padding: '17px 0 17px 24px',
        marginTop: '38px',
        fontWeight: '400',
        fontSize: '16px',
        lineHeight: '24px',
        letterSpacing: '0.1em',
        outline: 'none',
    },
    formTextarea: {
        marginTop: '38px',
        resize: 'none',
        width: '100% !important',
        background: '#FFFFFF',
        border: '1px solid #D9DDFE',
        borderRadius: '15px',
        padding: '17px 0 0 24px',
        height: '240px !important',
        fontWeight: '400',
        fontSize: '16px',
        lineHeight: '24px',
        letterSpacing: '0.1em',
        outline: 'none',
    },
    submitBtnWrapper: {
        width: '45%',
        float: 'right',
        '@media (max-width: 929px)': {
            marginTop: '22px',
            display: 'flex',
            justifyContent: 'flex-end',
        },
        '@media (min-width: 930px) and (max-width:1420px)': {
            marginTop: '22px',
            display: 'flex',
            justifyContent: 'flex-end',
        }
    },
    submitContactFormButton: {
        padding: '15px 38px 16px 37px',
        fontWeight: '600',
        fontSize: '16px',
        lineHeight: '24px',
        textAlign: 'center',
        letterSpacing: '0.1em',
        color: '#FFFFFF',
        background: '#FF64AE',
        boxShadow: '0px 17px 22px #FFEDF6',
        borderRadius: '50px',
        outline: 'none',
        borderColor: 'transparent',
        cursor: 'pointer',
    },
    flexRow: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        '@media (max-width: 929px)': {
            flexDirection: 'column',
            width: '100%',
        },
        '@media (min-width: 930px) and (max-width:1420px)': {
            width: '100%',
            margintop: '100px',
        }
    }
})

export default useStyles