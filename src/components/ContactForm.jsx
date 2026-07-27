
function ContactForm() {
  return (
    <div className="my-16 mx-8 min-[850px]:mx-24 text-[#2a2a2a]">
      <h1 className="text-3xl font-bold text-center">Send a message to us!</h1>

      <form className="flex flex-col pt-8 min-[850px]:pt-12 w-[90%] min-[850px]:w-[50%] mx-auto">
        <input
          type="text"
          placeholder="Name"
          className="h-12 px-4 mb-8 rounded-[0.3rem] border border-[#2a2a2a] outline-none placeholder:text-gray-500"
        />

        <input
          type="email"
          placeholder="Email"
          className="h-12 px-4 mb-8 rounded-[0.3rem] border border-[#2a2a2a] outline-none placeholder:text-gray-500"
        />

        <input
          type="text"
          placeholder="Subject"
          className="h-12 px-4 mb-8 rounded-[0.3rem] border border-[#2a2a2a] outline-none placeholder:text-gray-500"
        />

        <textarea
          rows={4}
          placeholder="Message"
          className="p-4 mb-8 rounded-[0.3rem] border border-[#2a2a2a] outline-none placeholder:text-gray-500"
        ></textarea>

        {/* Centered Button */}
        <button
          type="submit"
          className="self-center px-8 py-3 bg-[#2a2a2a] text-white rounded-[0.3rem] hover:bg-black transition duration-200"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default ContactForm;