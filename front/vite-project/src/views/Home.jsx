import "../styles/index.css";

export const Home = () => {
    return (
        <>
            <img src="/banner2.jpg" alt="banner" id="banner-home" />
            <main className="main-container">
                <header className="header-home-page">
                    <h3 className="home-title">Relajate, disfruta, amate</h3>
                    <p className="all-p">
                    Creemos en el poder transformador del bienestar y la relajación.
                    Por eso te damos la bienvenida a Candle SPA, Ubicado en el corazón del Caribe, La Habana, Cuba.
                    </p>
                </header>

                <div className="combo-home">
                    <img
                        src="/photo1.jpg"
                        alt="masajes"
                        className="imgs-home"
                    />
                    <div>
                        <h5 className="home-title">Masajes Terapéuticos</h5>
                        <p className="all-p">
                            Desde masajes suecos hasta masajes de tejido
                            profundo, nuestros terapeutas altamente capacitados
                            utilizan técnicas avanzadas para aliviar el estrés y
                            las tensiones musculares.
                        </p>
                    </div>
                </div>
                <div className="combo-home">
                    <div>
                        <h5 className="home-title">Faciales Rejuvenecedores</h5>

                        <p className="all-p">
                        Nuestros tratamientos faciales utilizan productos de alta calidad para revitalizar y nutrir tu piel, dejándola radiante y saludable.
                        </p>
                    </div>
                    <img src="/photo2.jpg" alt="spa" className="imgs-home" />
                </div>
                <div className="combo-home">
                    <img src="photo3.jpg" alt="spa" className="imgs-home" />
                    <div>
                        <h5 className="home-title">Servicios de Belleza</h5>

                        <p className="all-p">
                        Desde manicuras y pedicuras hasta depilación y maquillaje, nuestros expertos en belleza están aquí para ayudarte a lucir y sentirte lo mejor posible.
                        </p>
                    </div>
                </div>
            </main>
        </>
    );
};
