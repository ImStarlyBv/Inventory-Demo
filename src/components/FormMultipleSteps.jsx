import React, { useState } from "react"
import generateInvoice from "@utils/generateInvoice"

const FormMultipleSteps = ({ tabs, formTitle, customerName }) => {
  const [currentTab, setCurrentTab] = useState(0)

  function nextPrev(n) {
    console.log("Here")

    if (currentTab === tabs.length - 1 && n === 1) {
      generateInvoice(customerName, {
        name: "Samsung Galaxy A12",
        quantity: 2,
        price: 6000
      })
    }

    //if (n === 1 && !validateForm()) return
    setCurrentTab((prev) => {
      const newTab = prev + n
      return newTab >= tabs.length ? prev : newTab
    })
  }

  return (
    <div className="bg-black/80 fixed top-0 left-0 w-full h-full flex items-center justify-center">
      <form
        className={`w-full bg-[#e6e6e6] rounded-[20px] flex flex-col gap-3 show-form p-4 md:w-fit lg:py-8 md:px-10 lg:px-10 lg:min-w-[500px]`}
      >

        <h2 className="text-xl font-semibold">{formTitle}</h2>

        {tabs[currentTab]}

        <div style={{ overflow: "auto" }}>
          <div className="flex justify-between">
            {currentTab > 0 ? (
              <button
                type="button"
                className="bg-[#333333] text-white py-2 px-4 rounded-lg cursor-pointer"
                onClick={() => nextPrev(-1)}>
                Anterior
              </button>
            ) : <span></span>}
            <button
              type="button"
              className="bg-[#35D399] text-[#333333] py-2 px-4 rounded-lg cursor-pointer"
              onClick={() => nextPrev(1)}>
              {currentTab === tabs.length - 1 ? "Guardar" : "Siguiente"}
            </button>
          </div>
        </div>

        <div className="text-center">
          {tabs.map((_, index) => (
            <span key={index} className={`h-[15px] w-[15px] mx-1 rounded-full inline-block ${index === currentTab ? "bg-[#333333]" : "bg-[#bbbbbb]"}`}></span>
          ))}
        </div>

      </form>
    </div>
  )
}

export default FormMultipleSteps