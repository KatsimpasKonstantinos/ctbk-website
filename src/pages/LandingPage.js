import "./LandingPage.css";

function LandingPage() {
    return (
        <div className="LandingPage">
            <img className="LandingPageImage" src="./media/wozi.jpg" alt="wozi" />

            <div className="LandingPageText">
                <p>
                    Der <a href="https://chaostreff-backnang.de/">Chaostreff Backnang</a> ist in erster Linie ein Anlaufpunkt zum Austausch und dem gemeinsamen Umsetzen von meist technisch angehauchten Projekten, wie z.B. Smarthome-Hardware, 3D-Druck und freien Softwareprojekten aber auch gesellschaftliche Themen wie Datenschutz und Daten­sicherheit.
                </p>
                <p>
                    Der Chaostreff Backnang ist dabei eine Community, die sich dem <a href="https://www.ccc.de/" >Chaos Computer Club</a> verbunden fühlt, ein Verein der Technik-Interessierten, der Datenreisenden und von Leuten mit „Spaß am Gerät“.
                </p>
            </div>
            <br />
        </div >
    );
}

export default LandingPage;