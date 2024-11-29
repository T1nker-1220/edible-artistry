import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <div className="bg-[#f8f8f8] py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get in touch with us to discuss your culinary vision or inquire about our services
          </p>
        </div>
      </div>

      {/* Contact Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <h2 className="font-playfair text-3xl font-bold mb-8 text-gray-900">Send Us a Message</h2>
            <ContactForm />
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="font-playfair text-3xl font-bold mb-8 text-gray-900">Get in Touch</h2>
            <div className="space-y-8">
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Visit Us</h3>
                <p className="text-gray-600">
                  123 Culinary Street<br />
                  Food City, FC 12345
                </p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Contact Information</h3>
                <p className="text-gray-600">
                  Phone: (555) 123-4567<br />
                  Email: info@edibleartistry.com
                </p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Business Hours</h3>
                <p className="text-gray-600">
                  Monday - Friday: 9:00 AM - 6:00 PM<br />
                  Saturday: 10:00 AM - 4:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
              {/* Map Placeholder */}
              <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg">
                <div className="p-4 text-center text-gray-500">
                  Map will be integrated here
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
