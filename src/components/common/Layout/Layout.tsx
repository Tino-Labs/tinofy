const Layout: React.FC<{}> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-900 mx-auto">
      <main>{children}</main>
    </div>
  )
}

export default Layout
