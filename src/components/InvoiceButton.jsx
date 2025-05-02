import DownloadIconReact from "@iconsReact/InvoiceIconReact"

const InvoiceButton = ({setShowInvoiceForm}) => {
  function x() {
    console.log("Clicked!!")
    setShowInvoiceForm(true)
  }

  return (
    <button
      className="flex gap-2 border-2 border-black p-2 rounded-lg cursor-pointer"
      onClick={x}
      title="Facturar"
    >
      <DownloadIconReact />
    </button>
  )
}

export default InvoiceButton