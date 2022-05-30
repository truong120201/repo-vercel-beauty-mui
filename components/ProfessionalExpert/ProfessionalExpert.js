
import { TitleAndDesc } from '../index.js'
import Image from 'next/image'

import team1 from '../../assets/images/team1.svg'
import team2 from '../../assets/images/team2.svg'
import team3 from '../../assets/images/team3.svg'
import facebook from '../../assets/images/Facebook.svg'
import instagram from '../../assets/images/Instagram.svg'
import twitter from '../../assets/images/Twitter.svg'

// MUI

import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import useStyles from './styles'

function ProfessionalExpert() {

    const classes = useStyles()

    return (
        <Box className={classes.professionalTeams}>
            <Box>
                <TitleAndDesc
                    left={false}
                    title1={'Professional Teams'}
                    title2={'The Professional expert'}
                    desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.'}
                />
            </Box>
            <Grid container justifyContent='space-around' className={classes.teams}>
                <Grid container direction='column' justifyContent='center' alignItems='center' className={classes.team}>
                    <Image
                        src={team1}
                    />
                    <Typography align='center' className={classes.teamTitle}>Surgeon</Typography>
                    <Typography align='center' className={classes.teamName}>Briyan Nevalli</Typography>
                    <Typography align='center' className={classes.teamDesc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit</Typography>
                    <Grid container justifyContent='center' alignItems='center' className={classes.socialMediaIcons}>
                        <a href='#'>
                            <Image
                                src={facebook}
                            />
                        </a>
                        <a href='#'>
                            <Image
                                src={instagram}
                            />
                        </a>
                        <a href='#'>
                            <Image
                                src={twitter}
                            />
                        </a>
                    </Grid>
                </Grid>
                <Grid container direction='column' justifyContent='center' alignItems='center' className={classes.team}>
                    <Image
                        src={team2}
                    />
                    <Typography align='center' className={classes.teamTitle}>Dermatologist</Typography>
                    <Typography align='center' className={classes.teamName}>Bella sebastian</Typography>
                    <Typography align='center' className={classes.teamDesc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit</Typography>
                    <Grid container justifyContent='center' alignItems='center' className={classes.socialMediaIcons}>
                        <a href='#'>
                            <Image
                                src={facebook}
                            />
                        </a>
                        <a href='#'>
                            <Image
                                src={instagram}
                            />
                        </a>
                        <a href='#'>
                            <Image
                                src={twitter}
                            />
                        </a>
                    </Grid>
                </Grid>
                <Grid container direction='column' justifyContent='center' alignItems='center' className={classes.team}>
                    <Image
                        src={team3}
                    />
                    <Typography align='center' className={classes.teamTitle}>Stylist expert</Typography>
                    <Typography align='center' className={classes.teamName}>Lilly Adams</Typography>
                    <Typography align='center' className={classes.teamDesc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit</Typography>
                    <Grid container justifyContent='center' alignItems='center' className={classes.socialMediaIcons}>
                        <a href='#'>
                            <Image
                                src={facebook}
                            />
                        </a>
                        <a href='#'>
                            <Image
                                src={instagram}
                            />
                        </a>
                        <a href='#'>
                            <Image
                                src={twitter}
                            />
                        </a>
                    </Grid>
                </Grid>

            </Grid>
        </Box>
    )
}

export default ProfessionalExpert