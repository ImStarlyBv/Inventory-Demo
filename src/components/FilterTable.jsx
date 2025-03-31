import React, { useState, useEffect } from 'react'
import InvoiceIconReact from "@iconsReact/InvoiceIconReact"
import FilterIconReact from "@iconsReact/FilterIconReact"

import data from "../data.json";
const allData = data.equipos;

const cellphones = allData;
const brands = data.marcas;

const FilterTable = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [totalFound, setTotalFound] = useState(0)

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const filteredCellphones = cellphones.filter((cellphone) =>
    cellphone.marca.toLowerCase().includes(searchTerm)
  );

  const filteredList = searchTerm ? filteredCellphones : filteredCellphones.slice(0, 10);

  useEffect(() => {
    setTotalFound(filteredList.length)
  }, [filteredList])

  return (
    <>
      <div className="mt-10 flex justify-between">
        <h3 className="text-2xl font-semibold flex items-center">Todos los productos</h3>

        {
          searchTerm &&
          <span className="flex items-center">
            Total encontrado {totalFound}
          </span>
        }

        <div className="search flex gap-2">
          <input
            type="text"
            placeholder="Buscar producto..."
            className="border-2 border-gray-300 px-5 py-2 rounded-lg"
            onInput={handleSearch}
          />

          <button
            className="border-2 border-gray-300 p-2 rounded-lg ml-2 flex gap-3 cursor-pointer"
          >
            <FilterIconReact />
            Filtros
          </button>
        </div>
      </div>

      <table
        className="inventory-table w-full border-2 border-gray-200 mt-5 border-collapse"
      >
        <thead className="bg-gray-200 text-[#8B8B8B] text-left">
          <tr>
            <th className="p-2">ID</th>
            <th className="p-2">Marca</th>
            <th className="p-2">Modelo</th>
            <th className="p-2">Almacenamiento</th>
            <th className="p-2">Color</th>
            <th className="p-2">Precio</th>
            <th className="p-2">Estado</th>
            <th className="p-2"></th>
          </tr>
        </thead>

        <tbody>
          {
            filteredList.map((cellphone, i) => (
              <tr key={i} className="text-[#8B8B8B]">
                <td className="p-2 border-2 border-y-gray-300 border-x-0">
                  {cellphone.id}
                </td>
                <td className="p-2 border-2 border-y-gray-300 border-x-0">
                  {cellphone.marca}
                </td>
                <td className="p-2 border-2 border-y-gray-300 border-x-0">
                  {cellphone.modelo}
                </td>
                <td className="p-2 border-2 border-y-gray-300 border-x-0">
                  {cellphone.almacenamiento}
                </td>
                <td className="p-2 border-2 border-y-gray-300 border-x-0">
                  {cellphone.color}
                </td>
                <td className="p-2 border-2 border-y-gray-300 border-x-0">
                  $ {cellphone.precio}
                </td>
                <td className="p-2 border-2 border-y-gray-300 border-x-0">
                  {cellphone.estado}
                </td>
                <td className="p-2 border-2 border-y-gray-300 border-x-0">
                  <button className="flex gap-2 border-2 border-black p-2 rounded-lg cursor-pointer">
                    <InvoiceIconReact />
                  </button>
                </td>
              </tr>
            ),
            )
          }
        </tbody>
      </table>
    </>
  )
}

export default FilterTable