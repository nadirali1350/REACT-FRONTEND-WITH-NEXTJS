import './globals.css'


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
            <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body>
      <div className="bg-gray-950 flex flex-col justify-center items-center">
        
          {children}
        
      </div>
        </body>
    </html>
  )
}
