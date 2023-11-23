import { FaPrint, FaDownload } from "react-icons/fa"
import { IoIosSend } from "react-icons/io"

export default function Header({ handleSend, handleDownload, handlePrint }) {
  return (
    <>
      <header className="p-5 lg:px-0">
        <div className="flex flex-col items-center justify-between sm:flex-row">
          <h2 className="mb-3 sm:mb-0 text-4xl">Invoicer</h2>

          <ul className="flex items-center">
            <li className="mx-1">
              <button
                className="flex items-center bg-gray-300 text-gray-800 py-1 px-4 rounded shadow hover:bg-gray-400 transition-all duration-300"
                onClick={handlePrint}
              >
                Print <FaPrint className="ml-2" />
              </button>
            </li>
            <li className="mx-1">
              <button
                className="flex items-center bg-green-500 text-gray-100 py-1 px-4 rounded shadow hover:bg-green-600 transition-all duration-300"
                onClick={handleDownload}
              >
                Download <FaDownload className="ml-2" />
              </button>
            </li>
            <li className="mx-1">
              <button
                className="flex items-center bg-blue-500 text-gray-100 py-1 px-4 rounded shadow hover:bg-blue-600 transition-all duration-300"
                onClick={handleSend}
              >
                Send <IoIosSend className="ml-2" />
              </button>
            </li>
          </ul>
        </div>
      </header>
    </>
  )
}