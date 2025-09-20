import { jsx as _jsx, Fragment as _Fragment } from ";
import { Route } from 'react-router-dom, ';
import Marketplace from '@/pages/Marketplace;';
export default function MarketplaceRoutes() {
    return (_jsx(_Fragment, { children: _jsx(Route, { path: "", element: _jsx(Marketplace, {}) }) }))
}
import { Route, Routes } from "
import { ProtectedRoute } from "
import Marketplace from "
import Categories from "
import CategoryDetail from "
import Featured from "
import ListingDetail from "
import EquipmentPage from "
import EquipmentDetail from "
import PostJob from "
import JobDetails from "
import PublishProduct from "
import ServicesPage from "
import RequestQuote from "
import AIMatcher from "
import ServiceDescriptionGenerator from "
import ITOnsiteServicesPage from "
import SearchPage from "
import ProjectRoom from "
import VideoCall from "
import Checkout from "
import NewProductsPage from "
import MoreProductsPage from "
const MarketplaceRoutes = () => {
    return (<Routes>
      {/* Marketplace Routes */}
      <Route index element={<Marketplace />}/>
      <Route path="/categories" element={<Categories />}/>
      <Route path="/category/:slug" element={<CategoryDetail />}/>
      <Route path="/featured" element={<Featured />}/>
      <Route path="/marketplace/listing/:id" element={<ListingDetail />}/>
      <Route path="/listing/:id" element={<ListingDetail />}/>
      
      {/* Equipment Routes */}
      <Route path="/equipment" element={<EquipmentPage />}/>
      <Route path="/equipment/:id" element={<EquipmentDetail />}/>
      <Route path="/new-products" element={<NewProductsPage />}/>
      <Route path="/more-products" element={<MoreProductsPage />}/>
      
      {/* Job Routes */}
      <Route path="/post-job" element={<ProtectedRoute>
            <PostJob />
          </ProtectedRoute>}/>
      <Route path="/jobs/:id" element={<JobDetails />}/>
      
      {/* AI Matcher Routes */}
      <Route path="/ai-matcher" element={<AIMatcher />}/>
      <Route path="/match" element={<AIMatcher />}/>
      
      {/* Creator Routes */}
      <Route path="/publish" element={<ProtectedRoute>
            <PublishProduct />
          </ProtectedRoute>}/>
      
      {/* Service Routes */}
      <Route path="/services" element={<ServicesPage />}/>
      <Route path="/it-onsite-services" element={<ITOnsiteServicesPage />}/>
      <Route path="/request-quote" element={<RequestQuote />}/>
      <Route path="/service-description-generator" element={<ServiceDescriptionGenerator />}/>
      
      {/* Search Route */}
      <Route path="/search" element={<SearchPage />}/>

      {/* Checkout Route - accessible even in staging */}
      <Route path="/checkout" element={<ProtectedRoute>
            <Checkout />
          </ProtectedRoute>}/>
      
      {/* Project Room Routes */}
      <Route path="/project/:projectId" element={<ProtectedRoute>
            <ProjectRoom />
          </ProtectedRoute>}/>
      
      {/* Video Call Routes */}
      <Route path="/call/:roomId" element={<ProtectedRoute>
            <VideoCall />
          </ProtectedRoute>}/>
    </Routes>)
};
export export default MarketplaceRoutes;
