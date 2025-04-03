import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import logoBase64 from "public/logoBase64";

const generateInvoice = (customerName, product) => {
    const doc = new jsPDF();

    console.log(product)

    const cn = customerName || "Nombre de cliente - NULL"

    // Logo (Si tienes una URL base64)
    const logo = logoBase64; // Reemplaza con tu imagen base64
    doc.addImage(logo, "PNG", 10, 10, 40, 40);

    // Título
    doc.setFontSize(20);
    doc.text("Factura", 160, 20);

    // Datos de la empresa
    doc.setFontSize(10);
    doc.text("Nombre de empresa", 150, 30);
    doc.text("Ubi. Sample Street 123", 150, 35);
    doc.text("1234 AB, Sampletown", 150, 40);
    doc.text("República Dominicana", 150, 45);

    // Datos del cliente
    doc.setFont("helvetica", "bold");
    doc.text(cn, 10, 60);
    doc.setFont("helvetica", "normal");
    doc.text("Otro dato de cliente", 10, 65);
    doc.text("Cedula", 10, 70);
    doc.text("Num. teléfono", 10, 75);

    // Número de factura y fecha
    doc.setFont("helvetica", "bold");
    doc.text("Número de factura: 04042025-0001", 140, 60); // Formato de dia,mes,año,numero de facturas del dia
    doc.text("Fecha de factura: 04 abr. 2025", 140, 65);

    // Línea divisoria
    doc.line(10, 80, 200, 80);

    // Tabla de productos
    autoTable(doc, {
        startY: 85,
        head: [["Producto", "Cantidad", "Precio", "Total"]],
        body: [
            ["Test1", "2", "$33.87", "$67.74"],
            [product.name, product.quantity, product.price, (product.price * product.quantity)]
        ],
        styles: { fontSize: 10, halign: "center" }
    });

    // Totales
    doc.setFont("helvetica", "bold");
    doc.text("Subtotal:", 10, doc.lastAutoTable.finalY + 10);
    doc.text("$12,000.00", 40, doc.lastAutoTable.finalY + 10);

    doc.text("ITBIS X%:", 10, doc.lastAutoTable.finalY + 15);
    doc.text("$3,000.00", 40, doc.lastAutoTable.finalY + 15);

    doc.text("Total:", 10, doc.lastAutoTable.finalY + 30);
    doc.text("$15,000.00", 40, doc.lastAutoTable.finalY + 30);

    // Mensaje final
    doc.setFont("helvetica", "italic");
    doc.text("Gracias por su compra!!", 10, doc.lastAutoTable.finalY + 50);

    // Guardar el PDF
    doc.save("invoice.pdf");
};

// Exportar la función
export default generateInvoice;
