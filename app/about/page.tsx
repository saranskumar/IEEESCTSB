import Link from "next/link";
import Image from "next/image";

export default function About() {
    return (
        <main>
            {/* breadcam_area_start */}
            <div className="breadcam_area bradcam_bg overlay2">
                <div className="bradcam_text">
                    <h3>About Us</h3>
                </div>
            </div>
            {/* breadcam_area_end */}

            {/* about_area_start */}
            <div className="about_area" style={{ paddingTop: '20px', borderTopWidth: '10px', paddingBottom: '40px', backgroundColor: '#f7f7f7' }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-md-6">
                            <div className="about_thumb">
                                <div className="img img-video d-flex align-self-stretch align-items-center justify-content-center justify-content-md-end">
                                    <img src="/img/gif.gif" alt="About GIF" />
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-5 offset-xl-1 col-md-6">
                            <div className="about_info">
                                <div className="section_title">
                                    <span className="sub_heading">About Us</span>
                                    <h3>IEEE<br />SCT SB</h3>
                                </div>
                                <p></p>
                                <h5>IEEE started off in Sree Chitra Thirunal College Of Engineering with the registration of members on 23rd October 2009 with 30 members in its first phase. The Student Branch is one of the top 10 SBs in the Travancore Hub. Sree Chitra Thirunal College Of Engineering is one of the leading engineering colleges in Thiruvananthapuram, Kerala.</h5>
                                <p></p>
                                <ul className="about_list">
                                    <li>Founded :2009</li>
                                    <li>Current Strenght: 117 Members</li>
                                </ul>
                                <a className="boxed-btn" href="https://forms.gle/DpcY8Fwb9xAR4ei16">Join IEEE</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* about_area_end */}

            <div className="about_area" style={{ paddingTop: '5px', paddingBottom: '5px' }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-md-6">
                            <div className="single_team text-center">
                                <img src="/img/execom/pesc.png" alt="Deepa A K" />
                                <h3>Deepa A K</h3>
                                <p>Advisor</p>
                                <div className="col-xl-5 offset-xl-1 col-md-6"></div>
                            </div>
                        </div>

                        <div className="col-xl-5 offset-xl-1 col-md-6">
                            <div className="about_info">
                                <div className="section_title">
                                    <h3>Student Branch Avisor</h3>
                                </div>
                                <p></p>
                                <h5>Mrs Deepa AK has been working as Associate Professor in ECE Department of SCTCE, since 1999. She completed her B.Tech degree from University of Kerala in 1995 and M.Tech from University of Kerala in the year 2005.</h5>
                                <p></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* execom 2023 */}
            <div className="team_area" style={{ paddingTop: '0px', paddingBottom: '0px' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="section_title text-center mb-95">
                                <span className="sub_heading">Our Team</span>
                                <div className="hi">
                                    <div className="px-4">
                                        <h3>Meet Our SB</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xl-4 col-md-4">
                            <div className="single_team text-center">
                                <div className="thumb team_2">
                                    <img alt="" src="/img/execom/ajith.jpg" style={{ width: '200px', height: '200px', borderRadius: '75px' }} />
                                    <div className="author_links">
                                        <ul>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                        </ul>
                                    </div>
                                </div>
                                <h3>Ajith RT</h3>
                                <p>Chairperson</p>
                            </div>
                        </div>

                        <div className="col-xl-4 col-md-4">
                            <div className="single_team text-center">
                                <div className="thumb team_3">
                                    <img alt="" src="/img/execom/aleena.jpg" style={{ width: '200px', height: '200px', borderRadius: '75px' }} />
                                    <div className="author_links">
                                        <ul>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                        </ul>
                                    </div>
                                </div>
                                <h3>Aleena Linson</h3>
                                <p>Vice Chair</p>
                            </div>
                        </div>

                        <div className="col-xl-4 col-md-4">
                            <div className="single_team text-center">
                                <div className="thumb team_5">
                                    <img alt="" src="/img/execom/nandagopan.jpg" style={{ width: '200px', height: '200px', borderRadius: '75px' }} />
                                    <div className="author_links">
                                        <ul>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                        </ul>
                                    </div>
                                </div>
                                <h3>Nandagopan G</h3>
                                <p>Secretary</p>
                                <div className="col-xl-5 offset-xl-1 col-md-6"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="centerbutton">
                    <div className="button_cont text-center">
                        <Link className="example_b" href="/execom2023" rel="nofollow noopener" target="_blank">full panel</Link>
                    </div>
                </div>
            </div>

            {/* lastest_project_strat */}
            <div className="lastest_project" style={{ paddingTop: '50px', backgroundColor: '#f7f7f7' }}>
                <div className="container">
                    <div className="hi">
                        <div className="px-4">
                            <h2>Timeline</h2>
                        </div>
                    </div>

                    <div>
                        <div className="section_title padding-right">
                            <ul className="timeline">
                                {/* Item 1 */}
                                <li>
                                    <div className="direction-r">
                                        <div className="flag-wrapper">
                                            <span className="flag">Formation Of SB</span> <span className="time-wrapper"><span className="time">2009,October 23</span></span>
                                        </div>
                                    </div>
                                </li>
                                {/* Item 2 */}
                                <li>
                                    <div className="direction-l">
                                        <div className="flag-wrapper"><span className="time-wrapper"><span className="time">January 2014</span></span></div>
                                        <div className="desc">Anil Mathew Roy became the ECC of IEEE Travancore Hub</div>
                                    </div>
                                </li>
                                {/* Item 3 */}
                                <li>
                                    <div className="direction-r">
                                        <div className="flag-wrapper"><span className="time-wrapper"><span className="time">2017</span></span></div>
                                        <div className="desc">Alma Anwar became the LINK ECC of IEEE Kerala section</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="direction-l">
                                        <div className="flag-wrapper"><span className="time-wrapper"><span className="time">2017</span></span></div>
                                        <div className="desc">Arundhathi Kurup became IEEE Richard E Mervin Scholar<br />
                                            Hima Bindhu Bhardwaj became IEEE Richard E Mervin Scholar 2017</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="direction-r">
                                        <div className="flag-wrapper"><span className="time-wrapper"><span className="time">2018</span></span></div>
                                        <div className="desc">Arundhathi Kurup became the Regional Student Ambassador of IEEE Computer Society Asia Pacific (2018)<br />
                                            Hima Bindu Bharadwaj became the Regional Student Ambassador of IEEE Computer Society Asia Pacific(2018)<br />
                                            Nevin Baiju became the Industry Relations Lead at IEEE Computer Society</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="direction-l">
                                        <div className="flag-wrapper"><span className="time-wrapper"><span className="time">2019</span></span></div>
                                        <div className="desc">G. H. Giri became the ECC of IEEE Travancore Hub<br />
                                            Praveen G Anand became the Computer Society student coordinator of IEEE CS Chapter (2019)</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="direction-r">
                                        <div className="flag-wrapper"><span className="time-wrapper"><span className="time">2019</span></span></div>
                                        <div className="desc"><br />
                                            Team &lsquo;Planners on Mission&rsquo; secured 1st place in National Level in TDCS&rsquo;19 organized by IEEE Pune section<br />
                                            Adarsh Vijay K. S. secured 1st prize in PES Quiz organized by IEEE Kerala section(2019)</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="direction-l">
                                        <div className="flag-wrapper"><span className="time-wrapper"><span className="time">2019</span></span></div>
                                        <div className="desc">Team from IEEE SCT SB secured 3rd prize in Luxathon National level electrical hackathon organized by IEEE SB Karunagapally<br />
                                            Anandanarayan A became the ECC of IEEE Travancore Hub (2020)</div>
                                    </div>
                                    <div className="direction-r">
                                        <div className="flag-wrapper"><br />
                                            <br />
                                            <span className="flag">Achievements of </span> <span className="time-wrapper"><span className="time">Professional Members</span></span></div>
                                        <div className="desc"><br />
                                            Smt.Kutty Malu V. K. - VSAC IEEE Kerala Section<br />
                                            Smt.Deepa A. K. - Secretary, Wie Affinity Group, IEEE Kerala Section<br />
                                            Dr.Boby Philip &ndash; Secretary, Power &amp; Energy Society, Kerala Chapter<br />
                                            Smt.Sandhya L &ndash; Secretary, Robotics &amp; Automation Society, IEEE Kerala Chapter</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="direction-l">
                                        <div className="flag-wrapper"><span className="time-wrapper"><span className="time">June 2020</span></span></div>
                                        <div className="desc">Smt. Deepa A K and Smt.Sandhya L<br />
                                            has got their garde elevated to Senior Member of IEEE</div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* lastest_project_end */}

            {/* dream_service_start */}
            <section className="container" style={{ paddingTop: '20px' }}>
                <div className="section-top-border">
                    <div className="section_title text-center mb-20">
                        <span className="sub_heading">SB Chapetrs</span>
                        <div className="hi">
                            <div className="px-4">
                                <h3>Our Families</h3>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4 text-center os-init aos-init aos-animate">
                            <div className="single-defination">
                                <h4 className="mb-20"></h4>
                                <p><img src="/img/sbc/pes.png" alt="PES" /></p>
                            </div>
                        </div>

                        <div className="col-md-4 text-center os-init aos-init aos-animate">
                            <div className="single-defination">
                                <p><img src="/img/sbc/cs.png" alt="CS" /></p>
                            </div>
                        </div>

                        <div className="col-md-4 text-center os-init aos-init aos-animate">
                            <div className="single-defination">
                                <h4 className="mb-20"></h4>
                                <p><img src="/img/sbc/ras.png" alt="RAS" /></p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4 text-center os-init aos-init aos-animate">
                            <div className="single-defination">
                                <h4 className="mb-20"></h4>
                                <p><img src="/img/sbc/ias.png" alt="IAS" /></p>
                            </div>
                        </div>

                        <div className="col-md-4 text-center os-init aos-init aos-animate">
                            <div className="single-defination">
                                <h4 className="mb-20"></h4>
                                <p><img src="/img/sbc/wie.png" alt="WIE" /></p>
                            </div>
                        </div>

                        <div className="col-md-4 text-center os-init aos-init aos-animate">
                            <div className="single-defination">
                                <h4 className="mb-20"></h4>
                                <p><img src="/img/sbc/sight.png" alt="SIGHT" /></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* dream_service_end */}
        </main>
    );
}
