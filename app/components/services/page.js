"use client";
import React from "react";
import styles from "../componenet.module.css";
import NavBar from "../navBar/page";
import Link from "next/link";

const servicesData = [
  {
    id: 1,
    serviceName: "Web Development",
    serviceDescription:
      "Learn to build modern and responsive websites using the latest technologies and frameworks.",
  },
  {
    id: 2,
    serviceName: "Digital Marketing",
    serviceDescription:
      "Master online marketing strategies to promote products, engage customers, and drive growth.",
  },
  {
    id: 3,
    serviceName: "Data Science",
    serviceDescription:
      "Dive into data analysis, machine learning, and data visualization to make informed decisions.",
  },
  {
    id: 4,
    serviceName: "Graphic Design",
    serviceDescription:
      "Unleash your creativity by learning the principles of graphic design and visual communication.",
  },
  {
    id: 5,
    serviceName: "Mobile App Development",
    serviceDescription:
      "Create mobile apps for iOS and Android platforms using industry-leading tools and practices.",
  },
  {
    id: 6,
    serviceName: "Content Writing",
    serviceDescription:
      "Develop your writing skills and craft compelling content for websites, blogs, and social media.",
  },
  {
    id: 7,
    serviceName: "Photography",
    serviceDescription:
      "Capture stunning moments and refine your photography skills, from composition to post-processing.",
  },
  {
    id: 8,
    serviceName: "Business Analytics",
    serviceDescription:
      "Gain insights into business trends, analyze data, and make informed decisions to drive success.",
  },
  {
    id: 9,
    serviceName: "Language Learning",
    serviceDescription:
      "Learn new languages and enhance your communication skills for personal and professional growth.",
  },
  {
    id: 10,
    serviceName: "E-commerce Strategies",
    serviceDescription:
      "Discover effective e-commerce strategies to launch and manage successful online stores.",
  },
  // Add more objects as needed
];

const services = () => {
  return (
    <div>
      <NavBar />
      <h1>Our Services</h1>
      {servicesData.map((items) => {
        return (
          <div className={styles.servicesContainer}>
            <div className={styles.service}>
              <Link href={`/components/services/${items.id}`}>
                <h2>{items.serviceName}</h2>
              </Link>
              <p>{items.serviceDescription}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default services;
