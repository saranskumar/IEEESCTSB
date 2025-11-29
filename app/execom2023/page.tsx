import TeamMember from "../components/TeamMember";

export default function Execom2023() {
    return (
        <main>
            <div className="breadcam_area bradcam_bg overlay2">
                <div className="bradcam_text">
                    <h3>EXECOM 2023</h3>
                </div>
            </div>

            <section style={{ paddingTop: '80px' }}>
                <div className="team_area" style={{ paddingTop: '0px', paddingBottom: '0px' }}>
                    <div className="container">
                        <div className="row" style={{ height: '150px' }}>
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
                            <div className="col-xl">
                                <div className="single_team text-center">
                                    <div className="thumb">
                                        <img src="/img/execom/pesc.png" style={{ width: '200px', height: '200px', borderRadius: '75px' }} alt="Deepa A K" />
                                    </div>
                                    <h2>Deepa A K</h2>
                                    <p>Advisor</p>
                                    <div className="col-xl-5 offset-xl-1 col-md-6"></div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <TeamMember name="Ajith RT" role="Chairperson" image="img/execom/ajith.jpg" />
                            <TeamMember name="Aleena Linson" role="Vice Chair" image="/img/execom/aleena.jpg" />
                            <TeamMember name="Nandagopan" role="Secretary" image="/img/execom/nandagopan.jpg" />
                        </div>

                        <div className="row">
                            <TeamMember name="Sufail" role="LINK Representative" image="/img/execom/sufail.jpg" />
                            <TeamMember name="Alfy Joseph" role="Membership Development Cordinator" image="/img/execom/alfy.jpg" imageStyle={{ width: '200px', height: '200px' }} />
                            <TeamMember name="Devika Rajeev" role="Membership Development Cordinator" image="/img/execom/devika.jpg" imageStyle={{ width: '200px', height: '200px' }} />
                        </div>

                        <div className="row">
                            <div className="col-6">
                                <TeamMember name="VishnuPriya" role="Treasurer" image="https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg" />
                            </div>
                            <div className="col-6">
                                <TeamMember name="Niranjana SR" role="Sub Treasurer" image="/img/execom/niranjana.jpg" imageStyle={{ width: '200px', height: '200px' }} />
                            </div>
                        </div>

                        <img src="img/sbc/small-cs.png" alt="CS" />
                        <div className="row">
                            <TeamMember name="Dr.Soniya B" role="CS Chapter Advisor" image="img/execom/sb.png" imageStyle={{ width: 'auto', height: 'auto' }} />
                            <TeamMember name="Krishna" role="Chairperson" image="https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg" />
                            <TeamMember name="Tapasvi Amruthlal" role="Vice Chairperson" image="https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg" />
                            <TeamMember name="Donal Mathew" role="Secretary" image="/img/execom/donal-1.jpg" imageStyle={{ width: '200px', height: '200px' }} />
                            <TeamMember name="Abhinand M" role="CS AI SIG COORDINATOR" image="https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg" />
                            <TeamMember name="M Nandini" role="CS WIC" image="/img/execom/nandini M.jpg" />
                        </div>

                        <img src="img/sbc/ras.png" alt="RAS" />
                        <div className="row">
                            <TeamMember name="Mrs. Sandhya L" role="RAS Chapter Advisor" image="img/execom/sl.png" imageStyle={{ width: 'auto', height: 'auto' }} />
                            <TeamMember name="Aswin Lal" role="Chairman" image="/img/execom/aswin.jpg" imageStyle={{ width: '200px', height: '200px' }} />
                            <TeamMember name="Al Imtiyas" role="Vice Chair" image="https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg" />
                            <TeamMember name="Nevin" role="Secretary" image="https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg" />
                        </div>

                        <img src="img/sbc/small-ias.png" alt="IAS" />
                        <div className="row">
                            <TeamMember name="Dr.Boby Philp" role="IAS Chapter Advisor" image="img/execom/iasa.png" imageStyle={{ width: 'auto', height: 'auto' }} />
                            <TeamMember name="Vidhu" role="Chairman" image="https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg" />
                            <TeamMember name="Abhijith Raj B" role="Vice Chairman" image="/img/execom/abhijith_raj.jpg" />
                            <TeamMember name="Pranav Baburajan" role="Secretary" image="https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg" />
                        </div>

                        <img src="img/sbc/small-pes.png" alt="PES" />
                        <div className="row">
                            <TeamMember name="Mrs.Deepa A K" role="PES Chapter Advisor" image="img/execom/pesc.png" imageStyle={{ width: 'auto', height: 'auto' }} />
                            <TeamMember name="Sreerag" role="Chairman" image="SB-Website/img/execom/sreerag.HEIC" imageStyle={{ width: '200px', height: '200px' }} />
                            <TeamMember name="Hari" role="Secretary" image="https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg" />
                        </div>

                        <img src="img/sbc/small-wie.png" alt="WIE" />
                        <div className="row">
                            <TeamMember name="Dr.Lakshmi V S" role="WIE Chapter Advisor" image="img/execom/lvs.png" imageStyle={{ width: 'auto', height: 'auto' }} />
                            <TeamMember name="DevaBadhra" role="Chairperson" image="https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg" />
                            <TeamMember name="Priya Piyuse" role="Vice Chairperson" image="https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg" />
                            <TeamMember name="Helen Sara Alex" role="Secretary" image="https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg" />
                        </div>

                        <img src="img/sbc/small-sight.png" alt="SIGHT" />
                        <div className="row">
                            <div className="col-6">
                                <TeamMember name="Aniz P N" role="Chairperson" image="https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg" />
                            </div>
                            <div className="col-6">
                                <TeamMember name="Anirudh S Nair" role="Vice Chairperson" image="https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg" />
                            </div>
                            <div className="col-6">
                                <TeamMember name="Akshay Sathya" role="Secretary" image="https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg" />
                            </div>
                        </div>

                        <h2>Activity Cordinators:</h2>
                        <div className="row">
                            <TeamMember name="Praful George" image="https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg" />
                            <TeamMember name="Gayathri" image="https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg" />
                        </div>

                        <br /><br />

                        <h2>Technical Committee</h2>
                        <div className="row">
                            <TeamMember name="Fahadh P N" role="Tech Head" image="https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg" />
                            <TeamMember name="Nandana" role="ECC" image="/img/execom/nandana.jpeg" imageStyle={{ width: '200px', height: '200px' }} />
                            <TeamMember name="Amith Biju" role="Webmaster" image="https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg" />
                            <TeamMember name="Rosh Cheriyan" role="Content Lead" image="https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg" />
                            <TeamMember name="Liyana" role="PDC Lead" image="https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg" />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
