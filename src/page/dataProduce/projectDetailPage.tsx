import React, { Suspense, lazy } from 'react';
import { useParams, useNavigate } from 'react-router-dom';


const writtenPages: Record<string, React.LazyExoticComponent<React.ComponentType>> = {
  'ame-mci-4.0': lazy(() => import('./AMEMCIPage')),
};

// Component hiển thị khi trang đang phát triển
const DefaultProjectDetail: React.FC<{ projectId: string }> = ({ projectId }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white pt-[120px]">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trang Chi Tiết Sản Phẩm
          </h1>
          <div className="w-20 h-1 bg-teal-600 mx-auto mb-6"></div>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-6 md:p-8 border border-gray-200 shadow-md">
          <div className="text-center">
            <div className="text-6xl mb-4">🚧</div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Trang đang được phát triển
            </h2>
            <p className="text-lg text-gray-600 mb-2">
              <strong>ID sản phẩm:</strong> 
              <code className="bg-gray-200 px-2 py-1 rounded ml-2">{projectId}</code>
            </p>
            <p className="text-gray-600 mb-6">
              Trang chi tiết cho sản phẩm này sẽ sớm được hoàn thiện.
            </p>
            
            <button
              onClick={() => navigate('/producePage')}
              className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition-colors mb-6"
            >
              ← Quay lại danh sách dự án
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

const LoadingFallback: React.FC = () => (
  <div className="flex items-center justify-center min-h-screen bg-white pt-[120px]">
    <div className="text-center">
      <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-teal-600 mx-auto"></div>
      <p className="mt-6 text-gray-600 text-lg">Đang tải trang...</p>
    </div>
  </div>
);

const ProjectDetailPage: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();

  if (!projectId) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white pt-[120px]">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600">Lỗi: Không tìm thấy ID sản phẩm</h2>
        </div>
      </div>
    );
  }

  const PageComponent = writtenPages[projectId];

  if (PageComponent) {
    return (
      <Suspense fallback={<LoadingFallback />}>
        <PageComponent />
      </Suspense>
    );
  }


  return <DefaultProjectDetail projectId={projectId} />;
};

export default ProjectDetailPage;
