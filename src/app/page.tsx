import ExampleBox from '@/components/ExampleBox';
import UseStateExample from '@/components/UseStateExample';
import UseEffectExample from '@/components/UseEffectExample';
import UseRefExample from '@/components/UseRefExample';
import UseReducerExample from '@/components/UseReducerExample';
import MainHeader from '@/components/MainHeader';
import ThemeToggle from '@/components/ThemeToggle';

export default function Home() {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 min-h-screen">
      <MainHeader />
      <div className="container mx-auto py-8">
        <div className="flex justify-end mb-4">
          <ThemeToggle />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ExampleBox
            title="🟢 useState 개념: 상태 저장 및 변경"
            description="버튼을 누를 때마다 카운트가 올라가는 기능을 통해 상태(state)를 관리하는 개념을 체험합니다."
          >
            <UseStateExample />
          </ExampleBox>
          <ExampleBox
            title="🔵 useEffect 개념: 부수 효과 처리"
            description="타이머를 통해 컴포넌트가 렌더링된 이후 동작을 실행하는 구조를 체험합니다."
          >
            <UseEffectExample />
          </ExampleBox>
          <ExampleBox
            title="🟡 useRef 개념: DOM 직접 접근"
            description="특정 DOM 요소(input)에 직접 접근해서 포커스를 이동하는 기능을 구현합니다."
          >
            <UseRefExample />
          </ExampleBox>
          <ExampleBox
            title="🟣 useReducer 개념: 복잡한 상태 전환"
            description="간단한 할 일 목록을 추가하며 dispatch 방식 상태관리를 경험합니다."
          >
            <UseReducerExample />
          </ExampleBox>
        </div>
      </div>
      <footer className="bg-white dark:bg-gray-800 shadow p-4">
        <div className="container mx-auto text-center text-sm text-gray-500 dark:text-gray-400">
          © 2025 React Hook 예제 모음 (HTML + TailwindCSS)
        </div>
      </footer>
    </div>
  );
} 