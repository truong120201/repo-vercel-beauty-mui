import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    clients: {
        marginTop: '100px'
    },
    clientList: {
        padding: '100px 150px',
        flexWrap: 'wrap',
        '@media (max-width: 929px)': {
            padding: '100px 20px',
        },
        '@media (min-width: 930px) and (max-width:1420px)': {
            padding: '100px 30px',
        },
        alignItems: 'center',
        justifyContent: 'center'
    },
    clientImg: {
        width: '20%',
        '@media (max-width: 929px)': {
            width: '30%'
        }
    }
})

export default useStyles