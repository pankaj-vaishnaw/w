import { useState } from "react"
// import {
//   Footer,
//   Header,
//   InvoiceForm,
//   InvoiceDetails,
//   Notes,
//   SendModal,
// } from "./components/index"
import Footer from "./components/Footer"
import InvoiceForm from "./components/InvoiceForm"
import InvoiceDetails from "./components/InvoiceDetails"
// import Notes from "./components/Notes"
import SendModal from "./components/SendModal"
import Header from "./components/Header"
import LoginButton from "./LoginButton"

export default function App() {
  const [showModal, setShowModal] = useState(false)

  const handlePrint = () => {
    window.print()
  }

  const handleDownload = () => {}

  const handleSend = () => {
    setShowModal(!showModal)
  }

  return (
    <>
      <main className="md:max-w-4xl md:mx-auto">
        <LoginButton/>
        <Header
          handlePrint={handlePrint}
          handleDownload={handleDownload}
          handleSend={handleSend}
        />
        {showModal && <SendModal setShowModal={setShowModal} />}
        <InvoiceForm />
        <InvoiceDetails />
         {/* <Notes />  */}
         <Footer />
      </main>
    </>
  )
}