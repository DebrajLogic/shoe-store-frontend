import { Wrapper } from "@/components";

function About() {
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        {/* HEADING AND PARAGRAPH START */}
        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            About Us
          </div>
          <p className="text-gray-600">
            Welcome to our online store! At Shoe Store, we are passionate about delivering quality products and an exceptional shopping experience. Our commitment is to provide you with innovative solutions and a seamless journey through our diverse range of products.
        </p>
        </div>
        {/* HEADING AND PARAGRAPH END */}

        {/* TEAM MEMBERS START */}
        <div className="flex flex-col lg:flex-row gap-12 py-10">
          {/* MEMBER 1 */}
          <div className="flex-[2]">
            <div className="text-lg font-bold">Our Team</div>
            <div className="mb-8">
              <img
                src="/assets/images/team-member-1.jpg"
                alt="Team Member 1"
                className="w-full h-auto rounded-xl"
              />
              <div className="mt-3 text-sm font-semibold">Debraj Dey</div>
              <p className="text-sm text-gray-600">
                Founder and CEO of Shoe Store.
              </p>
            </div>

            {/* Add more team members as needed */}
          </div>

          {/* MEMBER 2 */}
          <div className="flex-[2]">
            <div className="text-lg font-bold">Our Mission</div>
            
            <p className="text-gray-600">
  Our mission is simple: to innovate, inspire, and make a positive impact. We strive to provide exceptional solutions that empower individuals and businesses, driving success and fostering a culture of creativity and collaboration.
</p>

          </div>
        </div>
        {/* TEAM MEMBERS END */}
      </Wrapper>
    </div>
  );
}

export default About;
