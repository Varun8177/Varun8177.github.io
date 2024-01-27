import { Box, Center, Heading } from "@chakra-ui/react";
import React, { Suspense, lazy } from "react";
import { useMediaQuery } from "react-responsive";

const ProjectCards = lazy(() => import("../components/Projects/ProjectCards"));
const MediumProjectCard = lazy(() =>
  import("../components/Projects/MediumProjectCard")
);

const Projects = () => {
  const showMediumProjectCards = useMediaQuery({
    query: "(max-width: 993px)",
  });

  const data = [
    {
      deployedLink: "https://shoperz-co.netlify.app/",
      image: [
        "https://res.cloudinary.com/megamart/image/upload/f_auto,q_auto/v1/varun%20portfolio/shoperz/m6tbnzeguplp6ul39fcc",
        "https://res.cloudinary.com/megamart/image/upload/f_auto,q_auto/v1/varun%20portfolio/shoperz/n15wkfmwfsn4itedmjab",
      ],
      title: "Shoperz",
      subTitle: "Meesho Clone",
      GithubLink: "https://github.com/Varun8177/hollow-idea-9446",
      features: [
        "API-based Sign in and Sign-up for users",
        "Category and price-based filtering",
        "User dashboard for managing orders",
        "Admin panel for CRUD operations",
        "User feedback system for reviews and ratings",
      ],
      description:
        "Online Shopping site to buy best quality Fashion, Electronics, Home & Kitchen products at lowest prices. I was given meesho.com as a project and I was able to succesfully to clone it in a period of 5 days",
      techStack: ["React.js", "Chakra UI", "MockApi"],
    },
    {
      deployedLink: "https://roasted-geese-6392-xh5g.vercel.app/",
      image: [
        "https://res.cloudinary.com/megamart/image/upload/f_auto,q_auto/v1/varun%20portfolio/HealthPrime/gj7zawyahtxeypd5u7sf",
        "https://res.cloudinary.com/megamart/image/upload/f_auto,q_auto/v1/varun%20portfolio/HealthPrime/vbulw9j8r4k84wu5xwnd",
        "https://res.cloudinary.com/megamart/image/upload/f_auto,q_auto/v1/varun%20portfolio/HealthPrime/i5wqzaapp8ab0oalbhxb",
        "https://res.cloudinary.com/megamart/image/upload/f_auto,q_auto/v1/varun%20portfolio/HealthPrime/atglhgpw4xc0wusuuuec",
        "https://res.cloudinary.com/megamart/image/upload/f_auto,q_auto/v1/varun%20portfolio/HealthPrime/fq8y9plvqim5pg2gf7lx",
        "https://res.cloudinary.com/megamart/image/upload/f_auto,q_auto/v1/varun%20portfolio/HealthPrime/iucx0xnkufyh1ggahpkk",
      ],
      title: "Health Prime",
      subTitle: "1mg Clone",
      GithubLink: "https://github.com/Varun8177/roasted-geese-6392",
      features: [
        "Sign up or log in to add items to your cart and complete purchases",
        "Each product has a dedicated page with a detailed description",
        "View your cart details from the navbar section at any time",
        "Sort, search, and filter to easily find the products you're looking for",
      ],
      description:
        "Health Prime is an online platform that offers a wide range of healthcare products and medicines to users. With its user-friendly interface and competitive pricing, Health Prime makes it easy for users to find and purchase the products they need.",
      techStack: ["Next.js", "Chakra UI", "FireBase", "Redux"],
    },
    {
      deployedLink: "https://silly-sable-5035e4.netlify.app/",
      image: [
        "https://res.cloudinary.com/megamart/image/upload/f_auto,q_auto/v1/varun%20portfolio/Inside%20Fashion/kmqqawbqwzfmbri8gjxr",
        "https://res.cloudinary.com/megamart/image/upload/f_auto,q_auto/v1/varun%20portfolio/Inside%20Fashion/kec35wlamdwuq1etohil",
        "https://res.cloudinary.com/megamart/image/upload/f_auto,q_auto/v1/varun%20portfolio/Inside%20Fashion/dx0qsj0ilvisywnndgoa",
        "https://res.cloudinary.com/megamart/image/upload/f_auto,q_auto/v1/varun%20portfolio/Inside%20Fashion/mhpnadrrcuqd1nogrcmg",
      ],
      title: "Inside Fashion",
      subTitle: "Myntra Clone",
      GithubLink: "https://github.com/Varun8177/unwritten-smash-7440",
      features: [
        "Sign in and Sign-up using API.",
        "Filter by category and Sort by price",
        "User Dashboard",
        "Admin panel to perform CRUD operations.",
        "User feedback system",
      ],
      description:
        "Online Shopping site to buy the best quality Fashion, Electronics, Home & Kitchen products at the lowest prices. I was given meesho.com as a project, and I was able to successfully clone it in a period of 5 days",
      techStack: ["HTML", "CSS", "JavaScript"],
    },
    {
      deployedLink: "https://chargify.netlify.app/",
      image: [
        "https://res.cloudinary.com/megamart/image/upload/f_auto,q_auto/v1/varun%20portfolio/chargify/vrx1cbpsi5p7kvbfeyf3",
        "https://res.cloudinary.com/megamart/image/upload/f_auto,q_auto/v1/varun%20portfolio/chargify/dynsev6owqr5sea74oej",
        "https://res.cloudinary.com/megamart/image/upload/f_auto,q_auto/v1/varun%20portfolio/chargify/evbhfeuhjayvffxzzq4t",
        "https://res.cloudinary.com/megamart/image/upload/f_auto,q_auto/v1/varun%20portfolio/chargify/zfdvgl7izrltu7ekii1t",
      ],
      title: "Chargify",
      subTitle: "Chargebee Clone",
      GithubLink: "https://github.com/Varun8177/permissible-step-1626",
      features: [
        "API-based Sign in and Sign-up functionality for users",
        "Category-based filtering and price-based sorting of products",
        "User dashboard for managing personal information and orders",
        "Admin panel for performing CRUD operations on products and user information",
        "User feedback system for leaving reviews and ratings on products",
      ],
      description:
        "A Chargify clone is a software platform that imitates the subscription management and billing features of Chargify. It automates subscription billing processes, manages customer accounts and payments, and offers flexible pricing options. Businesses can use it to streamline billing, enhance customer experience, and scale their subscription business.",
      techStack: ["HTML", "CSS", "JavaScript"],
    },
  ];

  return (
    <Box
      px={{
        base: "5",
        lg: "10",
      }}
      id="projects"
    >
      <Center>
        <Heading mb={"40px"}>Projects</Heading>
      </Center>

      {showMediumProjectCards
        ? data.map((item, i) => (
            <Suspense key={i} fallback={<div>loading...</div>}>
              <MediumProjectCard {...item} />
            </Suspense>
          ))
        : data.map((item, i) => (
            <Suspense fallback={<div>loading...</div>} key={i}>
              <ProjectCards
                direction={i % 2 === 0 ? "row" : "row-reverse"}
                {...item}
              />
            </Suspense>
          ))}
    </Box>
  );
};

export default Projects;
