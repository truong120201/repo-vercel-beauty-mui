import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles({
    titleHeading: {
        width: '70%',
        '@media (max-width: 929px)': {
            width: '100%'
        },
        '@media (min-width: 930px) and (max-width:1420px)': {
            width: '80%'
        },
    }, 
    
    aboutUs: {
        padding: '125px 150px 58px 150px',
        '@media (max-width: 929px)': {
            padding: '125px 20px 58px 20px',
        },
        '@media (min-width: 930px) and (max-width:1420px)': {
            padding: '125px 30px 58px 30px',
        },
    },
    videoBannerWrapper: {
        position: 'relative',
        marginTop: '58px',
    },
    mainBanner: {
        boxShadow: '0px 25px 50px 25px #F6F7FF',
        borderRadius: '50px',
    },
    playBtn: {
        position: 'absolute',
        top: '0',
        bottom: '0',
        left: '0',
        right: '0',
        margin: 'auto',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
    }
})

export default useStyles