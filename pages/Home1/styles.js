import { makeStyles } from '@material-ui/core'

import Home1SliderBackgr from '../../assets/images/Home1-slider-background.svg'
import BgrBubbleRight from '../../assets/images/bgr-bubble-right.svg'
import BgrBubbleLeft from '../../assets/images/bgr-bubble-left.svg'


const useStyles = makeStyles({
    home1: {
        width: '100%',
        backgroundImage: `url('${Home1SliderBackgr.src}'), url('${BgrBubbleRight.src}'), url('${BgrBubbleLeft.src}')`,
        backgroundRepeat: 'no-repeat, no-repeat, no-repeat',
        backgroundSize: '87% auto, auto, auto',
        backgroundPosition: 'top left, top 1320px right 0, top 2835px left 0'
    }
})

export default useStyles