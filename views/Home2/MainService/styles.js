import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    services: {
        padding: '0 263px',
        marginTop: '158px',
        '@media (max-width: 929px)': {
            padding: '0 20px',
            marginTop: '120px'
        },
        '@media (min-width: 930px) and (max-width:1420px)': {
            padding: '0 30px',
            marginTop: '140px'
        }
    },
    listServices: {
        marginTop: '68px',
        '@media (max-width: 929px)': {
            flexWrap: 'wrap'
        }
    },
    service: {
        padding: '31px 36px 47px 36px',
        width: '30%',
        background: '#FFFFFF',
        border: '1px solid #E2E2E2',
        borderRadius: '25px',
        '&:hover': {
            background: ' #FFFFFF',
            border: '1px solid #9BA2E0',
            borderRadius: '25px',
            cursor: 'pointer',
        },
        '@media (max-width: 929px)': {
            width: '100%',
            margin: '10px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }
    },
    serviceHeading: {
        fontWeight: '600',
        fontSize: '18px',
        lineHeight: '125%',
        marginBottom: '16px',
        marginTop: '25px',
        color: '#091156',
    },
    serviceDesc: {
        fontWeight: '400',
        fontSize: '14px',
        lineHeight: '21px',
        letterSpacing: '0.1em',

        color: '#8B8B8B',
        marginBottom: '17px',
    },
    serviceLearnMore: {
        textDecoration: 'none',
        display: 'flex',
    },

    learnMoreText: {
        marginRight: '12px',
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: '14px',
        lineHeight: '125%',
        color: '#FF64AE',
    }
})

export default useStyles