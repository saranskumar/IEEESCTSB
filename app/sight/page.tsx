import TeamMember from "../components/TeamMember";
import PhotoCarousel from "../components/PhotoCarousel";

export default function SIGHT() {
    const carouselImages = [
        "img/sight/2.jpg",
        "img/sight/3.jpg",
        "img/sight/1.jpg",
        "img/sight/4.jpg"
    ];

    return (
        <main>
            <div className="project_details" style={{ paddingTop: '0px', paddingBottom: '0px' }}>
                <div style={{ backgroundColor: '#F4F1F0', paddingTop: '50px', paddingBottom: '50px' }}>
                    <div className="container">
                        <h2>IEEE Special Interest Group on Humanitarian Technology <img src="img/sbc/small-sight1.png" alt="SIGHT Logo" /><br />SCT SB</h2>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6" style={{ height: '500px' }}>
                            <div className="project_details_left">
                                <div className="single_details" style={{ paddingTop: '50px' }}>
                                    <p style={{ boxShadow: '5px 10px #888888', border: '1px solid', paddingTop: '10px', paddingLeft: '10px', color: 'black' }}>
                                        IEEE Special Interest Group on Humanitarian Technology (SIGHT) group was officially launched in IEEE SCT SB in the year 2015.
                                        Ajumal S was the founding chairman and Prof. George M Joseph was in charge of the group.
                                        SIGHT partners with underserved communities and local organizations to leverage technology for sustainable development.
                                        <br /><br />
                                        IEEE SIGHT SCT SB in collaboration with M Shivakumar Memorial Trust conducted various School outreach programmes, workshops and medical camps over the past years.
                                    </p>
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
                                            <span className="sub_heading"></span>
                                            <div className="hi">
                                                <div className="px-4">
                                                    <h3>Team</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col align-self-center">
                                        <TeamMember name="Sufail S" role="Chairperson" image="https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg" />
                                    </div>
                                    <div className="col align-self-center">
                                        <TeamMember name="Sidharth G" role="Vice Chairperson" image="https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg" />
                                    </div>
                                    <div className="col align-self-center">
                                        <TeamMember name="Amal Irfan N" role="Secretary" image="https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg" />
                                    </div>
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
                                            <a href="iyp.html"><h4 className="mb-20">Ignite Your Passion</h4></a>
                                            <p><a href="iyp.html"><img src="project/careerguidance.jpg" style={{ height: '200px', width: '300px' }} alt="Ignite Your Passion" /></a></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="single-defination">
                                        <div className="boxp">
                                            <a href="enigmata.html"><h4 className="mb-20">Enigmata</h4></a>
                                            <p><a href="enigmata.html"><img src="project/enigmata.jpg" style={{ height: '200px', width: '300px' }} alt="Enigmata" /></a></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="single-defination">
                                        <div className="boxp">
                                            <a href="techwrite.html"><h4 className="mb-20">Tech Write</h4></a>
                                            <p><a href="techwrite.html"><img src="project/techwrite.jpg" style={{ height: '200px', width: '300px' }} alt="Tech Write" /></a></p>
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
