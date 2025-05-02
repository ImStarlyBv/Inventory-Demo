import React, { useState, useEffect } from 'react'
import FilterIconReact from "@iconsReact/FilterIconReact"
import InvoiceButton from './InvoiceButton';
import FormMultipleSteps from './FormMultipleSteps';

import data from "../data.json";
const allData = data.equipos;

const cellphones = allData;
const brands = data.marcas;

const FilterTable = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [totalFound, setTotalFound] = useState(0)
  const [showInvoiceForm, setShowInvoiceForm] = useState(false)

  const [formData, setFormData] = useState({
    customerName: "",
    productPrice: 12000,
    ITBIS: 3000,
    soldBy: "Nombre del vendedor",
  })

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

  function handleChange(e) {
    console.log(formData)
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const tabs = [
    (
      <div className="tab flex flex-col gap-2" key={0}>
        <div className="">
          <label htmlFor="inp-customer-name" className="font-semibold">
            Nombre de cliente
          </label>
          <input
            type="text"
            id="inp-customer-name"
            onChange={handleChange}
            name="customerName"
            className="block w-full rounded-lg px-4 p-2 bg-white"
            value={formData.customerName}
          />
        </div>

        <div className="">
          <label htmlFor="inp-initial-amount" className="font-semibold">
            Valor de producto
          </label>
          <div className="border-2 bg-gray-300 flex rounded-lg overflow-hidden border-transparent focus-within:border-black">
            <span className="pl-2 flex items-center">$</span>
            <div className="block w-full rounded-lg px-4 outline-none p-2">
              12,000.00
            </div>
          </div>
        </div>

        <div className="">
          <label htmlFor="inp-initial-amount" className="font-semibold">
            ITBIS (x%)
          </label>
          <div className="border-2 bg-gray-300 flex rounded-lg overflow-hidden border-transparent focus-within:border-black">
            <span className="pl-2 flex items-center">$</span>
            <div className="block w-full rounded-lg px-4 outline-none p-2">
              3,000.00
            </div>
          </div>
        </div>

        <div className="border-t-2 pt-3 mt-3 grid grid-cols-[auto_1fr] gap-5 items-center justify-between">
          <p className="font-semibold text-xl">Total</p>
          <div className="border-2 bg-gray-300 flex rounded-lg overflow-hidden border-transparent focus-within:border-black">
            <span className="pl-2 flex items-center">$</span>
            <div className="block w-full rounded-lg px-4 outline-none p-2">
              15,000.00
            </div>
          </div>
        </div>
      </div>
    ),
    (
      <div className="tab flex flex-col gap-2" key={1}>
        <div className="">
          <label htmlFor="inp-debt-type" className="font-semibold">
            Vendido por
          </label>
          <select
            id="inp-debt-type"
            className="block w-full rounded-lg p-2 bg-white"
            onChange={handleChange}
            name="soldBy"
            value={formData.soldBy}
          >
            <option value="1">Vendedor/a 1</option>
            <option value="2">Vendedor/a 2</option>
            <option value="3">Vendedor/a 3</option>
          </select>
        </div>

        <div className="">
          <p className="font-semibold">Algo mas:</p>
          <p className="border-2 border-orange-400 bg-white rounded-lg p-2">
            Otros campos o información que se desea agregar...
          </p>
        </div>
      </div>
    )
  ]

  return (
    <>
      {
        showInvoiceForm &&
        <FormMultipleSteps
          tabs={tabs}
          formTitle={"Nueva factura"}
          customerName={formData.customerName}
        />
      }

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
                  <InvoiceButton setShowInvoiceForm={setShowInvoiceForm} />
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