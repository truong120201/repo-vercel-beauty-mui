import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
    aboutUs: {
        padding: '0 150px',
        marginTop: '158px',
        display: 'flex',
        justifyContent: 'space-between',
        '@media (max-width: 929px)': {
            padding: '0 10px',
            marginTop: '120px',
            flexDirection: 'column',
        },
        '@media (min-width: 930px) and (max-width:1420px)': {
            padding: '0 30px',
            marginTop: '140px'
        }
    }

    , aboutUsEle: {
        width: '40%',
        '@media (max-width: 929px)': {
            width: '100%',
            '&:last-child': {
                marginTop: '30px'
            }
        },
    }

    , aboutUsLearnMoreBtn: {
        display: 'block',
        width: 'fit-content',
        marginTop: '35px',
        textDecoration: 'none',
        fontWeight: '600',
        fontSize: '16px',
        lineHeight: '24px',
        textAlign: 'center',
        letterSpacing: '0.1em',
        color: '#FFFFFF',
        background: '#FF64AE',
        boxShadow: '0px 17px 22px #FFEDF6',
        borderRadius: '50px',
        padding: '16px 40px 15px 41px',
        '@media (max-width: 929px)': {
            marginLeft: '30px'
        }
    }
})

export default useStyles