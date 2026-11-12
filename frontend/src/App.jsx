import React, { useState } from 'react';
import { ThemePreferencesProvider } from './context/ThemePreferencesContext';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ThemeModal } from './components/ThemeModal';
import { ProtectedRoute } from './components/ProtectedRoute';

import { HomePage } from './pages/HomePage';
import { CatalogPage } from './pages/CatalogPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { CartPage } from './pages/CartPage';
import { OrderTrackingPage } from './pages/OrderTrackingPage';
import { SlicerQuotePage } from './pages/SlicerQuotePage';
import { SpecialServicesPage } from './pages/SpecialServicesPage';
import { SponsorsPage } from './pages/SponsorsPage';
import { InstitutionalPage } from './pages/InstitutionalPage';
import { AiParametricPage } from './pages/AiParametricPage';
import { LoginPage } from './pages/LoginPage';
import { AdminLayout } from './pages/admin/AdminLayout';

export function App() {
  const [currentPath, setCurrentPath] = useState('home');
  const [routeParams, setRouteParams] = useState({});

  const handleNavigate = (path, params = {}) => {
    setCurrentPath(path);
    setRouteParams(params || {});
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <ThemePreferencesProvider>
      <AuthProvider>
        <CartProvider>
          <div className="min-h-screen flex flex-col justify-between selection:bg-brand-500 selection:text-slate-950">
            <div>
              <Navbar currentPath={currentPath} onNavigate={handleNavigate} />
              <main className="animate-fadeIn">
                {currentPath === 'home' && <HomePage onNavigate={handleNavigate} />}
                
                {currentPath === 'catalog' && (
                  <CatalogPage
                    initialCategory={routeParams.category || 'Todos'}
                    onNavigate={handleNavigate}
                  />
                )}

                {currentPath === 'product-detail' && (
                  <ProductDetailPage
                    productId={routeParams.id || 'prod-3d-jarron'}
                    onNavigate={handleNavigate}
                  />
                )}

                {currentPath === 'cart' && <CartPage onNavigate={handleNavigate} />}

                {currentPath === 'tracking' && (
                  <OrderTrackingPage
                    initialOrderNumber={routeParams.orderNumber || ''}
                    onNavigate={handleNavigate}
                  />
                )}

                {currentPath === 'quote' && <SlicerQuotePage onNavigate={handleNavigate} />}

                {currentPath === 'special-services' && (
                  <SpecialServicesPage onNavigate={handleNavigate} />
                )}

                {currentPath === 'sponsors' && <SponsorsPage onNavigate={handleNavigate} />}

                {currentPath === 'institutional' && (
                  <InstitutionalPage onNavigate={handleNavigate} />
                )}

                {currentPath === 'ai-design' && <AiParametricPage onNavigate={handleNavigate} />}

                {currentPath === 'login' && (
                  <LoginPage
                    initialMode={routeParams.mode || 'login'}
                    redirectPath={routeParams.redirect || 'home'}
                    onNavigate={handleNavigate}
                  />
                )}

                {currentPath === 'admin' && (
                  <ProtectedRoute requireAdminRole={true} onRedirect={handleNavigate}>
                    <AdminLayout onNavigate={handleNavigate} />
                  </ProtectedRoute>
                )}
              </main>
            </div>

            <Footer onNavigate={handleNavigate} />
            <ThemeModal />
          </div>
        </CartProvider>
      </AuthProvider>
    </ThemePreferencesProvider>
  );
}

export default App;
