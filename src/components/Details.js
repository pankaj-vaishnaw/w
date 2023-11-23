export default function Details({ itemDesc, items, quantity, price, amount }) {
    return (
      <>
        <h2>Details component</h2>
        <article>
          <p>{items.length} items</p>
          <ul>
            <li>{itemDesc}</li>
            <li>{quantity}</li>
            <li>{price}</li>
          </ul>
        </article>
      </>
    )
  }