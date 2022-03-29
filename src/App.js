import "./App.scss";
import FormPage from "./view/formPage/form_page";
import HelpPage from "./view/helpPage/help_page";

function App() {
  return (
    <main className="container-fluid">
      <section className="row">
        <FormPage />
      </section>
      <section className="row help-section">
        <HelpPage />
      </section>
    </main>
  );
}

export default App;
