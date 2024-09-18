import { PDFViewer } from '../components/PDFViewer';
import { base64PDF } from '../assets/sampleBase64';

export const Visualizador = () => {

    return (
        <div className="container">
            <h1>Visualizador</h1>
            <PDFViewer base64PDF={base64PDF} />
        </div>
    )
}