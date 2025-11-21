import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
const GetInTouch = () => {
  return (
    <section id="contact" className="section-padding hero-bg">
      <div className="container-custom">
        <h2 className="text-center mb-12">
          Get In Touch
        </h2>
        <div className="max-w-2xl mx-auto text-center">
          <p className="bg-background text-foreground mb-8">
            I'm always interested in discussing new opportunities, collaborating
            on projects, or simply connecting with fellow developers and AI
            enthusiasts.
          </p>
          <div className="grid sm:grid-cols-3 gap-6 mb-8">
            <a href="mailto:contact@ravi-pandit.com.np">
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 bg-background text-foreground mb-2" />
                <span className="bg-background text-foreground">
                  {/* ravipandit.devmail@gmail.com */}
                  contact@ravi-pandit.com.np
                </span>
              </div>
            </a>
            <a href="tel:+9779825335399">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 bg-background text-foreground mb-2" />
                <span className="bg-background text-foreground">
                  +977 9825335399
                </span>
              </div>
            </a>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 bg-background text-foreground mb-2" />
              <span className="bg-background text-foreground">
                Biratnagar, Nepal
              </span>
            </div>
          </div>
          <a
            href="mailto:ravipandit.devmail@gmail.com"
            className="btn-primary"
          >
            <Mail className="w-4 h-4 mr-2" />
            Send Message
          </a>
        </div>
      </div>
    </section>
    // <div>
    //   <div className="animate-fade-in-left">
    //         <h3 className="text-gray-900 dark:text-white text-xl font-semibold mb-6">
    //           Let's Connect
    //         </h3>
    //         <p className="text-gray-600 dark:text-gray-300 mb-8">
    //           I'm always interested in discussing new opportunities,
    //           collaborating on projects, or simply connecting with fellow
    //           developers and AI enthusiasts.
    //         </p>
    //         <div className="space-y-4">
    //           <a
    //             href="mailto:ravipandit.devmail@gmail.com"
    //             className="flex items-center"
    //           >
    //             <Mail className="w-6 h-6 bg-background text-foreground transition-colors duration-300 mr-4" />
    //             <span className="bg-background text-foreground transition-colors duration-300">
    //               ravipandit.devmail@gmail.com
    //             </span>
    //           </a>
    //           <a href="tel:+9779825335399" className="flex items-center">
    //             <Phone className="w-6 h-6 bg-background text-foreground transition-colors duration-300 mr-4" />
    //             <span className="bg-background text-foreground transition-colors duration-300">
    //               +977 9825335399
    //             </span>
    //           </a>
    //           <div className="flex items-center">
    //             <MapPin className="w-6 h-6 bg-background text-foreground transition-colors duration-300 mr-4" />
    //             <span className="bg-background text-foreground transition-colors duration-300">
    //               Biratnagar, Nepal
    //             </span>
    //           </div>
    //         </div>
    //       </div>
    // </div>
  );
};

export default GetInTouch;
