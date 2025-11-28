
const Footer = () => {
  return (
    <footer className="px-6 md:px-16 lg:px-24 xl:px-32 w-full">
            <div className="flex flex-col md:flex-row items-start justify-center gap-10 py-10 border-b border-gray-500/30">
                
                <div className="max-w-96">
                    <svg fill="none" height="48" viewBox="0 0 40 48" width="40" xmlns="http://www.w3.org/2000/svg"><path d="m20.0001 4c-11.0458 0-20.0001 8.9543-20.0001 20.0001 0 11.0457 8.9543 20.0001 20.0001 20.0001 9.91 0 18.1366-7.2077 19.7235-16.6668h-.1435c-1.4802 5.7508-6.7005 10.0001-12.9133 10.0001-7.3638 0-13.3334-5.9696-13.3334-13.3334 0-7.3639 5.9696-13.3334 13.3334-13.3334 6.2128 0 11.4331 4.2492 12.9133 10h.1435c-1.5869-9.4591-9.8135-16.6667-19.7235-16.6667z" fill="#a4bcfd"/><g fill="#3538cd"><path d="m0 24.0001c0-11.0458 8.95434-20.0001 20.0001-20.0001 9.91 0 18.1366 7.2076 19.7235 16.6667h-13.4769c-1.4801-5.7508-6.7005-10-12.9133-10-7.36384 0-13.3334 5.9696-13.3334 13.3334z"/><path d="m0 24.0002c0 11.0457 8.95434 20 20.0001 20 9.91 0 18.1366-7.2076 19.7235-16.6667h-13.4769c-1.4801 5.7508-6.7005 10.0001-12.9133 10.0001-7.36384 0-13.3334-5.9696-13.3334-13.3334z"/></g></svg>
                    <p className="mt-6 text-sm text-gray-500">
                       Premium car rental service with a wide selection of luxury and everyday vehicles for all your driving needs.
                    </p>
                    <div className="flex items-center gap-2 mt-3">
                        <a href="#">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.167 2.5a9.1 9.1 0 0 1-2.617 1.275 3.733 3.733 0 0 0-6.55 2.5v.833a8.88 8.88 0 0 1-7.5-3.775s-3.333 7.5 4.167 10.833a9.7 9.7 0 0 1-5.834 1.667C8.333 20 17.5 15.833 17.5 6.25q0-.35-.067-.692A6.43 6.43 0 0 0 19.167 2.5" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </a>
                        <a href="#">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.5 15.833c-4.167 1.25-4.167-2.084-5.833-2.5m11.666 5v-3.225a2.8 2.8 0 0 0-.783-2.175c2.616-.292 5.366-1.283 5.366-5.833a4.53 4.53 0 0 0-1.25-3.125 4.22 4.22 0 0 0-.075-3.142s-.983-.292-3.258 1.233a11.15 11.15 0 0 0-5.833 0C5.225.541 4.242.833 4.242.833a4.22 4.22 0 0 0-.075 3.142 4.53 4.53 0 0 0-1.25 3.15c0 4.516 2.75 5.508 5.366 5.833a2.8 2.8 0 0 0-.783 2.15v3.225" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </a>
                        <a href="#">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.333 6.667a5 5 0 0 1 5 5V17.5H15v-5.833a1.667 1.667 0 0 0-3.334 0V17.5H8.333v-5.833a5 5 0 0 1 5-5M5 7.5H1.667v10H5zM3.333 5a1.667 1.667 0 1 0 0-3.333 1.667 1.667 0 0 0 0 3.333" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </a>
                    </div>
                </div>
        
                <div className="w-1/2 flex flex-wrap md:flex-nowrap justify-between">
                    <div>
                        <h2 className="font-semibold text-gray-900 mb-5">QUICK LINKS</h2>
                        <ul className="text-sm text-gray-500 space-y-2 list-none">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Browse Cars</a></li>
                            <li><a href="#">List Your Car</a></li>
                            <li><a href="#">About Us</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-semibold text-gray-900 mb-5">RESOURCES</h2>
                        <div className="text-sm text-gray-500 space-y-2 list-none">
                            <li><a href="#">Help Center</a></li>
                            <li><a href="#">Terms of Service</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Insurance</a></li>
                        </div>
                    </div>
                    <div>
                        <h2 className="font-semibold text-gray-900 mb-5">CONTACT</h2>
                        <div className="text-sm text-gray-500 space-y-2 list-none">
                            <li><a href="#">1234 Luxury Drive</a></li>
                            <li><a href="#">Bhubaneswar</a></li>
                            <li><a href="#">+91 28294462165</a></li>
                            <li><a href="#">info@gmail.com</a></li>
                        </div>
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
