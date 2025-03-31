import { jsPDF } from 'jspdf'
import { autoTable } from 'jspdf-autotable'
const doc = new jsPDF()

const ExportTablePdf = ({ children, className }) => {
  const now = new Date();
  const currentDate = `${now.getDate()}-${now.getMonth() + 1}-${now.getFullYear()}-${now.getHours()}-${now.getMinutes()}-${now.getSeconds()}`;

  const exportToPdf = () => {
    autoTable(doc, {
      styles: { 
        fillColor: false,
        fontSize: 14, // Tamaño de letra más grande
        fontStyle: 'bold' // Texto en negrita
      },
      headStyles:{fillColor: false},
      columnStyles:{0: {fillColor: false}},
      body: [
        [{ content: `Inventario ${currentDate}` }],
      ],
    })

    autoTable(doc, { html: '.inventory-table' })

    doc.save(`PDF-inventario_${currentDate}.pdf`)
  };

  return (
    <button
      className={`border-2 border-gray-500 py-2 px-4 rounded-lg cursor-pointer flex gap-3 items-center whitespace-nowrap ${className}`}
      onClick={exportToPdf}
    >
      {children}
    </button>
  );
};

export default ExportTablePdf;
