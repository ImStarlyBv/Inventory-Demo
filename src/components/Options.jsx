import { useState } from "react"
import DownloadIconReact from "@iconsReact/DownloadIconReact"
import AddIconReact from "@iconsReact/AddIconReact"
import DotsOptionsIconReact from "@iconsReact/DotsOptionsIconReact"
import ExportTableExcel from "./ExportTableExcel"
import GridIconReact from "@iconsReact/GridIconReact"
import PdfIconReact from "@iconsReact/PdfIconReact"
import ExportTablePdf from "./ExportTablePdf"

const Options = () => {
  const [showOptions, setShowOptions] = useState(false)

  return (
    <>
      <div
        className="border-2 border-black flex items-center rounded-md">
        <button
          className="p-2 cursor-pointer"
          onClick={() => setShowOptions(!showOptions)}
          title="Descargar inventario"
        >
          <DownloadIconReact />
        </button>
      </div>

      <div
        className={`options absolute ${showOptions ? "top-[115%] opacity-100 visible" : "top-0 opacity-0 invisible"} duration-400 right-0 bg-white p-5 border-2 border-black rounded-2xl`}>
        <ExportTableExcel>
          <GridIconReact />
          Descargar Excel
        </ExportTableExcel>
        <ExportTablePdf
          className="w-full mt-2"
        >
          <PdfIconReact />
          Descargar PDF
        </ExportTablePdf>
      </div>
    </>
  )
}

export default Options