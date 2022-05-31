import { makeStyles } from "@material-ui/core"
import choosingBackgr from '../../../assets/images/chosing-us-backgr.svg'

const useStyles = makeStyles({
    choosing: {
        marginTop: '158px',
        backgroundImage: `url('${choosingBackgr.src}')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'auto',
        padding: '272px 154px 178px 154px',
        '@media (max-width: 929px)': {
            padding: '120px 30px 80px 30px',
            flexDirection: 'column'
        },
        '@media (min-width: 930px) and (max-width:1420px)': {
            padding: '272px 30px 178px 30px'
        }
    },
    choosingTitle: {
        width: '42%',
        '@media (max-width: 929px)': {
            width: '100%',
            marginBottom: '30px'
        },
        '@media (min-width: 930px) and (max-width:1420px)': {
            width: '50%'
        }
    }

    , choosingData: {
        width: '42%',
        flexWrap: 'wrap',
        '@media (max-width: 929px)': {
            width: '100%',
        },
        '@media (min-width: 930px) and (max-width:1420px)': {
            width: '50%'
        }
    }

    , choosingDataChild: {
        width: '50%',
        marginBottom: '43px',
    }

    , choosingDataRigth: {
        marginLeft: '12px',
    }

    , choosingHeading: {
        fontWeight: '600',
        fontSize: '36px',
        lineHeight: '125%',
        color: '#FFFFFF',
        marginBottom: '12px',
    }

    , choosinDesc: {
        fontWeight: '400',
        fontSize: '16px',
        lineHeight: '24px',
        letterSpacing: '0.1em',

        color: '#D8DCFF',
    }

    , choosingCount: {
        fontWeight: '600',
        fontSize: '36px',
        lineHeight: '125%',
        color: '#FFFFFF',
    }
    , choosingCountDesc: {
        fontWeight: '600',
        fontSize: '16px',
        lineHeight: '125%',
        color: '#D8DCFF',
    }
})

export default useStyles