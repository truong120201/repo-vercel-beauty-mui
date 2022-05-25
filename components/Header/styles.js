import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    headerNav: {
        textDecoration: 'none',
        color: '#8B8B8B',
        fontSize: '16px',
        fontWeight: '500',
        letterSpacing: '0.1em',
    },
    headerNav: {
        '&:hover': {
            color: '#414880',
        }
    },
    headerNavContact: {
        padding: '14px 41px',
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: '16px',
        lineHeight: '24px',
        letterSpacing: '0.1em',
        color: '#FFFFFF',
        background: '#FF64AE',
        borderRadius: '50px',
        marginLeft: '52px',
    },
    headerNavBlog: {
        marginLeft: '47px',
    },
    headerNavGallery: {
        marginLeft: '46px',
    },
    headerNavService: {
        marginLeft: '45px',
    },
    headerNavAbout: {
        marginLeft: '45px',
    },
    headerNavHome: {
        color: '#414880',
        fontWeight: '600',
        fontSize: '16px',
    },
    phoneBars: {
        display: 'none',
    },
    color1: {
        color: '#D8DCFF !important',
    },
    color1: {
        '&:hover': {
            color: '#fff !important',
        }
    },
    color1Home: {
        color: '#fff',
        fontWeight: '600',
        fontSize: '16px',
    },
    color1Home: {
        '&:hover': {
            color: '#fff !important',
        }
    }
})

export default useStyles