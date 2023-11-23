import { useState } from "react"
// import {
//   Person,
//   Client,
//   InvoiceNumber,
//   InvoiceDetails,
//   Details,
//   Notes,
//   Footer,
// } from "../components/index"
import Person from "./Person"
import Client from "./Client"
import InvoiceNumber from "./InvoiceNumber"
import InvoiceDetails from "./InvoiceDetails"
import Details from "./Details"
import Notes from "./Notes"
import Footer from "./Footer"

export default function InvoiceForm() {
  const [name, setName] = useState("")
  const [address, setAddress] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [clientName, setClientName] = useState("")
  const [clientAddress, setClientAddress] = useState("")
  const [invoiceNumber, setInvoiceNumber] = useState("")
  const [invoiceDate, setInvoiceDate] = useState("")
  const [dueDate, setDueDate] = useState("")
  const [notes, setNotes] = useState("")
  const [showInvoice, setShowInvoice] = useState(false)
  const [itemDesc, setItemDesc] = useState("")
  const [items, setItems] = useState([])
  const [quantity, setQuantity] = useState(1)
  const [price, setPrice] = useState(1)
  const [amount, setAmount] = useState(price * quantity)
  const [total, setTotal] = useState(amount)

  console.log(amount)

  const handleSubmit = (e) => {
    // Prevent page reload on form submit
    e.preventDefault()
  }

  return (
    <>
      {!showInvoice && (
        <section className="p-10 border-solid border-2 border-indigo-600 form-card">
          <h1 className="text-center px-5 mb-3 text-4xl lg:text-6xl">
            Welcome to <span className="text-blue-700">InvoiceR</span>
          </h1>
          <p className="text-center mb-5">
            Easily create your invoices online.
          </p>
          <p className="mb-5">
            Please fill in the form with accurate information. This is what will
            be displayed on your invoice.
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-start justify-start"
          >
            {/* Your details */}
            <label htmlFor="name" className="font-bold">
              Your name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-blue-200 rounded-lg"
            />
            <label htmlFor="address" className="font-bold">
              Where do you stay?
            </label>
            <input
              type="text"
              name="address"
              id="address"
              placeholder="Your address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full bg-blue-200 rounded-lg"
            />
            <label htmlFor="email" className="font-bold">
              Your email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-blue-200 rounded-lg"
            />
            <label htmlFor="tel" className="font-bold">
              Your phone number:
            </label>
            <input
              type="tel"
              name="tel"
              id="tel"
              placeholder="Your phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full bg-blue-200 rounded-lg"
            />
            {/* End of personal details */}

            {/* Client details */}
            <label htmlFor="clientName" className="font-bold">
              Client's name
            </label>
            <input
              type="text"
              name="clientName"
              id="clientName"
              placeholder="Client's name"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              className="w-full bg-blue-200 rounded-lg"
            />
            <label htmlFor="clientAddress" className="font-bold">
              Client's Address
            </label>
            <input
              type="text"
              name="clientAddress"
              id="clientAddress"
              placeholder="Client's address"
              value={clientAddress}
              onChange={(e) => setClientAddress(e.target.value)}
              className="w-full bg-blue-200 rounded-lg"
            />
            {/* End of client details */}

            {/* Invoice number */}
            <label htmlFor="invoice__number" className="font-bold">
              Invoice Number:
            </label>
            <input
              type="text"
              id="invoice__number"
              value={invoiceNumber}
              placeholder="e.g 1002"
              onChange={(e) => setInvoiceNumber(e.target.value)}
              className="w-full bg-blue-200 rounded-lg"
            />
            <label htmlFor="invoice__date" className="font-bold">
              Invoice date:
            </label>
            <input
              type="date"
              id="invoice__date"
             
              value={invoiceDate}
              onChange={(e) => setInvoiceDate(e.target.value)}
              className="w-full bg-blue-200 rounded-lg"
            />
            <label htmlFor="due__date" className="font-bold">
              Due date:
            </label>
            <input
              type="date"
              name="due__date"
              id="due__date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              className="w-full bg-blue-200 rounded-lg"
            />
            {/* End of invoice number */}

            {/* Invoice details */}
            <h3 className="text-xl">Invoice items and details</h3>
            <input
              type="text"
              name="text"
              id="text"
              placeholder="Enter item"
              required
              value={itemDesc}
              onChange={(e) => setItemDesc(e.target.value)}
              className="w-full bg-blue-200 rounded-lg"
            />
            <input
              type="number"
              name="quantity"
              id="quantity"
              placeholder="0"
              required
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="w-full bg-blue-200 rounded-lg"
            />
            <input
              type="number"
              name="price"
              id="price"
              placeholder="0"
              required
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full bg-blue-200 rounded-lg"
            />
            <Details
              itemDesc={itemDesc}
              items={items}
              quantity={quantity}
              price={price}
              amount={amount}
            />
            {/* End of invoice details */}

            {/* Additional Notes */}
            <Notes notes={notes} setNotes={setNotes} />
            {/* End of Additional Notes */}

            <button
              type="submit"
              onClick={() => setShowInvoice(true)}
              className="bg-blue-500 rounded-lg shadow text-white py-2 px-6 border-2 border-blue-500 hover:bg-transparent transition-all duration-300 hover:text-blue-500 mt-5"
            >
              Submit information
            </button>
          </form>
        </section>
      )}

      {/* Invoice */}
      <section className="bg-white p-10 mt-10 rounded-lg shadow">
        {showInvoice && (
          <>
            <Person name={name} address={address} />
            <Client clientName={clientName} clientAddress={clientAddress} />
            <InvoiceNumber
              invoiceNumber={invoiceNumber}
              dueDate={dueDate}
              invoiceDate={invoiceDate}
            />
            <InvoiceDetails price={price} quantity={quantity} amount={amount} />
            <div className="p-5 md:w-9/12 md:px-0">
              <h3 className="text-lg">Additional notes:</h3>
              <p>{notes}</p>
            </div>
            <Footer
              name={name}
              address={address}
              email={email}
              phoneNumber={phoneNumber}
            />
          </>
        )}
      </section>

      {showInvoice && (
        <button
          onClick={() => setShowInvoice(false)}
          className="bg-blue-500 rounded-lg shadow text-white py-2 px-6 border-2 border-blue-500 hover:bg-transparent transition-all duration-300 hover:text-blue-500 mt-5"
        >
          Edit information
        </button>
      )}
    </>
  )
}