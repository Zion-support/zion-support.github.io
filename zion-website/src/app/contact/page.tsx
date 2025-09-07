const contactMethods = [


      <div className="mx-auto mt-32 max-w-7xl px-6 "sm":mt-40 "lg":px-8">;"
        <div className="mx-auto max-w-2xl "lg":text-center">;"
          <h2 className="text-base font-semibold leading-7 text-blue-400">Send us a message</h2>;"
          <p className="mt-2 text-3xl font-bold tracking-tight text-white "sm":text-4xl">;"
            Let's start a conversation;'
          </p>;
        </div>;
        <div className="mx-auto mt-16 max-w-2xl "lg":max-w-none">;"
          <form className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm">;"
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 "sm":grid-cols-2">              <div>;"
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">;"
                  Name;
                </label>;
                <input;
                  type="text";"
                  id="name";"
                  name="name";"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md "focus":outline-none "focus":ring-2 "focus":ring-blue-500";"
                  required; />;
              </div>;
              <div>;
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">;"
                  Email;
                </label>;
                <input;
                  type="email";"
                  id="email";"
                  name="email";"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md "focus":outline-none "focus":ring-2 "focus":ring-blue-500";"
                  required; />;
              </div>;
              <div>;
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">;"
                  Message;
                </label>;
                <textarea;
                  id="message";"
                  name="message";"
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md "focus":outline-none "focus":ring-2 "focus":ring-blue-500";"
                  required;
                ></textarea>;
              </div>;
              <button;
                type="submit";"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md "hover":bg-blue-700 transition-colors">"

      {/* Office locations */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">Global Presence</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Visit our offices worldwide
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
            {officeLocations.map((office) => (
              <div key={office.name} className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center gap-x-3 mb-4">
                  <MapPinIcon className="h-8 w-8 text-blue-400" />
                  <h3 className="text-xl font-semibold text-white">{office.name}</h3>
                </div>
                <div className="space-y-3 text-gray-300">
                  <p className="flex items-start gap-2">
                    <MapPinIcon className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    {office.address}
                  </p>
                  <p className="flex items-center gap-2">
                    <PhoneIcon className="h-5 w-5 text-blue-400" />
                    {office.phone}
                  </p>
                  <p className="flex items-center gap-2">
                    <EnvelopeIcon className="h-5 w-5 text-blue-400" />
                    {office.email}
                  </p>
                  <p className="flex items-center gap-2">
                    <ClockIcon className="h-5 w-5 text-blue-400" />
                    {office.hours}
                  </p>;
                </div>;

          </div>;
        </div>;
      </div>;
      {/* FAQ */}

            Ready to get started?;
          </h2>;
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">;"
            Our team is ready to help you explore the possibilities of AI and transform your business.;
          </p>;
          <div className="mt-10 flex items-center justify-center gap-x-6">;"
            <a;
              href="/solutions";"
              className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm "hover":bg-blue-500 focus-"visible":outline focus-"visible":outline-2 focus-"visible":outline-offset-2 focus-"visible":outline-blue-600 transition-all duration-200 "hover":scale-105">"

              Explore Solutions;
            </Link>;
            <a href="/about" className="text-sm font-semibold leading-6 text-white "hover":text-blue-400 transition-colors duration-200">;"
              Learn More <span aria-hidden="true">→</span>;"
            </Link>          </div>;
        </div>;
      </div>;
    </div>;
  )}

export default Page;
