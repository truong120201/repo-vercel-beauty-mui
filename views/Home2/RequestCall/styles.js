import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
    callDescHeading: {
        fontWeight: '600',
        fontSize: '36px',
        lineHeight: '125%',
        color: '#091156',
        marginBottom: '12px',
        marginTop: '0'
    }

    , callDescText: {
        fontWeight: '400',
        fontSize: '16px',
        lineHeight: '24px',
        letterSpacing: '0.1em',

        color: '#8B8B8B',
    },
    call: {
        padding: '169px 150px 151px 150px',
        '@media (max-width: 929px)': {
            flexDirection: 'column',
            padding: '100px 20px 100px 20px',
        },
        '@media (min-width: 930px) and (max-width:1420px)': {
            paddingLeft: '30px',
            paddingRight: '30px'
        }
    }

    , callDesc: {
        width: '40%',
        '@media (max-width: 929px)': {
            width: '100%',
            marginBottom: '40px'
        }
    }

    , callRight: {
        width: '60%',
        background: '#FFFFFF',
        '@media (max-width: 929px)': {
            width: '100%'
        }
    }

    , callInput: {
        width: '100%',
    }

    , callInputPlace: {
        flex: '1',
        border: '1px solid #D9DDFE',
        borderTopLeftRadius: '25px',
        borderBottomLeftRadius: '25px',
        paddingLeft: '37px',
        outline: 'none',
        display: 'flex',
        justifyContent: 'center'
    }


    , phoneIcon: {
        padding: '18px 34px',
        background: '#FF64AE',
        borderRadius: '0px 25px 25px 0px',
    }

    , callFootText: {
        textAlign: 'right',
        marginTop: '8px',
        fontStyle: 'italic',
        fontWeight: '400',
        fontSize: '12px',
        lineHeight: '18px',
        textAlign: 'right',
        letterSpacing: '0.1em',

        color: '#8B8B8B',
    }
})

export default useStyles