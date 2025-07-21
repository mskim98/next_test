import './globals.css';
import UseStateExample from '@/components/UseStateExample';
import UseEffectExample from '@/components/UseEffectExample';
import UseRefExample from '@/components/UseRefExample';
import UseReducerExample from '@/components/UseReducerExample';
import UseContextExample from '@/components/UseContextExample';

export default function Home() {
  return (
    <main style={{ maxWidth: 600, margin: '0 auto', padding: 24 }}>
      <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 32 }}>자주 사용하는 React Hooks 예제</h1>

      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 24, fontWeight: 600 }}>useState</h2>
        <p>컴포넌트 내부에서 상태를 저장하고 업데이트하는 가장 기본적인 훅</p>
        <UseStateExample />
      </section>

      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 24, fontWeight: 600 }}>useEffect</h2>
        <p>컴포넌트가 화면에 렌더링된 후 작업을 수행하거나 외부와 통신할 때 사용</p>
        <UseEffectExample />
      </section>

      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 24, fontWeight: 600 }}>useRef</h2>
        <p>렌더링과 상관없이 값을 기억하거나 DOM 요소에 직접 접근할 때 사용</p>
        <UseRefExample />
      </section>

      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 24, fontWeight: 600 }}>useReducer</h2>
        <p>복잡한 상태 전환 로직이 있을 때 상태와 로직을 분리해서 관리할 수 있는 훅</p>
        <UseReducerExample />
      </section>

      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 24, fontWeight: 600 }}>useContext</h2>
        <p>컴포넌트 계층 구조에서 중첩된 props 전달 없이 전역 값을 공유할 수 있게 해주는 훅</p>
        <UseContextExample />
      </section>
    </main>
  );
} 