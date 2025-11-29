import TeamMember from "../components/TeamMember";
import PhotoCarousel from "../components/PhotoCarousel";

export default function WIE() {
    const carouselImages = [
        "img/wie/1.jpg",
        "img/wie/2.jpg",
        "img/wie/3.jpg",
        "img/wie/4.jpg"
    ];

    return (
        <main>
            <div className="project_details" style={{ paddingTop: '0px', paddingBottom: '0px' }}>
                <div style={{ backgroundColor: '#F4F1F0', paddingTop: '50px', paddingBottom: '50px' }}>
                    <div className="container">
                        <h2>IEEE Women in Engineering<img src="img/sbc/small-wie1.png" alt="WIE Logo" /><br />SCT SB</h2>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6" style={{ height: '500px' }}>
                            <div className="project_details_left">
                                <div className="single_details" style={{ paddingTop: '50px' }}>
                                    <p style={{ boxShadow: '5px 10px #888888', border: '1px solid', paddingTop: '10px', paddingLeft: '10px', color: 'black' }}>
                                        The WIE Affinity Group in our college commenced its working in the year 2011. Our primary aim is to bring about more girls and women into the applied science field. We provide an environment where women feel confident within the technical society. Students come together, once every week, to contribute and collaborate. Talks, seminars, workshops and competitions are conducted regularly to mend the gap of unknown knowledge. The future hold more such events to help people learn, communicate and grow.
                                    </p>
                                </div>
                                <div className="single_details">
                                    <h3>Connect. Support. Inspire.</h3>
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
                                    <TeamMember name="Mrs.Lakshmi VS" role="WIE Chapter Advisor" image="https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg" />
                                    <TeamMember name="Devika Rajeev P" role="Chairperson" image="https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg" />
                                    <TeamMember name="Bhadra M Balan" role="Vice Chairperson" image="https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg" />
                                    <TeamMember name="Sonal Santhosh" role="Secretary" image="https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg" />
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
                                            <a href="ducoer.html"><h4 className="mb-20">Du Coeur</h4></a>
                                            <p><a href="ducoer.html"><img src="project/ducoeur.jpg" style={{ height: '200px', width: '300px' }} alt="Du Coeur" /></a></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="single-defination">
                                        <div className="boxp">
                                            <a href="cyber.html"><h4 className="mb-20">Webinar: Cyber Safety</h4></a>
                                            <p><a href="cyber.html"><img src="project/cybersec1.jpg" style={{ height: '200px', width: '300px' }} alt="Cyber Safety" /></a></p>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
