export default function Contact() {
  return (
    <section id="contact" className="px-8 py-32 border-t border-neutral-200">
      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto">
          <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Let's talk!
          </h1>
          <p className="text-center text-gray-600 mb-8">
            Have a project in mind, and interesting opportunity, or just want to
            say hi? I'm always open to new ideas and collaborations. Fill out
            the form below, and I'll get back to you as soon as possible!
          </p>
          <p className="text-center text-gray-600 mb-8">
            I'm open to conversations about software engineering opportunities,
            creative projects, collaborations, and ideas worth building. If you
            have a project in mind, or just want to say hi, feel free to reach
            out!
          </p>
          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="your.email@example.com"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                placeholder="Tell me about a project, collaboration, or just say hi <3!"
                rows={4}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
        <p className="mt-12 text-lg font-medium text-neutral-900">
          Let’s build something meaningful together!
        </p>
      </div>
      <footer className="mt-12 text-sm text-center text-neutral-500">
        &copy; {new Date().getFullYear()} Selena Sat. All rights reserved.
        <p className="mt-2">
          Built with <a href="https://nextjs.org/" className="underline">Next.js</a> and <a href="https://tailwindcss.com/" className="underline">Tailwind CSS</a>.
        </p>
      </footer> 
    </section>
  );
}
