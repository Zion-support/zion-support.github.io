import React from "react";
import { Helmet } from "react-helmet-async";

export default function Portfolio(): React.JSX.Element {
  const projects = [
    {
      title: "E-commerce AI Platform",
      client: "TechRetail Corp",
      description:
        "Implemented AI-powered recommendation engine and inventory management system.",
      image: "/api/placeholder/400/300",
      technologies: ["Python", "TensorFlow", "AWS", "React"],
      results: [
        "40% increase in sales",
        "60% reduction in inventory waste",
        "95% customer satisfaction",
      ],
    },
    {
      title: "Healthcare Data Analytics",
      client: "MediCare Solutions",
      description:
        "Built comprehensive data analytics platform for patient care optimization.",
      image: "/api/placeholder/400/300",
      technologies: ["Apache Spark", "PostgreSQL", "Docker", "Kubernetes"],
      results: ["30% faster diagnosis", "25% cost reduction", "99.9% uptime"],
    },
    {
      title: "Financial Risk Management",
      client: "SecureBank",
      description:
        "Developed real-time fraud detection and risk assessment system.",
      image: "/api/placeholder/400/300",
      technologies: ["Java", "Apache Kafka", "MongoDB", "Spring Boot"],
      results: [
        "80% fraud detection rate",
        "50% reduction in false positives",
        "24/7 monitoring",
      ],
    },
    {
      title: "Smart Manufacturing IoT",
      client: "IndustrialMax",
      description:
        "Connected factory floor with IoT sensors and predictive maintenance.",
      image: "/api/placeholder/400/300",
      technologies: ["IoT", "Machine Learning", "Azure", "Power BI"],
      results: [
        "35% reduction in downtime",
        "20% increase in efficiency",
        "Real-time monitoring",
      ],
    },
    {
      title: "Cloud Migration & DevOps",
      client: "GlobalTech Inc",
      description:
        "Migrated legacy systems to cloud with automated CI/CD pipelines.",
      image: "/api/placeholder/400/300",
      technologies: ["AWS", "Terraform", "Jenkins", "Kubernetes"],
      results: ["70% cost reduction", "99.9% uptime", "Automated deployments"],
    },
    {
      title: "AI-Powered Chatbot",
      client: "CustomerFirst",
      description:
        "Built intelligent customer service chatbot with NLP capabilities.",
      image: "/api/placeholder/400/300",
      technologies: ["NLP", "Python", "OpenAI", "Node.js"],
      results: [
        "90% query resolution",
        "24/7 availability",
        "60% cost savings",
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>Portfolio - Zion Tech Group | Our Success Stories</title>
        <meta
          name="description"
          content="Explore our portfolio of successful AI and IT projects. See how we've helped businesses transform with cutting-edge technology solutions."
        />
        <meta property="og:title" content="Portfolio - Zion Tech Group" />
        <meta
          property="og:description"
          content="Our success stories and project portfolio"
        />
      </Helmet>

      <main
        className="container mx-auto px-4 py-16"
        data-testid="portfolio-page"
      >
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Our Portfolio
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our successful projects and see how we&apos;ve helped
            businesses transform with cutting-edge AI and IT solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                <div className="text-white text-6xl font-bold">{index + 1}</div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                    {project.client}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-2">
                    Key Results:
                  </h4>
                  <ul className="space-y-1">
                    {project.results.map((result, resultIndex) => (
                      <li
                        key={resultIndex}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <svg
                          className="w-4 h-4 text-green-500 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <div className="text-center">
            <h2 className="text-3xl font-semibold mb-4">Our Success Metrics</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              We measure our success by the impact we create for our clients and
              the value we deliver.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  500+
                </div>
                <div className="text-gray-600">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  $50M+
                </div>
                <div className="text-gray-600">Cost Savings Generated</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  24/7
                </div>
                <div className="text-gray-600">Support & Monitoring</div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-semibold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how we can help you achieve similar results with
            our AI and IT solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            >
              Start Your Project
            </a>
            <a
              href="/services"
              className="border border-blue-600 text-blue-600 px-8 py-3 rounded-md hover:bg-blue-50 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            >
              View Our Services
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
