import { Navigate, Route, Routes } from 'react-router-dom';
import DeveloperPortal from '../pages/DeveloperPortal';
import ApiDocsHub from '../pages/ApiDocsHub';
import ApiReference from '../pages/ApiReference';
import ApiGettingStarted from '../pages/ApiGettingStarted';
import ApiWebhooks from '../pages/ApiWebhooks';
import ApiSampleCode from '../pages/ApiSampleCode';
import ApiErrorCodes from '../pages/ApiErrorCodes';

export default function DeveloperRoutes() {
  return (
    <Routes>
      <Route path="" element={<DeveloperPortal />} />
      <Route path="docs" element={<ApiDocsHub />} />
      <Route path="reference" element={<ApiReference />} />
      <Route path="getting-started" element={<ApiGettingStarted />} />
      <Route path="webhooks" element={<ApiWebhooks />} />
      <Route path="samples" element={<ApiSampleCode />} />
      <Route path="errors" element={<ApiErrorCodes />} />
    </Routes>
  );
  {/* Removed stray closing brace */}