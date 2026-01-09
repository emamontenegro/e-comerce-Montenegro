const ItemCount = ({ stock, quantity, onAdd, onRemove }) => {
  return (
    <div className="item-count">
      <button onClick={onRemove} disabled={quantity === 0}>
        -
      </button>

      <span>{quantity}</span>

      <button onClick={onAdd} disabled={quantity >= stock}>
        +
      </button>
    </div>
  );
};

export default ItemCount;
