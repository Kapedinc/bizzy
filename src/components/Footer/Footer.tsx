import React from 'react';
import logo from '../../assets/icon.png';
import './Footer.css';

class Footer extends React.Component{

    render(){
        return(
            <footer>
                    <div id="footer-container">
                        <div id="footer-left">
                            <img src={logo} alt="logo" width="57px"/>
                            <p>
                                <b>Registered office address:</b><br/>
                                Surekha Square,<br/> 
                                Nelson Road, Rehabari,<br/> 
                                Guwahati, 781008<br/>
                                Assam, India<br/>
                                Tel: 999-999-999<br/>
                            </p>
                        </div>
                        <div id="footer-right">
                            <div>
                                <p><b>about Parliamint</b></p>
                                <p>
                                    Parliamint is a members only invoice payment platform that rewards its members for clearing 
                                    their invoice on time. Parliamint members get access to exclusive rewards and experiences 
                                    from premier brands upon clearing their invoice on Parliamint.
                                </p>
                            </div>
                            <div>
                                <p><b>banks supported on Parliamint</b></p>
                                <p>
                                    Parliamint supports invoice payment for American Express, Standard Chartered, Citibank, HSBC, 
                                    HDFC, ICICI, SBI, AXIS, Kotak, RBL, PNB and other top Indian banks. We support VISA, MasterCard, 
                                    American express and RuPay cards.
                                </p>
                            </div>
                            <p>for product feedback, reach out to us at feedback@cred.club</p>
                        </div>
                    </div>
                </footer>
        );
    }
}

export default Footer;