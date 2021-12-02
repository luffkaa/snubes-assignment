import {
  CopyRights,
  Concepts,
  Footer,
  Header,
  WhySnubes,
  Feedbacks
} from './components';

function App() {
  return (
    <>
      <Header />
      <main>
        <Concepts />
        <WhySnubes />
        <Feedbacks />
      </main>
      <Footer />
      <CopyRights />
    </>
  );
}

export default App;
