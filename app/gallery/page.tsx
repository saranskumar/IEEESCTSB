export default function Gallery() {
    const images = [
        "img/elements/g1.jpg", "img/elements/g2.jpg", "img/elements/g3.jpg",
        "img/elements/g4.jpg", "img/elements/g5.jpg",
        "img/elements/g6.jpg", "img/elements/g7.jpg", "img/elements/g8.jpg",
        "img/elements/g9.jpg", "img/elements/g10.jpg", "img/elements/g11.jpg",
        "img/elements/g12.jpg", "img/elements/g13.jpg",
        "img/elements/g14.jpg", "img/elements/g15.jpg", "img/elements/g16.jpg"
    ];

    return (
        <main>
            <div className="breadcam_area bradcam_bg overlay2">
                <div className="bradcam_text">
                    <h3>Gallery</h3>
                </div>
            </div>

            <div className="section-top-border">
                <div className="container">
                    <div className="row gallery-item">
                        {images.map((img, index) => {
                            // Determine column size based on original HTML pattern
                            // Pattern seems to be: 4, 4, 4, 6, 6, 4, 4, 4
                            // Then repeat: 4, 4, 4, 6, 6, 4, 4, 4
                            let colClass = "col-md-4";
                            if (index === 3 || index === 4 || index === 11 || index === 12) {
                                colClass = "col-md-6";
                            }

                            return (
                                <div key={index} className={colClass}>
                                    <div className="single-gallery-image" style={{ background: `url(${img})` }}></div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </main>
    );
}
