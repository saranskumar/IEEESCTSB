import TeamMember from "../components/TeamMember";
import PhotoCarousel from "../components/PhotoCarousel";

export default function IAS() {
    const carouselImages = [
        "img/ias/1.jpg",
        "img/ias/2.jpg",
        "img/ias/3.jpg",
        "img/ias/4.jpg"
    ];

    return (
        <main>
            <div className="project_details" style={{ paddingTop: '0px', paddingBottom: '0px' }}>
                <div style={{ backgroundColor: '#F4F1F0', paddingTop: '50px', paddingBottom: '50px' }}>
                    <div className="container">
                        <h2>IEEE INDUSTRY APPLICATIONS SOCIETY <img src="img/sbc/small-ias1.png" alt="IAS Logo" /><br />SCT SB</h2>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6" style={{ height: '500px' }}>
                            <div className="project_details_left">
                                <div className="single_details" style={{ paddingTop: '50px' }}>
                                    <p style={{ boxShadow: '5px 10px #888888', border: '1px solid', paddingTop: '10px', paddingLeft: '10px', color: 'black' }}>
                                        IEEE Industry Applications Society (IAS) was launched as a new Student Branch Chapter of IEEE SCT SB on 1st March, 2019. Prof.Vassilios G Agelidis from University of Denmark made the inaugural ceremony auspicious with his Distinguished Lecture Program(DLP).
                                        Abish Vijayan was the founding chairman and
                                        Dr Bobby Philip became the faculty advisor in charge.IEEE IAS aims at becoming a world leader in the advancement of science and technology linking theory and practice in the application of electrical and electronic systems for the benefit of humanity.IEEE Industry Applications Society enables the advancement of theory and practice in the design, development, manufacturing and application of safe, sustainable, reliable, smart electrical systems, equipment and services.
                                    </p>
                                </div>
                                <div className="single_details">
                                    <h3></h3>
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
                                            <span className="sub_heading">PES Team</span>
                                            <div className="hi">
                                                <div className="px-4">
                                                    <h3>EXECOM</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <TeamMember name="Dr.Chitrakumar VK" role="IAS Chapter Advisor" image="https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg" />
                                    <TeamMember name="Hari Krishana K" role="Chairman" image="https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg" />
                                    <TeamMember name="aqeel Hussain" role="Vice Chairman" image="https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg" />
                                    <TeamMember name="Babith B" role="Secretary" image="https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg" />
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
                                            <a href="iasquiz.html"><h4 className="mb-20">Industry 4.1</h4></a>
                                            <p><a href="iasquiz.html"><img src="project/industry.png" style={{ height: '200px', width: '300px' }} alt="Industry 4.1" /></a></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="single-defination">
                                        <div className="boxp">
                                            <a href="unmanned.html"><h4 className="mb-20">Webinar on Unmaned Vehicles</h4></a>
                                            <p><a href="unmanned.html"><img src="project/unmanned.jpg" style={{ height: '200px', width: '300px' }} alt="Webinar" /></a></p>
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
