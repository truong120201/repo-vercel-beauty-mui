import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
    serviceFAQ: {
        padding: '116px 234px',
        '@media (max-width: 929px)': {
            padding: '116px 20px'
        },
        '@media (min-width: 930px) and (max-width:1420px)': {
            padding: '116px 30px'
        }
    }

    , faqQuestion: {
        width: '100%',
        fontWeight: '600',
        fontSize: '16px',
        lineHeight: '24px',
        letterSpacing: '0.1em',
        color: '#091156',
        position: 'relative',
        marginBottom: '16px',
        fontFamily: 'Poppins'
    }

    , fqaAnswer: {
        background: '#F7F7FF',
        borderRadius: '0px 0px 20px 20px',
        padding: '52px 63px 53px 76px',
        borderTop: '1px solid #091156',
        fontWeight: '400',
        fontSize: '14px',
        lineHeight: '21px',
        letterSpacing: '0.1em',
        marginBottom: '28px',
        color: '#8B8B8B',
        fontFamily: 'Poppins',
        '@media (max-width: 929px)': {
            padding: '20px'
        },
        '@media (min-width: 930px) and (max-width:1420px)': {
            padding: '30px'
        }
    }

    , arr: {
        float: 'right',
        position: 'absolute',
        marginTop: 'auto',
        marginBottom: 'auto',
        right: '0',
    }

    , faqHeading: {
        fontWeight: '600',
        fontSize: '36px',
        lineHeight: '125%',
        textAlign: 'center',
        color: '#091156',
        fontFamily: 'Poppins'
    }

    , headingUnderline: {
        backgroundColor: '#FF64AE',
        width: '40px',
        height: '5px',
        borderRadius: '5px',
    }

    , center: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '18px',
        marginBottom: '68px',
    }
})

export default useStyles