'use client';

import Script from 'next/script';
import { useEffect } from 'react';

export default function Contact() {

    // This function needs to be available globally for the inline onclick handler, 
    // or we should rewrite the button to use a React event handler.
    // Rewriting to React event handler is cleaner.

    const emailSender = () => {
        // @ts-ignore
        const Email = window.Email;

        const message = (document.getElementById("message") as HTMLTextAreaElement).value;
        const name = (document.getElementById("name") as HTMLInputElement).value;
        const email = (document.getElementById("email") as HTMLInputElement).value;
        const subject = (document.getElementById("subject") as HTMLInputElement).value;

        if (message == "") {
            alert("Enter Message");
        } else if (subject == "") {
            alert("Enter Subject");
        } else if (name == "") {
            alert("Enter Name");
        } else if (email == "") {
            alert("Enter Email");
        } else {
            if (Email) {
                Email.send({
                    SecureToken: "fd23cfeb-a4ba-49c6-b188-7402761f4187",
                    To: 'mailtoieeesctsb@gmail.com',
                    From: "mailtoieeesctsb@gmail.com",
                    Subject: "ieeesctsb.org | Contact Email",
                    Body: "Name = " + name + " |\n"
                        + "Email ID = " + email + " |\n"
                        + "Subject = " + subject + " |\n"
                        + "Message = " + message
                }).then(
                    (message: any) => alert(message)
                );
            } else {
                alert("Email service not loaded yet.");
            }
        }
    }

    return (
        <main>
            <Script src="https://smtpjs.com/v3/smtp.js" strategy="afterInteractive" />

            {/* breadcam_area_start */}
            <div className="breadcam_area bradcam_bg overlay2">
                <div className="bradcam_text">
                    <h3>Contact</h3>
                </div>
            </div>
            {/* breadcam_area_end */}

            {/* ================ contact section start ================= */}
            <section className="contact-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="contact-title">Get in Touch</h2>
                        </div>
                        <div className="col-lg-8">
                            <div className="row">
                                <div className="col-12">
                                    <div className="form-group">
                                        <textarea className="form-control w-100" name="message" id="message" cols={30} rows={9} placeholder=" Enter Message"></textarea>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <input className="form-control valid" name="name" id="name" type="text" placeholder="Enter your name" />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <input className="form-control valid" name="email" id="email" type="email" placeholder="Email" />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-group">
                                        <input className="form-control" name="subject" id="subject" type="text" placeholder="Enter Subject" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group mt-3">
                                <button onClick={emailSender} type="submit" className="button button-contactForm boxed-btn">Send</button>
                            </div>
                        </div>
                        <div className="col-lg-3 offset-lg-1">
                            <div className="media contact-info">
                                <span className="contact-info__icon"><i className="ti-home"></i></span>
                                <div className="media-body">
                                    <h3>NH 66, CTO Colony, <br />Pappanamcode, Thiruvananthapuram,<br /> Kerala 695018</h3>
                                </div>
                            </div>
                            <div className="media contact-info">
                                <span className="contact-info__icon"><i className="ti-tablet"></i></span>
                                <div className="media-body">
                                    <h3>+91 8547393808</h3>
                                </div>
                            </div>
                            <div className="media contact-info">
                                <span className="contact-info__icon"><i className="ti-email"></i></span>
                                <div className="media-body">
                                    <h3>mailtoieeesctsb@gmail.com</h3>
                                    <p>Reach Us Anytime</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ================ contact section end ================= */}
        </main>
    );
}
