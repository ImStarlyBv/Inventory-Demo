import { useState } from "react"
import DownloadIconReact from "@iconsReact/DownloadIconReact"
import AddIconReact from "@iconsReact/AddIconReact"
import DotsOptionsIconReact from "@iconsReact/DotsOptionsIconReact"
import ExportTable from "./ExportTable"

const Options = () => {
  const [showOptions, setShowOptions] = useState(false)

  return (
    <>
      <div
        className="border-2 border-black flex items-center rounded-md">
        <button
          className="p-2 cursor-pointer"
          onClick={() => setShowOptions(!showOptions)}>
          <DotsOptionsIconReact />
        </button>
      </div>

      <div
        className={`options absolute ${showOptions ? "top-[115%] opacity-100 visible" : "top-0 opacity-0 invisible"} duration-400 right-0 bg-white p-5 border-2 border-black rounded-2xl`}>
        <button
          className="bg-[#35D399] text-[#333333] py-2 px-4 rounded-lg cursor-pointer flex gap-3 items-center w-full"
        >
          <AddIconReact />
          Añadir Producto
        </button>
        <ExportTable
          className="border-2 border-gray-500 py-2 px-4 rounded-lg cursor-pointer flex gap-3 items-center whitespace-nowrap mt-2"
        >
          <DownloadIconReact />
          Descargar inventario
        </ExportTable>
      </div>
    </>
  )
}

export default Options