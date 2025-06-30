const Contact = () => {
  return (
    <article>
      <div>
        <h2 className="text-xl md:text-2xl font-extrabold mb-4">Contact Hefsi.</h2>
        <p className="mb-2">Hello, feel free to reach out using the methods below.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-32">
        <div className="create">
          <form>
          <label>Your Email:</label>
          <input type="email" required />
            <label>Your Subject:</label>
            <input type="text" required />
            <label>Your Message:</label>
            <textarea required></textarea>
            <button>Send Message</button>
          </form>
        </div>
        <div className="mt-16 px-10 py-5 direct-contact">
          <p>Email: hefsichiluka09@gmail.com</p>
          <p>Phonenumber: 0693322561 / 0616603000</p>
          <p>Location: Arusha.</p>
        </div>
      </div>
    </article>
  );
};

export default Contact;
