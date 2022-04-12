//importing components
import Header from "./components/header";
import Hero from "./components/hero";
import Testimonial from "./components/testimonials";
import Footer from "./components/footer";
import { theme } from "./components/styled/theme";

// importing providers
import { ThemeProvider } from "styled-components";

export default function App () {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Hero />
        <Testimonial />
        <Footer />
      </ThemeProvider>
    </>
  )
}
