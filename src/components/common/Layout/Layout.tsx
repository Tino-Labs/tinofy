const Layout: React.FC<{}> = ({ children }) => {
  return (
    <div className="h-screen bg-gray-900 mx-auto">
      <main>{children}</main>
    </div>
  )
}

export default Layout
