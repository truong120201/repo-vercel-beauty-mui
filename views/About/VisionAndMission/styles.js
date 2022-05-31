import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
    visonAndMission: {
        padding: '0 150px',
        marginTop: '112px',
        display: 'flex',
        justifyContent: 'space-between',
        '@media (max-width: 929px)': {
            padding: '0 20px'
        },
        '@media (min-width: 930px) and (max-width:1420px)': {
            padding: '0 30px'
        }
    }
    
    ,titDescWrapper: {
        width: '50%',
        '@media (max-width: 929px)': {
            width: '100%',
            marginTop: '20px'
        }
    },
    imgWrapper: {
        width: '50%',
        '@media (max-width: 929px)': {
            width: '100%',
            marginBottom: '20px'
        }
    }
})

export default useStyles