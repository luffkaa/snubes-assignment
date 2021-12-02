import { CopyRights, Footer, Header } from './components';
import Concepts from './components/Concepts';

function App() {
  return (
    <>
      <Header />
      <main>
        <Concepts />
      </main>
      <Footer />
      <CopyRights />
    </>
  );
}

export default App;
