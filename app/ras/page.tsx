import TeamMember from "../components/TeamMember";
import PhotoCarousel from "../components/PhotoCarousel";

export default function RAS() {
    const carouselImages = [
        "img/ras/1.jpg",
        "img/ras/2.jpg",
        "img/ras/3.jpg"
    ];

    return (
        <main>
            <div className="project_details" style={{ paddingTop: '0px', paddingBottom: '0px' }}>
                <div style={{ backgroundColor: '#F4F1F0', paddingTop: '50px', paddingBottom: '50px' }}>
                    <div className="container">
                        <h2>IEEE Robotics and Automation Society <img src="img/sbc/small-ras1.png" alt="RAS Logo" /><br />SCT SB</h2>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6" style={{ height: '500px' }}>
                            <div className="project_details_left">
                                <div className="single_details" style={{ paddingTop: '50px' }}>
                                    <p style={{ boxShadow: '5px 10px #888888', border: '1px solid', paddingTop: '10px', paddingLeft: '10px', color: 'black' }}>
                                        IEEE Robotics and Automation Society Student Branch Chapter became a part of IEEE SCT SB on 2015., Mrs Sandhya L as founding advisor.The IEEE Robotics and Automation Society's objectives are scientific, literary and educational in character. The Society strives for the advancement of the theory and practice of robotics and automation engineering and science and of the allied arts and sciences, and for the maintenance of high professional standards among its members, all in consonance with the Constitution and Bylaws of the IEEE and with special attention to such aims within the Field of Interest of the Society.
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
                                    <TeamMember name="Mrs. Sandhya L" role="RAS Chapter Advisor" image="img/execom/sl.png" />
                                    <TeamMember name="Nandini A" role="Chairman" image="https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg" />
                                    <TeamMember name="Arun A" role="Vice Chairman" image="https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg" />
                                    <TeamMember name="Devika AR" role="Secretary" image="https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg" />
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
                                            <a href="ros.html"><h4 className="mb-20">ROS Workshop</h4></a>
                                            <p><a href="ros.html"><img src="project/ros.jpg" style={{ height: '200px', width: '300px' }} alt="ROS Workshop" /></a></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="single-defination">
                                        <div className="boxp">
                                            <a href="indusenigma.html"><h4 className="mb-20">INDUS ENIGMA</h4></a>
                                            <p><a href="indusenigma.html"><img src="project/indusenigma.jpeg" style={{ height: '200px', width: '300px' }} alt="INDUS ENIGMA" /></a></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="single-defination">
                                        <div className="boxp">
                                            <a href="techquiz.html"><h4 className="mb-20">Technical Quiz</h4></a>
                                            <p><a href="techquiz.html"><img src="project/techquiz.jpg" style={{ height: '200px', width: '300px' }} alt="Technical Quiz" /></a></p>
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
