
const Footer = () => {
  return (
    <footer className="px-6 md:px-16 lg:px-24 xl:px-32 w-full">
  <div className="flex flex-col md:flex-row items-start justify-between py-10 gap-10 border-b border-gray-500/30">

    {/* LEFT SECTION */}
    <div className="max-w-md w-full">
      <svg fill="none" height="48" viewBox="0 0 40 48" width="40" xmlns="http://www.w3.org/2000/svg"><path d="m20.0001 4c-11.0458 0-20.0001 8.9543-20.0001 20.0001 0 11.0457 8.9543 20.0001 20.0001 20.0001 9.91 0 18.1366-7.2077 19.7235-16.6668h-.1435c-1.4802 5.7508-6.7005 10.0001-12.9133 10.0001-7.3638 0-13.3334-5.9696-13.3334-13.3334 0-7.3639 5.9696-13.3334 13.3334-13.3334 6.2128 0 11.4331 4.2492 12.9133 10h.1435c-1.5869-9.4591-9.8135-16.6667-19.7235-16.6667z" fill="#a4bcfd"/><g fill="#3538cd"><path d="m0 24.0001c0-11.0458 8.95434-20.0001 20.0001-20.0001 9.91 0 18.1366 7.2076 19.7235 16.6667h-13.4769c-1.4801-5.7508-6.7005-10-12.9133-10-7.36384 0-13.3334 5.9696-13.3334 13.3334z"/><path d="m0 24.0002c0 11.0457 8.95434 20 20.0001 20 9.91 0 18.1366-7.2076 19.7235-16.6667h-13.4769c-1.4801 5.7508-6.7005 10.0001-12.9133 10.0001-7.36384 0-13.3334-5.9696-13.3334-13.3334z"/></g></svg>

      <p className="mt-6 text-sm text-gray-500">
        Premium car rental service with a <br /> wide selection of luxury and everyday <br /> vehicles for all your driving needs.
      </p>

      <div className="flex items-center gap-3 mt-4">
        <a href="#"><svg width="20" height="20"  /></a>
        <a href="#"><svg width="20" height="20" /></a>
        <a href="#"><svg width="20" height="20"  /></a>
      </div>
    </div>

    {/* RIGHT SECTION */}
    <div className="flex justify-between w-full md:w-1/2 gap-10">

      <div>
        <h2 className="font-semibold text-gray-900 mb-5">QUICK LINKS</h2>
        <ul className="text-sm text-gray-500 space-y-2">
          <li><a href="#">Home</a></li>
          <li><a href="#">Browse Cars</a></li>
          <li><a href="#">List Your Car</a></li>
          <li><a href="#">About Us</a></li>
        </ul>
      </div>

      <div>
        <h2 className="font-semibold text-gray-900 mb-5">RESOURCES</h2>
        <ul className="text-sm text-gray-500 space-y-2">
          <li><a href="#">Help Center</a></li>
          <li><a href="#">Terms of Service</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Insurance</a></li>
        </ul>
      </div>

      <div>
        <h2 className="font-semibold text-gray-900 mb-5">CONTACT</h2>
        <ul className="text-sm text-gray-500 space-y-2">
          <li><a href="#">1234 Luxury Drive</a></li>
          <li><a href="#">Bhubaneswar</a></li>
          <li><a href="#">+91 28294462165</a></li>
          <li><a href="#">info@gmail.com</a></li>
        </ul>
      </div>

    </div>
  </div>

  <p className="py-4 text-center text-xs md:text-sm text-gray-500">
    @Copyright 2025. All Right Reserved. || Made with ❤️ by Sidharth
  </p>
</footer>

  )
}

export default Footer
