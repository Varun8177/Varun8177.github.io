import { Box, Center, Heading, Show } from "@chakra-ui/react";
import React from "react";
import {
  MediumProjectCard,
  ProjectCards,
} from "../components/Projects/ProjectCards";
import shoperz1 from "../images/Shoperz_banner_1.png";
import shoperz2 from "../images/Shoperz_banner_2.png";
import inside_fashion_1 from "../images/inside_fashion_1.png";
import inside_fashion_2 from "../images/inside_fashion_2.png";
import inside_fashion_3 from "../images/inside_fashion_3.png";
import inside_fashion_4 from "../images/inside_fashion_4.png";
import chargify_1 from "../images/chargify_1.png";
import chargify_2 from "../images/chargify_2.png";
import chargify_3 from "../images/chargify_3.png";
import chargify_4 from "../images/chargify_4.png";
import healthPrime_1 from "../images/healthPrime_1.png";
import healthPrime_2 from "../images/healthPrime_2.png";
import healthPrime_3 from "../images/healthPrime_3.png";
import healthPrime_4 from "../images/healthPrime_4.png";
import healthPrime_5 from "../images/healthPrime_5.png";
import healthPrime_6 from "../images/healthPrime_6.png";
const Projects = () => {
  const shoperz = [shoperz1, shoperz2];
  const insideFashion = [
    inside_fashion_1,
    inside_fashion_2,
    inside_fashion_3,
    inside_fashion_4,
  ];
  const chargify = [chargify_1, chargify_2, chargify_3, chargify_4];
  const HealthPrime = [
    healthPrime_1,
    healthPrime_2,
    healthPrime_3,
    healthPrime_4,
    healthPrime_5,
    healthPrime_6,
  ];
  return (
    <Box
      pl={{
        base: "5",
        sm: "5",
        md: "5",
        lg: "10",
        xl: "10",
        "2xl": "10",
      }}
      pr={{
        base: "5",
        sm: "5",
        md: "5",
        lg: "10",
        xl: "10",
        "2xl": "10",
      }}
      id="projects"
    >
      <Center>
        <Heading mb={"40px"}>Projects</Heading>
      </Center>
      <ProjectCards
        direction={"row"}
        deployedLink={"https://shoperz-co.netlify.app/"}
        image={shoperz}
        title={"Shoperz"}
        subTitle={"Meesho Clone"}
        GithubLink={"https://github.com/Varun8177/hollow-idea-9446"}
        features={[
          "API-based Sign in and Sign-up for users",
          "Category and price-based filtering",
          "User dashboard for managing orders",
          "Admin panel for CRUD operations",
          "User feedback system for reviews and ratings",
        ]}
        description={
          "Online Shopping site to buy best quality Fashion, Electronics, Home & Kitchen products at lowest prices. I was given meesho.com as a project and I was able to succesfully to clone it in a period of 5 days"
        }
        techStack={["React.js", "Chakra UI", "MockApi"]}
      />
      <ProjectCards
        direction={"row-reverse"}
        deployedLink={"https://roasted-geese-6392-xh5g.vercel.app/"}
        image={HealthPrime}
        title={"Health Prime"}
        subTitle={"1mg Clone"}
        GithubLink={"https://github.com/Varun8177/roasted-geese-6392"}
        features={[
          "Sign up or log in to add items to your cart and complete purchases",
          "Each product has a dedicated page with a detailed description",
          "View your cart details from the navbar section at any time",
          "Sort, search, and filter to easily find the products you're looking for",
        ]}
        description={
          "Health Prime is an online platform that offers a wide range of healthcare products and medicines to users. With its user-friendly interface and competitive pricing, Health Prime makes it easy for users to find and purchase the products they need. "
        }
        techStack={["Next.js", "Chakra UI", "FireBase", "Redux"]}
      />
      <ProjectCards
        direction={"row"}
        deployedLink={"https://silly-sable-5035e4.netlify.app/"}
        image={insideFashion}
        title={"Inside Fashion"}
        subTitle={"Myntra Clone"}
        GithubLink={"https://github.com/Varun8177/unwritten-smash-7440"}
        features={[
          "Sign in and Sign-up using API.",
          "Filter by category and Sort by price",
          "User Dashboard",
          "Admin panel to perform CRUD operations.",
          "User feedback system",
        ]}
        description={
          "Online Shopping site to buy best quality Fashion, Electronics, Home & Kitchen products at lowest prices. I was given meesho.com as a project and I was able to succesfully to clone it in a period of 5 days"
        }
        techStack={["HTML", "CSS", "JavaScript"]}
      />
      <ProjectCards
        direction={"row-reverse"}
        deployedLink={"https://chargify.netlify.app/"}
        image={chargify}
        title={"Chargify"}
        subTitle={"Chargebee Clone"}
        GithubLink={"https://github.com/Varun8177/permissible-step-1626"}
        features={[
          "API-based Sign in and Sign-up functionality for users",
          "Category-based filtering and price-based sorting of products",
          "User dashboard for managing personal information and orders",
          "Admin panel for performing CRUD operations on products and user information",
          "User feedback system for leaving reviews and ratings on products",
        ]}
        description={
          "A Chargify clone is a software platform that imitates the subscription management and billing features of Chargify. It automates subscription billing processes, manages customer accounts and payments, and offers flexible pricing options. Businesses can use it to streamline billing, enhance customer experience, and scale their subscription business."
        }
        techStack={["HTML", "CSS", "JavaScript"]}
      />
      <Show breakpoint="(max-width: 993px)">
        <MediumProjectCard
          image={shoperz}
          deployedLink={"https://shoperz-co.netlify.app/"}
          GithubLink={"https://github.com/Varun8177/hollow-idea-9446"}
          title={"Shoperz"}
          subTitle={"Meesho Clone"}
          description={
            "Online Shopping site to buy best quality Fashion, Electronics, Home & Kitchen products at lowest prices. I was given meesho.com as a project and I was able to succesfully to clone it in a period of 5 days"
          }
          techStack={["React.js", "Chakra UI", "MockApi"]}
        />
        <MediumProjectCard
          image={HealthPrime}
          deployedLink={"https://roasted-geese-6392-xh5g.vercel.app/"}
          GithubLink={"https://github.com/Varun8177/roasted-geese-6392"}
          title={"Health Prime"}
          subTitle={"1mg Clone"}
          description={
            "Health Prime is an online platform that offers a wide range of healthcare products and medicines to users. With its user-friendly interface and competitive pricing, Health Prime makes it easy for users to find and purchase the products they need. "
          }
          techStack={["Next.js", "Chakra UI", "FireBase", "Redux"]}
        />
        <MediumProjectCard
          image={insideFashion}
          deployedLink={"https://silly-sable-5035e4.netlify.app/"}
          GithubLink={"https://github.com/Varun8177/unwritten-smash-7440"}
          title={"Inside Fashion"}
          subTitle={"Myntra Clone"}
          description={
            "Online Shopping site to buy best quality Fashion, Electronics, Home & Kitchen products at lowest prices. I was given meesho.com as a project and I was able to succesfully to clone it in a period of 5 days"
          }
          techStack={["HTML", "CSS", "JavaScript"]}
        />
        <MediumProjectCard
          image={chargify}
          deployedLink={"https://chargify.netlify.app/"}
          GithubLink={"https://github.com/Varun8177/permissible-step-1626"}
          title={"Chargify"}
          subTitle={"Chargebee Clone"}
          description={
            "Chargify is a software platform that imitates the subscription management and billing features of Chargify. It automates subscription billing processes, manages customer accounts and payments, and offers flexible pricing options. Businesses can use it to streamline billing, enhance customer experience, and scale their subscription business."
          }
          techStack={["HTML", "CSS", "JavaScript"]}
        />
      </Show>
    </Box>
  );
};

export default Projects;
