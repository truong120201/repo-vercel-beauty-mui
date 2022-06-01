import { makeStyles } from "@material-ui/core"

import backgr from '../../../assets/images/blog-top-backgr.svg'

const useStyles = makeStyles({
    banner: {
        marginTop: '36px',
        backgroundImage: `url('${backgr.src}')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'auto',
        padding: '121px 150px 107px 149px',
        '@media (max-width: 929px)': {
            padding: '121px 20px 107px 20px'
        },
        '@media (min-width: 930px) and (max-width:1420px)': {
            padding: '121px 30px 107px 30px'
        }
    }
    ,bannerHeading: {
        fontWeight: '600',
        fontSize: '36px',
        lineHeight: '125%',
        color: '#FFFFFF',
    }
    
    ,bannerDesc: {
        fontWeight: '500',
        fontSize: '16px',
        lineHeight: '24px',
        textAlign: 'right',
        letterSpacing: '0.1em',
        color: '#D9D9D9',
        fontFamily: 'Poppins'
    }
    
    
    ,blogMainContainer: {
        padding: '108px 150px 56px 150px',
        '@media (max-width: 929px)': {
            padding: '108px 20px 56px 20px',
            flexDirection: 'column'
        },
        '@media (min-width: 930px) and (max-width:1420px)': {
            padding: '108px 30px 56px 30px'
        }
    }
    
    ,mainContainerLeft: {
        width: '65%',
        '@media (max-width: 929px)': {
            width: '100%'
        },
        '@media (min-width: 930px) and (max-width:1420px)': {
            width: '50%'
        }
    }
    
    ,mainContainerRight: {
        width: '32%',
        '@media (max-width: 929px)': {
            width: '100%'
        },
        '@media (min-width: 930px) and (max-width:1420px)': {
            width: '40%'
        }
    }
    
    ,blogLeftElement: {
        marginBottom: '133px',
    }
    
    ,blogLeftImg: {
        width: '100%',
    }
    
    ,blogLeftElementDesc: {
        padding: '56px 42px 100px 76px',
        background: '#FFFFFF',
        boxShadow: '10px 13px 80px 14px #F2F4FF',
        borderRadius: '0px 0px 50px 50px',
        '@media (max-width: 929px)': {
            padding: '56px 20px 100px 20px'
        },
        '@media (min-width: 930px) and (max-width:1420px)': {
            padding: '56px 20px 100px 20px'
        }
    }
    
    ,blogLeftElementHeading: {
        marginBottom: '18px',
    }
    
    ,folderIcon: {
        marginRight: '15px',
    }
    
    ,blogLeftElementHeadingText: {
        fontWeight: '600',
        fontSize: '16px',
        lineHeight: '125%',
        color: '#FF64AE',
        fontFamily: 'Poppins'
    }
    
    ,blogLeftElementHeadingBot: {
        fontWeight: '600',
        fontSize: '36px',
        lineHeight: '125%',
        color: '#091156',
        marginBottom: '12px',
        fontFamily: 'Poppins'
    }
    
    ,blogLeftElementAbout: {
        fontWeight: '400',
        fontSize: '16px',
        lineHeight: '24px',
        letterSpacing: '0.1em',
        color: '#8B8B8B',
        marginBottom: '13px',
        fontFamily: 'Poppins'
    }
    
    ,blogLeftBtn: {
        background: '#FF64AE',
        boxShadow: '0px 17px 22px #FFEDF6',
        borderRadius: '50px',
        width: 'fit-content',
        padding: '16px 47px 15px 47px',
    }
    
    
    ,btnText: {
        fontWeight: '600',
        fontSize: '16px',
        lineHeight: '24px',
        textAlign: 'center',
        letterSpacing: '0.1em',
    
        color: '#FFFFFF',
        fontFamily: 'Poppins'
    }
    
    
    ,searchBtn: {
        background: '#172176',
        borderRadius: '0px 50px 50px 0px',
        width: 'fit-content',
        padding: '20px 25px 20px 25px',
        width: '77px',
    }
    
    ,inputSearchBlogRight: {
        flex: '1',
        paddingLeft: '27px',
        borderTopLeftRadius: '50px',
        borderBottomLeftRadius: '50px',
        /* boxShadow: 2px 4px 31px 9px #F2F4FF, */
        outline: 'none',
        borderColor: 'transparent',
    }
    
    ,searchBox: {
        display: 'flex',
        background: '#FFFFFF',
        /* boxShadow: 2px 4px 31px 9px #F2F4FF, */
        borderRadius: '50px',
    }
    
    ,blogRightElement: {
        background: '#FFFFFF',
        boxShadow: '2px 4px 31px 9px #F2F4FF',
    }
    
    ,blogRightEleHeading: {
        fontWeight: '600',
        fontSize: '16px',
        lineHeight: '125%',
        color: '#091156',
        marginBottom: '28px',
        fontFamily: 'Poppins'
    }
    
    ,blogRightBotElement: {
        marginBottom: '19px',
    }
    
    ,blogRightBot: {
        padding: '58px 38px 41px 38px',
        borderRadius: '50px',
        marginTop: '76px',
    }
    
    ,blogRightSubDivHeading: {
        fontWeight: '600',
        fontSize: '14px',
        lineHeight: '21px',
        letterSpacing: '0.1em',
    
        color: '#FF64AE',
        marginBottom: '5px',
        fontFamily: 'Poppins'
    }
    
    ,blogRightSubDivDesc: {
        fontWeight: '400',
        fontSize: '12px',
        lineHeight: '18px',
        letterSpacing: '0.1em',
    
        color: '#8B8B8B',
        fontFamily: 'Poppins'
    }
    
    ,blogRightSubDiv: {
        marginLeft: '26px',
    }
    
    ,categoryElement: {
        fontWeight: '400',
        fontSize: '14px',
        lineHeight: '21px',
        letterSpacing: '0.1em',
        marginBottom: '3px',
        color: '#8B8B8B',
        fontFamily: 'Poppins'
    }
    
    ,tags: {
        flexWrap: 'wrap',
    }
    
    ,tag: {
        width: '30%',
        fontWeight: '400',
        fontSize: '14px',
        lineHeight: '21px',
        /* identical to box height */
    
        textAlign: 'center',
        letterSpacing: '0.1em',
    
        color:' #8B8B8B',
    
        background: '#FFFFFF',
        boxShadow: '0px 4px 17px #EEF0FF',
        borderRadius: '50px',
    
        marginTop: '19px',
        padding: '2px 6px 3px 6px',
        fontFamily: 'Poppins'
    }
    
    ,socialMedias: {
        flexWrap: 'wrap',
    }
    
    ,socialMediaIcon: {
        width: '25%',
    }
    
    ,blogRightImg: {
        width: '82px',
        height: 'auto',
    }
})

export default useStyles