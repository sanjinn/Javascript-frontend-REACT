import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeView from './views/HomeView'
import ContactView from './views/ContactView'
import NotFoundView from './views/NotFoundView'
import ProductsView from './views/ProductsView';
import ProductDetailsView from './views/ProductDetailsView';
import ProductProvider from './contexts/ProductContext'
import { ShoppingCartProvider } from './contexts/ShoppingCartContext';

function App() {
  return (
  <BrowserRouter>
    <ShoppingCartProvider>
      <ProductProvider>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/products" element={<ProductsView />} />
          <Route path="/products/:id" element={<ProductDetailsView />} />
          <Route path="/contacts" element={<ContactView />} />
          <Route path="*" element={<NotFoundView />} />
        </Routes>
      </ProductProvider>
    </ShoppingCartProvider>
  </BrowserRouter>
  );
}

export default App;

{/*
  const [products, setProducts] = useState([])
  const [featured, setFeatured] = useState([])
  const [sale, setSale] = useState([])
  
   <BrowserRouter>
<ProductsContext.Provider value={products}>
  <FeaturedProductsContext.Provider value={featured}>
    <SaleProductsContext.Provider value={sale}>
    <Routes>
      <Route path="/" element={<HomeView />} />
      <Route path="/products" element={<ProductsView />} />
      <Route path="/products/:id" element={<ProductDetailsView />} />
      <Route path="/contacts" element={<ContactView />} />
      <Route path="*" element={<NotFoundView />} />
    </Routes>
    </SaleProductsContext.Provider>
  </FeaturedProductsContext.Provider>
</ProductsContext.Provider>
</BrowserRouter> */}