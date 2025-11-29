import Link from "next/link";

export default function Project() {
    return (
        <main>
            <div className="breadcam_area bradcam_bg overlay2">
                <div className="bradcam_text">
                    <h3>EVENTS</h3>
                </div>
            </div>

            <div className="lastest_project" style={{ backgroundColor: '#f7f7f7' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="section_title mb-60">
                                <h3>Events</h3>
                            </div>
                        </div>
                    </div>

                    <div className="row align-items-center mb-80">
                        <div className="col-xl-6 col-md-6">
                            <div className="single_project_thumb">
                                <img src="img/project/1.png" alt="Dhythi 3.0" />
                            </div>
                        </div>
                        <div className="col-xl-5 offset-xl-1 col-md-6">
                            <div className="section_title">
                                <span className="sub_heading2">February 1,2 | 2020</span>
                                <h4>Dhythi 3.0</h4>
                                <p>Dhyuthi is the flagship event of IEEE SCT SB.</p>
                                <a className="boxed-btn" href="https://dhyuthi.bitbucket.io/">View More</a>
                            </div>
                        </div>
                        <hr />
                    </div>

                    <div className="row align-items-center mb-80">
                        <div className="col-xl-6 col-md-6">
                            <div className="section_title">
                                <span className="sub_heading2">June 9| 2020</span>
                                <h4>Webinar on Nuclear Energy</h4>
                                <p>Webinar on Nuclear Energy – The need, The perception, The reality conducted by the Power and Energy Society of IEEE SCT SB as a part of World Environment.</p>
                                <Link className="boxed-btn" href="/nuclearpes">View More</Link>
                            </div>
                        </div>
                        <div className="col-xl-5 offset-xl-1 col-md-6">
                            <div className="single_project_thumb">
                                <img src="project/nuclearpes.jpeg" alt="Webinar on Nuclear Energy" />
                            </div>
                        </div>
                    </div>

                    <div className="row align-items-center mb-80">
                        <div className="col-xl-6 col-md-6">
                            <div className="single_project_thumb">
                                <img src="project/careerguidance.jpg" alt="Ignite Your Passion" />
                            </div>
                        </div>
                        <div className="col-xl-5 offset-xl-1 col-md-6">
                            <div className="section_title">
                                <span className="sub_heading2">June 5 |2020</span>
                                <h4>Ignite Your Passion</h4>
                                <p>The SIGHT IEEE SCT SB conducted a webinar on “CAREER GUIDANCE” Ignite_Your_Passsion.The session was about choosing a career pathway depending upon our interests and was also about their scopes in the future.The talk was conducted by Dr. Rakesh Godhwani.It was conducted for 10, 11 & 12 standard students.</p>
                                <Link className="boxed-btn" href="/iyp">View More</Link>
                            </div>
                        </div>
                    </div>

                    <div className="row align-items-center mb-80">
                        <div className="col-xl-6 col-md-6">
                            <div className="section_title">
                                <span className="sub_heading2">26 May| 2020</span>
                                <h4>Webinar on Cyber Safety</h4>
                                <p>The WIE AG IEEE SCT SB conducted a webinar on ‘Cyber Safety and Smart Social Networking’.The talk was given by Mr. Milivoje Batista, founder of Atrom G8, who had previously been involved in various cyber security firms.</p>
                                <Link className="boxed-btn" href="/cyber">View More</Link>
                            </div>
                        </div>
                        <div className="col-xl-5 offset-xl-1 col-md-6">
                            <div className="single_project_thumb">
                                <img src="project/cybersec1.jpg" alt="Webinar on Cyber Safety" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <center>
                <div style={{ backgroundColor: '#f7f7f7' }}>
                    <div className="pagination">
                        <Link className="active" href="/project">1</Link>
                        <a href="project2.html">2</a>
                        <a href="test.html">3</a>
                        <a href="test.html">4</a>
                        <a href="test.html">5</a>
                        <a href="test.html">6</a>
                    </div>
                </div>
            </center>
        </main>
    );
}
