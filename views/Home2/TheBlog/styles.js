import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
    theBlog: {
        marginTop: '100px',
    },

    listBlog: {
        padding: '0 150px',
        marginTop: '79px',
        '@media (max-width: 929px)': {
            padding: '0 20px',
            marginTop: '100px',
            flexDirection: 'column',
        },
        '@media (min-width: 930px) and (max-width:1420px)': {
            padding: '0 30px',
            marginTop: '100px',
        }
    },

    blog: {
        width: '31%',
        background: '#FFFFFF',
        boxShadow: '0px 25px 50px 5px #F6F7FF',
        borderRadius: '25px',
        '@media (max-width: 929px)': {
            width: '100%',
            marginTop: '20px'
        }
    },

    blogImg: {
        width: '100%',
    },

    blogDescContainer: {
        padding: '56px 21px 72px 38px',
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