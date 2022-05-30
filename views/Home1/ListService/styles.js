import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    listService: {
        marginTop: '82px',
        paddingLeft: '150px',
        paddingRight: '150px',
        '@media (max-width: 929px)': {
            flexDirection: 'column',
            padding: '0',
            paddingTop: '30px',
        },
        '@media (min-width: 930px) and (max-width:1420px)': {
            padding: '0 20px',
            paddingTop: '82px',
        }
    },
    service: {
        width: '30%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '52px 35px',
        background: '#FFFFFF',
        boxShadow: '0px 25px 50px 25px #F7F7FF',
        borderRadius: '42px',
        '@media (max-width: 929px)': {
            width: '100%',
            marginBottom: '24px !important'
        }
    },

    serviceTitle: {
        fontWeight: '600',
        fontSize: '18px',
        lineHeight: '125%',
        textAlign: 'center',
        color: '#091156',
        marginTop: '58px',
        marginBottom: '6px',
        fontFamily: 'Poppins'
    },

    serviceDesc: {
        textAlign: 'center',
        fontWeight: '400',
        fontSize: '14px',
        lineHeight: '21px',
        textAlign: 'center',
        letterSpacing: '0.1em',
        fontFamily: 'Poppins',
        color: '#8B8B8B',
    }
})

export default useStyles