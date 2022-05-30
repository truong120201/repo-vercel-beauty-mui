import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    professionalTeams: {
        marginTop: '134px',
    },

    teams: {
        padding: '0 150px',
        paddingTop: '102px',
        flexDirection: 'row !important',
        '@media (max-width: 929px)': {
            flexDirection: 'column',
            padding: '30px 20px',
        },
        '@media (min-width: 930px) and (max-width:1420px)': {
            paddingLeft: '30px',
            paddingRight: '30px',
        }
    },

    team: {
        width: '30% !important',
        padding: '30px !important',
        '&:hover': {
            background: '#FFFFFF !important',
            boxShadow: '0px 25px 50px 25px #F7F7FF !important',
            borderRadius: '42px !important',
        },
        '@media (max-width: 929px)': {
            marginBottom: '24px !important',
            width: '100% !important',
        }
    },

    teamTitle: {
        marginTop: '53px !important',
        marginBottom: '15px !important',
        fontWeight: '600 !important',
        fontSize: '16px !important',
        lineHeight: '125% !important',
        color: '#FF64AE !important',
        fontFamily: 'Poppins !important'
    },

    teamName: {
        fontWeight: '600 !important',
        fontSize: '18px !important',
        lineHeight: '125% !important',
        color: '#091156 !important',
        marginBottom: '6px !important',
        fontFamily: 'Poppins !important'
    },

    teamDesc: {
        fontWeight: '400 !important',
        fontSize: '14px !important',
        lineHeight: '21px !important',
        textAlign: 'center !important',
        letterSpacing: '0.1em !important',
        fontFamily: 'Poppins !important',
        color: '#8B8B8B !important',
        marginBottom: '50px !important',
    },

    socialMediaIcons: {
        marginTop: '30px',
    },
})

export default useStyles