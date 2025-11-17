import React from 'react'
import { Github, Linkedin } from 'lucide-react'

const Footer = () => {
  return (
    <>
      {/* Footer */}
      <footer className="py-4">
        <div className="flex justify-center gap-4">
          <a
            href="https://github.com/ravix2001"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/ravipandit2001"
          >
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
        <div className="container-custom mt-2">
          <div className="text-center">
            <p>
              © 2025 Ravi Pandit. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
