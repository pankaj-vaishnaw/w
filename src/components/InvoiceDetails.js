import React from "react";

export default function InvoiceDetails({
  itemDesc,
  quantity,
  price,
  amount,
}) {
  return (
    <>
      <section className="mt-10 px-5 lg:px-0">
        <table style={{ width: "100%" }}>
          <thead>
            <tr className="text-left bg-gray-200 p-2 rounded shadow">
              <th style={{ width: "50%" }}>Item Description</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{itemDesc}</td>
              <td>{quantity}</td>
              <td>{price}</td>
              <td>{amount}</td>
            </tr>
          </tbody>
        </table>

        <article className="flex items-end justify-end px-5 mt-10">
          <h3 className="font-bold flex items-center">
            Total: <span className="text-4xl ml-5">Kshs. 2120</span>
          </h3>
        </article>
      </section>
    </>
  );
}
