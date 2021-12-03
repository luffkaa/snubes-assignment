import {
  CopyRights,
  Concepts,
  Footer,
  Header,
  WhySnubes,
  Feedbacks,
  GetOffer
} from './components';

function App() {
  return (
    <>
      <Header />
      <main>
        <GetOffer />
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
