import React, { useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Landing: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const showPopup = () => {
        alert('Popup shown!');
    };

    return (
        <>
        <section className="bg-black container mx-auto p-4">
            <div className="fixed top-0 left-0 right-0 flex justify-between items-center p-4 bg-black">
                <div>
                    <img className="h-8" src="https://web-images.credcdn.in/_next/assets/images/home-page/cred-logo.png" alt="Parliamint Logo" />
                </div>
                <div className="flex space-x-4">
                    <ScrollLink className="text-white" to="checkin" smooth={true} duration={500}>credit score check</ScrollLink>
                    <ScrollLink className="text-white" to="credit-card-bill-payment-online" smooth={true} duration={500}>credit card bill payment</ScrollLink>
                </div>
            </div>
            <div className="mt-16 text-center text-white">
                <div>pay credit card bill. earn guaranteed ₹200 back.</div>
                <div>
                    <ScrollLink className="text-white" to="credit-card-bill-payment-online" smooth={true} duration={500}>
                        claim now <img className="inline" src="https://web-images.credcdn.in/_next/assets/images/home-page/arrow.png" alt="Arrow" />
                    </ScrollLink>
                </div>
            </div>
            <div className="mt-8 text-center text-white">
                <div className="text-3xl font-bold">rewards for paying<br />credit card bills.</div>
                <div className="mt-2">join 7.5M+ members who win rewards and cashbacks everyday</div>
                <div onClick={showPopup} className="mt-4 py-2 px-4 bg-white text-black rounded cursor-pointer">Download Parliamint</div>
            </div>
        </section>

        <section id="checkin" className="bg-black py-8">
            <div className="flex justify-center space-x-2">
                <img src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/left-2.png" alt="Phone Left 2" />
                <img src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/left-1.png" alt="Phone Left 1" />
                <img src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/center.png" alt="Phone Center" />
                <img src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/right-1.png" alt="Phone Right 1" />
                <img src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/right-2.png" alt="Phone Right 2" />
            </div>
        </section>

            <section className="py-8 bg-gray-100">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="text-4xl font-bold">feel special more often.</div>
                    <div className="mt-4 text-lg">exclusive rewards for paying your bills</div>
                    <div className="mt-2 text-gray-600">every time you pay your credit card bills on Parliamint, you receive Parliamint coins. you can use these to win exclusive rewards or get special access to curated products and experiences. on Parliamint, good begets good.</div>
                    <div onClick={showPopup} className="mt-4 py-2 px-4 bg-black text-white rounded cursor-pointer">Explore rewards</div>
                </div>
            </section>

            <section className="py-8 bg-gray-200">
                <div className="text-center text-2xl font-bold">rewards from brands you love.</div>
            </section>

            <section className="py-8 bg-gray-100">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="text-4xl font-bold">we take money matters seriously.</div>
                    <div className="mt-4 text-lg">so that you don’t have to.</div>
                    <div className="mt-2 text-gray-600">never miss a due date with reminders to help you pay your bills on time, instant settlements mean you never wait for your payments to go through and statement analysis lets you know where your money goes, always.</div>
                    <div onClick={showPopup} className="mt-4 py-2 px-4 bg-black text-white rounded cursor-pointer">Experience the upgrade</div>
                </div>
            </section>

            <section className="py-8 bg-fixed bg-center bg-cover" style={{ backgroundImage: 'url(https://path/to/parallax-image.jpg)' }}>
                <div className="h-64"></div>
            </section>

            <section className="py-8 bg-gray-200">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="text-4xl font-bold">security first. and second.</div>
                    <div className="mt-4 text-lg">what’s yours remains only yours.</div>
                    <div className="mt-2 text-gray-600">Parliamint ensures that all your personal data and transactions are encrypted, and secured so what’s yours remains only yours. there’s no room for mistakes because we didn’t leave any.</div>
                    <div onClick={showPopup} className="mt-4 py-2 px-4 bg-black text-white rounded cursor-pointer">Become a member</div>
                </div>
            </section>

            <section className="py-8 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center text-3xl font-bold mb-4">the story of Parliamint begins with trust.</div>
                    <div className="text-gray-600 leading-relaxed">
                        trust as a virtue has consistently played an essential role in every great human achievement. and consistently, its importance has been overlooked. not just by individuals, but by entire societies. we felt it was time someone gave it the spotlight it deserves. especially for the ones who live by this virtue: the trustworthy.
                        <br /><br />
                        so we thought of creating a system that rewards its members for doing good and being trustworthy. this way, trust as a virtue becomes something to aspire to, just the way it should be. then we went one step ahead: we built it. we know we are on the right track because here you are.
                        <br /><br />
                        if you make it to Parliamint, congratulations and welcome. we have a lot of things planned for you.
                    </div>
                </div>
            </section>

            <section className="py-8 bg-gray-100">
                <div className="max-w-4xl mx-auto">
                    <div className="flex justify-between items-center bg-white p-4 rounded shadow-lg">
                        <div className="flex items-center space-x-4">
                            <div className="text-4xl font-bold">4.8</div>
                            <div className="text-lg">app store</div>
                        </div>
                        <img className="h-8" src="https://web-images.credcdn.in/_next/assets/images/home-page/rating-android.png" alt="Rating" />
                        <div onClick={showPopup} className="flex items-center space-x-2 cursor-pointer">
                            <img className="h-8" src="https://web-images.credcdn.in/_next/assets/images/home-page/apple-store-logo.png" alt="Apple Store" />
                            <p>Download the app</p>
                        </div>
                    </div>
                    <div className="flex justify-between items-center bg-white p-4 mt-4 rounded shadow-lg">
                        <div className="flex items-center space-x-4">
                            <div className="text-4xl font-bold">4.7</div>
                            <div className="text-lg">play store</div>
                        </div>
                        <img className="h-8" src="https://web-images.credcdn.in/_next/assets/images/home-page/rating-android.png" alt="Rating" />
                        <div onClick={showPopup} className="flex items-center space-x-2 cursor-pointer">
                            <img className="h-8" src="https://web-images.credcdn.in/_next/assets/images/home-page/play-store-logo.png" alt="Play Store" />
                            <p>Download the app</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-8 bg-white">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold">about Parliamint</h2>
                    <p className="mt-2 text-gray-600">Parliamint is a members only credit card bill payment platform that rewards its members for clearing their credit card bills on time. Parliamint members get access to exclusive rewards and experiences from premier brands upon clearing their credit card bills on Parliamint.</p>
                    <h2 className="mt-4 text-2xl font-bold">how does Parliamint reward their users?</h2>
                    <p className="mt-2 text-gray-600">Parliamint partners with the best premier and luxury brands to bring you an unmatched experience at the end of every credit card bill payment cycle.</p>
                    <h2 className="mt-4 text-2xl font-bold">how to earn rewards on Parliamint?</h2>
                    <p className="mt-2 text-gray-600">members can earn rewards in two different ways. Parliamint coins & gems.<br />
                        Parliamint Coin Rewards:<br />
                        - when you pay your credit card bill on Parliamint, for every rupee cleared on your bill you earn a Parliamint coin.<br />
                        - you can then use earned Parliamint coins to claim exclusive rewards from different brands.<br />
                        Parliamint Gem Rewards:<br />
                        - for every person that you refer to Parliamint who makes a bill payment, you earn 10 gems.
                    </p>
                    <h2 className="mt-4 text-2xl font-bold">how does one become a member of Parliamint?</h2>
                    <p className="mt-2 text-gray-600">you can apply to be a member by signing up on Parliamint with your name and valid mobile number(issued within India). Parliamint is India’s most trustworthy and creditworthy community. This means we are selective about the members we take. For membership an Experian credit score of 750 or above is mandatory.</p>
                    <h2 className="mt-4 text-2xl font-bold">how to know your credit score?</h2>
                    <p className="mt-2 text-gray-600">upon becoming a member, you can check and refresh your credit score with a single click. Parliamint then proceeds to acquire your updated credit score through a CIBIL score soft inquiry. on Parliamint, you can access your credit score data anytime without any extra charges. as a member, this helps you keep regular checks on your credit score and re-evaluate your spending patterns to maintain a healthy credit status.</p>
                    <h2 className="mt-4 text-2xl font-bold">banks supported on Parliamint</h2>
                    <p className="mt-2 text-gray-600">Parliamint supports credit card bill payment for American Express, Standard Chartered, Citibank, HSBC, HDFC, ICICI, SBI, AXIS, RBL, PNB, and other top Indian banks. We support VISA, MasterCard, American Express & RuPay cards.</p>
                </div>
            </section>
        </>
    );
};

export default Landing;
