import './globals.css'


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
            <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body className='flex items-center justify-center bg-gray-950'>
      <div className="bg-gray-950 flex flex-col justify-center items-center max-w-[1920px] overflow-hidden">
        
          {children}
        
      </div>
        </body>
    </html>
  )
}
