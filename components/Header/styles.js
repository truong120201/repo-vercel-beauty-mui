import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    header: {
        padding: '0 150px',
        paddingTop: '41px',
        '@media (min-width: 930px) and (max-width:1420px)': {
            padding: '0 30px',
            paddingTop: '10px',
        },
        '@media (max-width: 929px)': {
            padding: '0 20px',
            paddingTop: '10px',
        }
    },
    headerNav: {
        textDecoration: 'none',
        color: '#8B8B8B',
        fontSize: '16px',
        fontWeight: '500',
        letterSpacing: '0.1em',
        '&:hover': {
            color: '#414880',
            '@media (max-width: 929px)': {
                backgroundColor: '#f4f5ff'
            }
        },
        '@media (max-width: 929px)': {
            marginLeft: '0 !important',
            padding: '8px',
            width: '100% !important',
            textAlign: 'center !important',
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
        '&:hover': {
            color: '#fff !important',
        }
    },
    color1Home: {
        color: '#fff',
        fontWeight: '600',
        fontSize: '16px',
        '&:hover': {
            color: '#fff !important',
        }
    },
    ['@media (max-width: 929px)']: {
        show: {
            display: 'flex !important'
        },

        hide: {
            display: 'none !important'
        },
        phoneBars: {
            display: 'block',
            width: '50px',
            height: 'auto',
            cursor: 'pointer',
        },

        headerNavLink: {
            display: 'none',
            right: '0',
            position: 'fixed',
            top: '107px',
            flexDirection: 'column',
            width: '100%',
            alignItems: 'center',
            backgroundColor: '#e8eaff',
            zIndex: '9999',
        },

        headerNavContact: {
            color: '#8B8B8B',
            fontSize: '16px',
            fontWeight: '500',
            letterSpacing: '0.1em',
            backgroundColor: 'transparent',
            padding: '0',
            padding: '8px',
            borderRadius: '0',
        }
        , color1: {
            backgroundColor: '#5c608e'
        }

        , color1: {
            '&:hover': {
                color: '#000 !important'
            }
        }

        , color1Home: {
            backgroundColor: '#5c608e'
        }

        , color1Home: {
            '&:hover': {
                color: '#000 !important'
            }
        }
    },
    ['@media (min-width: 930px) and (max-width:1420px)']: {

        headerNav: {
            marginLeft: '20px'
        }
    }
})

export default useStyles