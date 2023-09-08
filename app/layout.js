import './globals.css'


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <div className="bg-gray-950 flex flex-col justify-center items-center">
        
          {children}
        
      </div>
        </body>
    </html>
  )
}
