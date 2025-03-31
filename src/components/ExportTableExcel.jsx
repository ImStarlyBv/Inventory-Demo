import React from 'react';
import * as XLSX from 'xlsx';

const ExportTableExcel = ({ children, className }) => {
  const now = new Date();
  const currentDate = `${now.getDate()}-${now.getMonth() + 1}-${now.getFullYear()}-${now.getHours()}-${now.getMinutes()}-${now.getSeconds()}`;

  const exportToExcel = () => {
    const tabla = document.querySelector('.inventory-table');
    const hoja = XLSX.utils.table_to_sheet(tabla);
    const libro = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(libro, hoja, 'Datos');
    XLSX.writeFile(libro, `inventario_${currentDate}.xlsx`);
  };

  return (
    <button
      className={`border-2 border-gray-500 py-2 px-4 rounded-lg cursor-pointer flex gap-3 items-center whitespace-nowrap ${className}`}
      onClick={exportToExcel}
    >
      {children}
    </button>
  );
};

export default ExportTableExcel;
