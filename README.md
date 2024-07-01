# todo context api notes

## About Page UI

```javascript
import React from 'react';

const AboutPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">About Us</h1>
        <p className="text-gray-700 dark:text-gray-300 mb-8">Learn more about our company and team.</p>
      </div>

      {/* Company Overview Section */}
      <section className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Company Overview</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut justo euismod, ullamcorper lectus in, pulvinar ex.
          Vivamus id ante et lorem convallis dapibus vel sit amet diam. Sed at nisi a odio malesuada convallis. Nullam
          consectetur feugiat justo, sit amet consectetur elit ultrices vel. Ut vestibulum tempor lectus, eget varius
          enim consectetur nec. Integer dictum diam a interdum tempor. Proin nec enim in elit commodo consectetur ut sit amet est.
        </p>
      </section>

      {/* Mission Statement Section */}
      <section className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut justo euismod, ullamcorper lectus in, pulvinar ex.
          Vivamus id ante et lorem convallis dapibus vel sit amet diam. Sed at nisi a odio malesuada convallis. Nullam
          consectetur feugiat justo, sit amet consectetur elit ultrices vel. Ut vestibulum tempor lectus, eget varius
          enim consectetur nec. Integer dictum diam a interdum tempor. Proin nec enim in elit commodo consectetur ut sit amet est.
        </p>
      </section>

      {/* Team Section */}
      <section className="bg-white dark:bg-gray-800 shadow-md rounded-lg px-6 py-12">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {/* Example Team Member Card */}
          <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 shadow-md">
            <img
              src="https://randomuser.me/api/portraits/men/1.jpg"
              alt="Team Member"
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">John Doe</h3>
            <p className="text-gray-700 dark:text-gray-300">Chief Executive Officer</p>
          </div>

          {/* Example Team Member Card */}
          <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 shadow-md">
            <img
              src="https://randomuser.me/api/portraits/women/2.jpg"
              alt="Team Member"
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Jane Smith</h3>
            <p className="text-gray-700 dark:text-gray-300">Chief Operating Officer</p>
          </div>

          {/* Example Team Member Card */}
          <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 shadow-md">
            <img
              src="https://randomuser.me/api/portraits/men/3.jpg"
              alt="Team Member"
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Michael Brown</h3>
            <p className="text-gray-700 dark:text-gray-300">Chief Technology Officer</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;



```

## Contact Form UI

```javascript
import React from 'react';

const ContactPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Contact Us</h1>
        <p className="text-gray-700 dark:text-gray-300 mb-8">Feel free to reach out to us for any inquiries or questions!</p>
      </div>

      {/* Contact Information Section */}
      <section className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Contact Information</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <p className="text-gray-700 dark:text-gray-300">
              <span className="font-semibold">Address:</span> 123 Main St, Cityville, State, Country
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              <span className="font-semibold">Phone:</span> +123 456 7890
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              <span className="font-semibold">Email:</span> info@example.com
            </p>
          </div>
          <div>
            <p className="text-gray-700 dark:text-gray-300">
              <span className="font-semibold">Hours:</span> Mon - Fri: 9:00 AM - 5:00 PM
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              <span className="font-semibold">Social Media:</span> <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Facebook</a>, <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Twitter</a>, <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Instagram</a>
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Send Us a Message</h2>
        <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-900 dark:text-white mb-1">Name</label>
            <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 focus:border-blue-300 dark:focus:border-blue-600 transition-colors" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-900 dark:text-white mb-1">Email</label>
            <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 focus:border-blue-300 dark:focus:border-blue-600 transition-colors" />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-medium text-gray-900 dark:text-white mb-1">Message</label>
            <textarea id="message" name="message" rows="4" className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 focus:border-blue-300 dark:focus:border-blue-600 transition-colors"></textarea>
          </div>
          <div className="sm:col-span-2">
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-5 rounded-md focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-700 dark:hover:bg-blue-800 dark:focus:ring-blue-800 dark:text-gray-100 transition-colors">Send Message</button>
          </div>
        </form>
      </section>

      {/* Map Section */}
      <section className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Our Location</h2>
        {/* Replace with your preferred map integration (Google Maps, Mapbox, etc.) */}
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            title="Map"
            className="w-full h-full rounded-lg"
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.2569360460425!2d-0.12381428422976145!3d51.50172797963684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDIzJzA1LjEiTiAwwrAwMyc0Ni4wIlc!5e0!3m2!1sen!2suk!4v1624561837354!5m2!1sen!2suk"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;


```



## Footer UI

```javascript
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 shadow mt-8">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-500 dark:text-gray-400">
          © 2024 MYWAY. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;



```


## Header UI

```javascript
import React from "react";

const Header = () => {
  return (
    <header className="bg-white dark:bg-gray-800 shadow">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <h1 className="text-4xl font-bold text-blue-600 dark:text-blue-600">MYWAY</h1>
        <nav className="space-x-12 font-medium relative">
          <a href="/" className="text-gray-900 dark:text-white hover:bg-orange-700 hover:rounded-full hover:py-4 hover:px-5">Home</a>
          <a href="/about" className="text-gray-900 dark:text-white hover:bg-orange-700 hover:rounded-full hover:py-4 hover:px-5">About</a>
          <a href="/contact" className="text-gray-900 dark:text-white hover:bg-orange-700 hover:rounded-full hover:py-4 hover:px-5">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;




```



## Main Content UI

```javascript
import { FaLaptopCode, FaMobileAlt, FaRocket } from "react-icons/fa";

const MainContent = () => {
  return (
    <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md space-y-6">
      <section>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Welcome to My Professional Website
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Explore our services and offerings tailored to meet your needs. Use
          the toggle button above to switch between light and dark themes for
          the best viewing experience.
        </p>
      </section>

      <section className="space-y-4">
        <div className="flex items-center">
          <FaLaptopCode className="text-blue-500 dark:text-blue-300 w-8 h-8 mr-4" />
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Web Development
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              High-quality web development services using the latest
              technologies.
            </p>
          </div>
        </div>

        <div className="flex items-center">
          <FaMobileAlt className="text-green-500 dark:text-green-300 w-8 h-8 mr-4" />
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Mobile App Development
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Creating sleek and functional mobile applications for various
              platforms.
            </p>
          </div>
        </div>

        <div className="flex items-center">
          <FaRocket className="text-red-500 dark:text-red-300 w-8 h-8 mr-4" />
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Digital Marketing
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Boost your business with our expert digital marketing strategies.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Why Choose Us?
        </h3>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
          <li>Experienced professionals in various domains</li>
          <li>Customer-centric approach</li>
          <li>Innovative and scalable solutions</li>
          <li>Commitment to quality and excellence</li>
        </ul>
      </section>
    </div>
  );
};

export default MainContent;



```


## Theme Btn UI

```javascript
import React from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';

export default function ThemeBtn() {

  return (
    <div className="flex items-center space-x-3 relative cursor-pointer">
      {themeMode === 'light' ? (
        <FiMoon className="w-8 h-8 text-gray-500 dark:text-gray-300" onClick={handleToggle} />
      ) : (
        <FiSun className="w-8 h-8 text-yellow-400 dark:text-yellow-400" onClick={handleToggle} />
      )}
      <span className="text-sm font-medium text-gray-900 dark:text-white">
       
      </span>
    </div>
  );
}




```
