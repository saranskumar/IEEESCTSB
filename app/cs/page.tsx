import TeamMember from "../components/TeamMember";
import PhotoCarousel from "../components/PhotoCarousel";

export default function CS() {
    const carouselImages = [
        "img/cs/1.jpg",
        "img/cs/2.jpg",
        "img/cs/3.jpg",
        "img/cs/4.jpg"
    ];

    return (
        <main>
            <div className="project_details" style={{ paddingTop: '0px', paddingBottom: '0px' }}>
                <div style={{ backgroundColor: '#F4F1F0', paddingTop: '50px', paddingBottom: '50px' }}>
                    <div className="container">
                        <h2>IEEE COMPUTER SCIENCE SOCIETY &nbsp;&nbsp;&nbsp;<img src="img/sbc/small-cs1.png" alt="CS Logo" /><br />SCT SB</h2>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6" style={{ height: '500px' }}>
                            <div className="project_details_left">
                                <div className="single_details" style={{ paddingTop: '50px' }}>
                                    <p style={{ boxShadow: '5px 10px #888888', border: '1px solid', paddingTop: '10px', paddingLeft: '10px', color: 'black' }}>
                                        IEEE Computer Society SCT SB was inaugurated in the year 2017 and was chaired by Ms.Arundhati Kurup under the guidance of Mrs.Soniya B. Since its formation Computer Society has launched various events to enhance technological interests in students and most notable ones among them include Codelab, an initiative to develop coding interests in students and Friday Talk, series of talk sessions about relevant technologies.
                                    </p>
                                </div>
                                <div className="single_details">
                                    <h3>"Empowering the people who drives technology".</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6" style={{ height: '350px', paddingTop: '50px' }}>
                            <div className="projects_details_info">
                                <div className="details_thumb">
                                    <PhotoCarousel images={carouselImages} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <section>
                        <div className="team_area" style={{ paddingTop: '0px', paddingBottom: '0px' }}>
                            <div className="container">
                                <div className="row" style={{ height: '150px' }}>
                                    <div className="col-xl-12">
                                        <div className="section_title text-center mb-95">
                                            <span className="sub_heading">Team</span>
                                            <div className="hi">
                                                <div className="px-4">
                                                    <h3>EXECOM</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <TeamMember name="Dr.Rejimol Robinson" role="CS Chapter Advisor" image="https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg" />
                                    <TeamMember name="Rishyka Vinod S" role="Chairperson" image="https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg" />
                                    <TeamMember name="Janani CM" role="Vice Chairperson" image="https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg" />
                                </div>
                                <div className="row">
                                    <TeamMember name="Yohan Chandy" role="Secretary" image="https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg" imageStyle={{ display: 'block', marginLeft: '-20px', marginRight: 'auto', width: '117%' }} />
                                    <TeamMember name="Athul Chacko" role="AI SIG" image="https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg" />
                                    <TeamMember name="Riya Mary Sajan" role="CS WIC" image="https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg" />
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="container">
                        <div className="section-top-border">
                            <h3 className="mb-30">Recent Events</h3>
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="single-defination">
                                        <div className="boxp">
                                            <a href="bitsetgo.html"><h4 className="mb-20">Bit Set Go</h4></a>
                                            <p><a href="bitsetgo.html"><img src="project/bsgposter.jpg" style={{ height: '200px', width: '300px' }} alt="Bit Set Go" /></a></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="single-defination">
                                        <div className="boxp">
                                            <a href="industrytrends.html"><h4 className="mb-20">Webinar Industry Trends in Post-Covid World</h4></a>
                                            <p><a href="industrytrends.html"><img src="project/webinar.jpg" style={{ height: '200px', width: '300px' }} alt="Webinar" /></a></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="single-defination">
                                        <div className="boxp">
                                            <a href="runtimeterror.html"><h4 className="mb-20">Runtime Terror</h4></a>
                                            <p><a href="runtimeterror.html"><img src="project/rttposter.jpg" style={{ height: '200px', width: '300px' }} alt="Runtime Terror" /></a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
