/* eslint-disable react/prop-types */
import { useState, useMemo } from 'react';
import { pdfjs, Document, Page } from 'react-pdf';

import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();

export const PDFViewer = ({ base64PDF }) => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [scale, setScale] = useState(1)

    const downloadPDF = () => {
        const linkSource = `data:application/pdf;base64,${base64PDF}`
        const downloadLink = document.createElement('a')
        const fileName = 'document.pdf'

        downloadLink.href = linkSource
        downloadLink.download = fileName
        downloadLink.click()
    }

    const printPDF = () => {
        const printWindow = window.open('', '_blank')
        if (printWindow) {
            printWindow.document.write(`
                <html>
                  <head>
                    <title>Print PDF</title>
                  </head>
                  <body style="margin:0;">
                    <embed width="100%" height="100%" src="data:application/pdf;base64,${base64PDF}" type="application/pdf">
                  </body>
                </html>
              `)
            printWindow.document.close()
            printWindow.focus()
            printWindow.print()
        }
    }

    const zoomIn = () => {
        setScale((prevScale) => Math.min(prevScale + 0.1, 2))
    }

    const zoomOut = () => {
        setScale((prevScale) => Math.max(prevScale - 0.1, 0.5))
    }

    const resetZoom = () => {
        setScale(1)
    }

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
                // file={samplePDF}
                file={`data:application/pdf;base64,${base64PDF}`}
                onLoadSuccess={onDocumentLoadSuccess}
                options={options}
                loading="Cargando documento..."
                style={{ width: 600 }}
            >
                <Page
                    pageNumber={pageNumber}
                    scale={scale} />
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
                <button onClick={() => downloadPDF()}>Descargar PDF</button>
                <button onClick={() => printPDF()}>Imprimir PDF</button>
            </div>
            <div>
                <button onClick={() => zoomIn()}>Zoom In</button>
                <button onClick={() => zoomOut()}>Zoom Out</button>
                <button onClick={() => resetZoom()}>Reset Zoom</button>
            </div>
            <p>
                <a href="/">Volver a la página de inicio</a>
            </p>
        </div>
    );
};