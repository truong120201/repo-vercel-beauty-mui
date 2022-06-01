import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
    handling: {
        padding: '0 51px',
        marginTop: '40px',
        '@media (max-width: 929px)': {
            flexDirection: 'column',
            marginTop: '30px'
        },
        '@media (min-width: 930px) and (max-width:1420px)': {
            margin: '0'
        }
    }

    , handlingElement: {
        width: '30%',
        padding: '79px 77px 71px 77px',
        '@media (max-width: 929px)': {
            width: '100%',
            padding: '77px 20px',
            marginTop: '30px',
        },
        '@media (min-width: 930px) and (max-width:1420px)': {
            width: '30%',
            padding: '77px 30px'
        },
        '&:hover': {
            background: '#FFFFFF',
            boxShadow: '0px 25px 50px 25px #F7F7FF',
            borderRadius: '42px',
            cursor: 'pointer',
        }
    }

    , title1: {
        fontWeight: '600',
        fontSize: '16px',
        lineHeight: '125%',
        /* identical to box height, or 20px */

        textAlign: 'center',

        color: '#FF64AE',
        marginBottom: '15px',
        fontFamily: 'Poppins'
    }

    , title2: {
        fontWeight: '600',
        fontSize: '24px',
        lineHeight: '125%',
        textAlign: 'center',
        color: '#091156',
        marginBottom: '6px',
        fontFamily: 'Poppins'
    }

    , desc: {
        textAlign: 'center',
        fontWeight: '400',
        fontSize: '14px',
        lineHeight: '21px',
        textAlign: 'center',
        letterSpacing: '0.1em',

        color: '#8B8B8B',
        fontFamily: 'Poppins'
    }

    , handlingIcon: {
        marginBottom: '46px',
    }
})

export default useStyles