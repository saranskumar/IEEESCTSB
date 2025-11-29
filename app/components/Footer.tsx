import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="footer footer_bg">
            <div className="footer_top">
                <div className="container-fluid p-0">
                    <div className="row no-gutters ">
                        <div className="col-xl-3 col-12 col-md-4">
                            <div className="footer_widget">
                                <div className="footer_logo">
                                    <Link href="/">
                                        <Image alt="logo" src="/img/logo.png" width={100} height={50} style={{ width: 'auto', height: 'auto' }} />
                                    </Link>
                                </div>
                                <ul className="social_links">
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-xl-9 col-12 col-md-8">
                            <div className="footer_header d-flex justify-content-between">
                                <div className="footer_header_left">
                                    <h3>Want to know more about Us?</h3>
                                    <p></p>
                                </div>
                                <div className="footer_btn">
                                    <a className="boxed-btn2" href="https://www.instagram.com/ieeesctsb/">Contact Us</a>
                                </div>
                            </div>

                            <div className="row">
                                <div className="center">
                                    <iframe
                                        allowFullScreen
                                        aria-hidden="false"
                                        frameBorder="0"
                                        height="300"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.2966107844445!2d76.9772397142738!3d8.47051109981907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05baee56e6b99b%3A0x4ce024c88eb0ddcb!2sSree%20Chitra%20Thirunal%20College%20of%20Engineering%2C%20Thiruvananthapuram!5e0!3m2!1sen!2sin!4v1592475746654!5m2!1sen!2sin"
                                        style={{ border: 0 }}
                                        tabIndex={0}
                                        width="300"
                                    ></iframe>
                                </div>

                                <div className="col-xl-4 col-12 col-md-4"></div>

                                <div>
                                    <div className="footer_widget">
                                        <h3 className="footer_heading">Reach Us!!!</h3>
                                        <ul className="quick_links">
                                            <li><a href="#">+91 8547393808</a></li>
                                            <li><a href="mailto:mailtoieeesctcb@gmail.com">mailtoieeesctcb@gmail.com</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer_copy_right">
                <p>
                    Copyright &copy;{new Date().getFullYear()} All rights reserved | The site is made with by IEEE SCT SB
                </p>
            </div>
        </footer>
    );
}
