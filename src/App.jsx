import React from "react";
import { ShopProvider } from "./context/ShopContext";
import AppContent from "./layout/AppContent";

const App = () => {
  return (
    <ShopProvider>
      <AppContent />
    </ShopProvider>
  );
};

export default App;
