import Card from "../../components/common/card";
import useProducts from "../../hooks/useProducts";

const Home = () => {
  const { items: products, loading } = useProducts();

  if (loading) return <p>Cargando productos...</p>;

  return (
    <div className="product-grid">
      {products.map(product => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Home;
