const WorkPage = () => {
  return (
    <section>
      <h2 className="md:text-xl mb-5 font-bold">
          <span>Project Title: </span>
        Dry Cleaner Operations Management System (DC-OMS)
      </h2>
      <div className="grid  md:grid-cols-2 gap-4 pb-4">
        <p className="project p-8">
          <span className="font-bold">Project Overview:</span>
          The Dry Cleaner Operations Management System (DC-OMS) is a
          comprehensive, web-based application designed to simplify and automate
          all aspects of a dry cleaning business. This system aims to enhance
          efficiency, improve customer satisfaction, reduce manual errors, and
          provide actionable insights for better business management.
        </p>
        <p className="project p-8">
          <span className="font-bold">Problem Addressed:</span>
          Traditional dry cleaning businesses often struggle with manual
          processes, leading to inefficiencies in order tracking, inventory
          management, customer communication, and billing. This can result in
          lost garments, delayed services, inaccurate financial records, and a
          fragmented customer experience. The DC-OMS addresses these pain points
          by centralizing operations and introducing automation.
        </p>

        <div className="project p-5 md:p-8">
          <p className="pb-2  font-bold">Key Features and Modules.</p>
          <ul className=" ">
            <li>
              <p className="">
                <span>Customer Management;</span> Where by customers orders are
                easy to keep and track the order for a particular customer.
              </p>
            </li>
            <li>
              <p className="">
                <span> Order Management and Tracking:</span> The status of order
                are as follows received, in cleaning, ready for pickup,
                delivered.
              </p>
            </li>

            <li>
              <p className="">
                <span>Billing and Payments:</span> Handles financial
                record-keeping.
              </p>
            </li>
            <li>
              <p className="">
                <span>Employee Management and Task Assignments:</span>
                Assignment of cleaning tasks to specific staff members.
              </p>
            </li>
          </ul>
        </div>
        <div className="project p-8">
          <p>
            <span className="font-semibold">Technologies Used:</span> Frontend:
            HTML/HTML5, CSS/CSS3, JavaScript,  Reactjs  Backend: PHP (Laravel) Database: MySQL
          </p>
          <p>
            The full implementation is available on GitHub.
            <span>
              <a
                href="https://github.com/hefsijoseph/"
                target="_blank"
                rel="noreferrer"
                className="text-[#83b38f] pl-2 font-bold"
              >
                View on GitHub
              </a>
            </span>
          </p>
          <article className="pt-2">
            <h2>
              The accompanying portfolio demonstrates my work, created with
              Reactjs and Tailwind CSS.
            </h2>
          </article>
        </div>
      </div>
    </section>
  );
};

export default WorkPage;
