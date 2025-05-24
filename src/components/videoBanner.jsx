import oroVideo from '../assets/videos/oro.mp4';

const VideoBanner = () => {


    return (
        <div >
            <div className="banner">
                <h3 className="titulo titulo2">Lingotes y Monedas</h3>
                <p className="titulo titulo2">Invierta en oro y asegure su patrimonio para las generaciones venideras.</p>
            </div>
            <video muted autoPlay loop playsInline>
                <source src={oroVideo} type="video/mp4"/>
            </video>
            <div className="capa"></div>
        </div>
    );
};

export default VideoBanner;