import { Wrapper } from "@/components";

function Contact() {
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        {/* HEADING AND PARAGRAPH START */}
        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            Contact Us
          </div>
          <p className="text-gray-600">
            We'd love to hear from you! Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Nulla facilisi. Sed euismod euismod
            nisi, sit amet condimentum est rutrum non.
          </p>
        </div>
        {/* HEADING AND PARAGRAPH END */}

        {/* CONTACT FORM START */}
        <div className="flex flex-col lg:flex-row gap-12 py-10">
          <div className="flex-[2]">
            <form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-600"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                  required={true}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-600"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                  required={true}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-600"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                  required={true}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* CONTACT INFORMATION */}
          <div className="flex-[2]">
            <div className="text-lg font-bold">Contact Information</div>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              facilisi. Sed euismod euismod nisi, sit amet condimentum est
              rutrum non.
            </p>
          </div>
        </div>
        {/* CONTACT FORM END */}
      </Wrapper>
    </div>
  );
}

export default Contact;
