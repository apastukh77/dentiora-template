import { Routes, Route } from "react-router-dom"
import { Layout } from "@/components/Layout"
import { ScrollToTop } from "@/components/ScrollToTop"
import { Home } from "@/pages/Home"
import { Services } from "@/pages/Services"
import { Location } from "@/pages/Location"
import { Contact } from "@/pages/Contact"

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicii" element={<Services />} />
          <Route path="/locatie" element={<Location />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </>
  )
}
