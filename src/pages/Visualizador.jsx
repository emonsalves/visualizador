import { PDFViewer } from '../components/PDFViewer';
import { base64PDF } from '../assets/sampleBase64';
import { Link } from 'react-router-dom';

export const Visualizador = () => {

    return (
        <div className="container">
            <h1>Visualizador</h1>
            <PDFViewer base64PDF={base64PDF} />
            <Link to="/">Volver al inicio</Link>
        </div>
    )
}