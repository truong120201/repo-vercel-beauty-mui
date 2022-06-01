import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
    galleryBanner: {
        padding: '125px 150px 126px 150px',
        '@media (max-width: 929px)': {
            padding: '125px 20px 126px 20px'
        },
        '@media (min-width: 930px) and (max-width:1420px)': {
            padding: '125px 30px 126px 30px'
        }
    }

    , bannerTitleDesc: {
        marginBottom: '75px',
        '@media (max-width: 929px)': {
            flexDirection: 'column'
        }
    }

    , bannerTitle: {
        width: '60%',
        '@media (max-width: 929px)': {
            width: '100%'
        },
        fontFamily: 'Poppins'
    }

    , bannerTitle1: {
        marginBottom: '12px',
        fontWeight: '600',
        fontSize: '16px',
        lineHeight: '125%',
        fontFamily: 'Poppins',

        color: '#FF64AE',
    }

    , bannerTitle2: {
        fontWeight: '600',
        fontSize: '36px',
        lineHeight: '125%',
        color: '#091156',
        fontFamily: 'Poppins'
    }

    , bannerDesc: {
        fontWeight: '400',
        fontSize: '16px',
        lineHeight: '24px',
        letterSpacing: '0.1em',
        fontFamily: 'Poppins',
        color: '#8B8B8B',
        width: '36%',
        '@media (max-width: 929px)': {
            width: '100%'
        }
    }

    , bannerImages: {
        flexWrap: 'wrap',
    }

    , bannerImage: {
        width: '31%',
        marginBottom: '38px',
    }

    , bannerFooter: {
        fontWeight: '400',
        fontSize: '16px',
        lineHeight: '24px',
        letterSpacing: '0.1em',
        fontFamily: 'Poppins',
        color: '#8B8B8B',
        width: '60%',
        marginTop: '28px',
        '@media (max-width: 929px)': {
            width: '100%'
        }
    }
})

export default useStyles