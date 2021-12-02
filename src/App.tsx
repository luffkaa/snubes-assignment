import {
  CopyRights,
  Concepts,
  Footer,
  Header,
  WhySnubes
} from './components';

function App() {
  return (
    <>
      <Header />
      <main>
        <Concepts />
        <WhySnubes />
      </main>
      <Footer />
      <CopyRights />
    </>
  );
}

export default App;
