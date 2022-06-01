import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
    servicesWrapper: {
        padding: '125px 170px 73px 170px',
        '@media (max-width: 929px)': {
            padding: '125px 20px 141px 20px'
        },
        '@media (min-width: 930px) and (max-width:1420px)': {
            padding: '125px 30px 141px 30px'
        }
    }

    , serviceBanners: {
        flexWrap: 'wrap',
        marginTop: '100px',
    }

    , serviceBannerImage: {
        width: '100%',
        marginBottom: '68px',
    }

    , serviceBanner1: {
        width: '26%',
        '@media (max-width: 929px)': {
            order: '3',
            width: '45%',
        }
    }
    , serviceBanner4: {
        width: '26%',
        '@media (max-width: 929px)': {
            order: '4',
            width: '45%',
        }
    }

    , serviceBanner2: {
        width: '65%',
        '@media (max-width: 929px)': {
            order: '1',
            width: '100%'
        }
    }
    , serviceBanner3: {
        width: '65%',
        '@media (max-width: 929px)': {
            order: '2',
            width: '100%'
        }
    }
})


export default useStyles