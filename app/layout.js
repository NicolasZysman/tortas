import "../styles/globals.css"
import NavBar from "./components/navbar"

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body className="bg-[#fbc4ab]">
        <NavBar/>
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  )
}
