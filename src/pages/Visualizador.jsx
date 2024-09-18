import { useState, useMemo } from 'react';
import { pdfjs, Document, Page } from 'react-pdf';
import samplePDF from '../assets/sample.pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();

export const Visualizador = () => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };

    const options = useMemo(() => ({
        cMapUrl: `https://unpkg.com/pdfjs-dist@${pdfjs.version}/cmaps/`,
        cMapPacked: true,
    }), []);

    return (
        <div className="container">
            <Document
                file={samplePDF}
                onLoadSuccess={onDocumentLoadSuccess}
                options={options}
                loading="Cargando documento..."
                style={{ width: 600 }}
            >
                <Page pageNumber={pageNumber} />
            </Document>
            <p>
                Página {pageNumber} de {numPages}
            </p>
            <div>
                <button
                    disabled={pageNumber <= 1}
                    onClick={() => setPageNumber(pageNumber - 1)}
                >
                    Página Anterior
                </button>
                <button
                    disabled={pageNumber >= numPages}
                    onClick={() => setPageNumber(pageNumber + 1)}
                >
                    Página Siguiente
                </button>
            </div>
        </div>
    );
};