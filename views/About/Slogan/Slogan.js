import style from '../../../pages/About/About.module.css'

function Slogan() {
    return (
        <>
            <div className={style.slogan}>
                <div className={style.sloganDesc}>
                    <p className={style.sloganTitleTop}>Business Slogan</p>
                    <p className={style.sloganTitleBot}>Best responsibility and service for our customers</p>
                    <p className={style.sloganAbout}>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</p>
                </div>
            </div>
        </>
    )
}

export default Slogan