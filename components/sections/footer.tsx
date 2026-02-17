"use client"

import { FaYoutube, FaInstagram, FaTwitter, FaGithub, FaDiscord } from "react-icons/fa"

export default function Footer() {
  const footerLinks = {
    product: [
      { name: "Features", href: "#features" },
      { name: "Platforms", href: "#platforms" },
      { name: "Pricing", href: "#pricing" },
    ],
    resources: [
      { name: "Documentation", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Support", href: "#" },
    ],
    company: [
      { name: "About Us", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
    ],
  }

  const socialLinks = [
    { icon: <FaTwitter />, href: "#" },
    { icon: <FaInstagram />, href: "#" },
    { icon: <FaYoutube />, href: "#" },
    { icon: <FaGithub />, href: "#" },
    { icon: <FaDiscord />, href: "#" },
  ]

  return (
    <footer className="bg-black/95 border-t border-white/10 z-10 relative">
      <div className="max-w-7xl mx-auto px-6 py-11">

        {/* 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Vidly
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Download videos from multiple platforms easily, fast, and secure.
              Save your favorite content anytime.
            </p>

            {/* Social */}
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 text-gray-400 
                  hover:bg-white hover:text-black transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-white mb-4">
              Product
            </h3>
            <ul className="space-y-3 text-sm">
              {footerLinks.product.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-gray-400 transition"

                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-white mb-4">
              Resources
            </h3>
            <ul className="space-y-3 text-sm">
              {footerLinks.resources.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-gray-400 transition"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-white mb-4">
              Company
            </h3>
            <ul className="space-y-3 text-sm">
              {footerLinks.company.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-gray-400 transition"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Center Bar */}
        <div className="border-t border-white/10 mt-12 pt-6 text-center mb-2">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Vidly. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  )
}
