import React, {useEffect} from "react";
import styles from "../styles/ipl.module.css";

const IPL = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = `Parliamint Vivo IPL Power play Cashback & Mega Jackpot Rewards | Parliamint Vivo IPL Offers 2021 - Parliamint`;
      }, []);
    return (
        <>
        <section className={styles.section_ipl}>
            <div className={styles.logo_container}>
                    <img src="/assets/images/ipl_cred_logo.png" />
            </div>
            <img className={styles.ipl_main} src="/assets/images/ipl_main.png" />
            <div className={styles.cred_members}>
                <div className={styles.cred_members_text}>INDIAN PREMIER LEAGUE 2021</div>
                <div className={styles.cred_members_bold}>here’s how Parliamint members celebrated</div>
                <div className={styles.cred_members_body}>as the official partners for VIVO IPL 2021, Parliamint’s goal was simple: to make this time even more rewarding for our members. how? by giving them a reason to celebrate, each day of the tournament. and that’s exactly what happened.</div>
            </div>
        </section>
        <section>
            <div className={styles.percent_container}>
                <div>
                    <div>
                        <div>48 days of members winning</div>
                        <div>100%</div>
                        <div>cashback and jackpots. everyday.</div>
                    </div>
                </div>
                <img src="/assets/images/ipl_cashback.png" />
            </div>
            <div className={styles.trophy_container}>
                <div>₹4 crores+</div>
                <div>worth of jackpots given away to members</div>
                <img src="/assets/images/ipl_trophy.png" />
            </div>
            <div className={styles.prizes_container}>
                <div>BMW 720d • trip to maldives • kia seltos htx ivt • BMW r18 • electronics worth over ₹ 1 crore</div>
            </div>
            <div style={{background: "rgb(248, 101, 248)"}} className={styles.percent_container}>
                <div>
                    <div>
                        <div>members won jackpots from</div>
                        <div>200+ top brands</div>
                    </div>
                </div>
                <img style={{background: "rgb(31, 200, 127)"}} src="/assets/images/ipl_brands.png" />
            </div>
        </section>
        <section style={{paddingTop: "40px"}} className={styles.section_ipl}>
            <div className={styles.cred_members}>
                <div style={{marginTop: "0px"}} className={styles.cred_members_bold}>your perks are waiting</div>
                <div style={{paddingTop: "60px", letterSpacing: "0px", fontFamily: "gilroy-bold"}} className={styles.cred_members_text}>experience how the creditworthy pay their bills</div>
                <div className={styles.cred_members_body}>the creditworthy deserve a rewarding experience throughout the year. and that's exactly what Parliamint members get: pay your credit card bill online to get a taste of the perks in store for you.</div>
            </div>
        </section>
        </>
    );
};

export default IPL;