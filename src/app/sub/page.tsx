import UseMemoExample from '@/components/UseMemoExample';
import UseCallbackExample from '@/components/UseCallbackExample';

export default function SubPage() {
  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen">
      {/* 헤더 */}
      <header className="bg-white shadow p-4">
        <div className="container mx-auto text-center">
          <h1 className="text-2xl font-bold">React Hooks 시뮬레이션 - useMemo & useCallback</h1>
          <p className="text-sm text-gray-500">복잡한 연산 캐싱 & 함수 재사용</p>
        </div>
      </header>

      <main className="container mx-auto py-8 space-y-12">
        <UseMemoExample />
        <UseCallbackExample />
      </main>

      {/* 푸터 */}
      <footer className="bg-white shadow p-4 mt-12">
        <div className="container mx-auto text-center text-sm text-gray-500">
          © 2025 React useMemo & useCallback 예제 (순수 JS 기반)
        </div>
      </footer>
    </div>
  );
} 