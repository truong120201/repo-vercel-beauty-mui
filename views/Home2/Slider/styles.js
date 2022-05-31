import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
    slider: {
        paddingTop: '204px',
        paddingLeft: '150px',
        paddingRight: '295px',
        paddingBottom: '314px',
        '@media (max-width: 929px)': {
            padding: '0 10px',
            marginTop: '140px',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            paddingBottom: '100px',
        },
        '@media (min-width: 930px) and (max-width:1420px)': {
            padding: '0 30px',
            marginTop: '140px',
            paddingBottom: '300px',
        }
    }
    , sliderLeft: {
        width: '55%',
        '@media (max-width: 929px)': {
            width:'100%'
        },
    }

    , sliderRight: {
        width: '45%',
        justifyContent: 'flex-end',
        '@media (max-width: 929px)': {
            marginTop: '32px',
            justifyContent: 'flex-start',
            width:'100%'
        },
        '@media (min-width: 930px) and (max-width:1420px)':{
            justifyContent: 'center',
        }
    }


    , moreDetailBtn: {
        textDecoration: 'none',
        fontWeight: '600',
        fontSize: '16px',
        lineHeight: '24px',
        letterSpacing: '0.1em',
        color: '#FFFFFF',
        padding: '14px 31px 14px 29px',
        border: '1px solid #FFFFFF',
        borderRadius: '15px',
        fontFamily: 'Poppins'
    }

    , sliderTitle: {
        fontWeight: '600',
        fontSize: '48px',
        lineHeight: '125%',
        width: '100%',
        color: '#FFFFFF',
        marginBottom: '14px',
        fontFamily: 'Poppins',
        '@media (max-width: 929px)': {
            width: '100%'
        }
    }

    , sliderDesc: {
        fontWeight: '500',
        fontSize: '16px',
        lineHeight: '24px',
        letterSpacing: '0.1em',
        width: '100%',
        color: '#D8DCFF',
        marginBottom: '34px',
        fontFamily: 'Poppins',
        '@media (max-width: 929px)': {
            width: '100%'
        }
    }

    , playButtonText: {
        fontWeight: '600',
        fontSize: '16px',
        lineHeight: '24px',
        letterSpacing: '0.1em',
        color: '#FFFFFF',
        fontFamily: 'Poppins'
    }
})

export default useStyles