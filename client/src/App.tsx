import { useEffect } from 'react';
import { Button } from './components/ui/button';

export default function App() {
  useEffect(() => {
    const fetcher = async () => {
      const res = await fetch('/api/expenses');
      const expenses = await res.json();

      console.log(expenses);
    };

    fetcher();
  }, []);

  return (
    <div>
      <Button>hello world</Button>
    </div>
  );
}
