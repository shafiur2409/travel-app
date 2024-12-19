import React from "react";
import "./App.css";
import Header from "./Header";
import Service from "./Service";
import ContactForm from "./ContactForm";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Header />
      <main>
        <section>
          <h2>Welcome to Vihaana Travels</h2>
          <p>Your adventure begins here. Explore the world with us!</p>
        </section>
        <section>
          <h2>Our Services</h2>
          <Service title="Tour Packages" description="Customized tour packages to suit your needs." />
          <Service title="Hotel Booking" description="Comfortable and affordable accommodations." />
          <Service title="Travel Assistance" description="24/7 customer support to guide your journey." />
        </section>
        <section>
          <h2>Contact Us</h2>
          <ContactForm />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;




