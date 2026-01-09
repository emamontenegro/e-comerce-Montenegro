import Card from "../card";

const ItemList = ({ items }) => {
  return (
    <div className="products-card">
      {items.map(item => (
        <Card key={item.id} product={item} />
      ))}
    </div>
  );
};

export default ItemList;
