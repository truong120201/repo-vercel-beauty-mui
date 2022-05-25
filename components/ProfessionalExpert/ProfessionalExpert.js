import style from './ProfessionalExpert.module.css'
import { TitleAndDesc } from '../index.js'
import Image from 'next/image'

import team1 from '../../assets/images/team1.svg'
import team2 from '../../assets/images/team2.svg'
import team3 from '../../assets/images/team3.svg'
import facebook from '../../assets/images/Facebook.svg'
import instagram from '../../assets/images/Instagram.svg'
import twitter from '../../assets/images/Twitter.svg'

function ProfessionalExpert () {
    return (
        <div className={style.professionalTeams}>
                <div className={style.teamsDes}>
                    <TitleAndDesc
                        left={false}
                        title1={'Professional Teams'}
                        title2={'The Professional expert'}
                        desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.'}
                    />
                </div>
                <div className={style.teams}>
                    <div className={style.team}>
                        <Image
                            src={team1}
                            className={style.teamImage}
                        />
                        <p className={style.teamTitle}>Surgeon</p>
                        <p className={style.teamName}>Briyan Nevalli</p>
                        <p className={style.teamDesc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit</p>
                        <div className={style.teamSocialMedia}>
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
                        </div>
                    </div>
                    <div className={style.team}>
                        <Image
                            src={team2}
                            className={style.teamImage}
                        />
                        <p className={style.teamTitle}>Dermatologist</p>
                        <p className={style.teamName}>Bella sebastian</p>
                        <p className={style.teamDesc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit</p>
                        <div className={style.teamSocialMedia}>
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
                        </div>
                    </div>
                    <div className={style.team}>
                        <Image
                            src={team3}
                            className={style.teamImage}
                        />
                        <p className={style.teamTitle}>Stylist expert</p>
                        <p className={style.teamName}>Lilly Adams</p>
                        <p className={style.teamDesc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit</p>
                        <div className={style.teamSocialMedia}>
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
                        </div>
                    </div>

                </div>
            </div>
    )
}

export default ProfessionalExpert