import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    serviceDes: {
        padding: '0 153px 92px 150px',
        '@media (max-width: 929px)': {
            padding: '0 20px 92px 20px'
        },
        '@media (min-width: 930px) and (max-width:1420px)': {
            padding: '0 30px 92px 30px'
        }
    }
    , serviceDesImg: {
        width: '40%',
        '@media (max-width: 929px)': {
            width: '100%'
        }
    }

    , serviceTitleAndDesc: {
        width: '42%',
        '@media (max-width: 929px)': {
            width: '100%'
        }
    }

    , serviceDesFooter: {
        display: 'flex',
        alignItems: 'center',
    }

    , dbArrr: {
        marginLeft: '13px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }

    , serviceDesFooterText: {
        fontWeight: '600',
        fontSize: '16px',
        lineHeight: '24px',
        letterSpacing: '0.1em',
        // marginTop: '9px',
        color: '#091156'
    }
})

export default useStyles