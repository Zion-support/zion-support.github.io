import { CategoryCard } from "@/components/CategoryCard";
import { GradientHeading } from "@/components/GradientHeading";
import ErrorBoundary from "@/components/GlobalErrorBoundary";
import { Briefcase, HardDrive, Lightbulb, Users } from "lucide-react";

export default function AllCategoriesPage() {
  const categories = [
    {
      id: "ai-development"
      title: "AI Development"
      description: "Custom AI solutions and machine learning services"
      icon: <Lightbulb className="h-8 w-8" />
      href: "/services/ai-development"
    },
    {
      id: "data-science"
      title: "Data Science"
      description: "Data analysis, visualization, and insights"
      icon: <HardDrive className="h-8 w-8" />
      href: "/services/data-science"
    },
    {
      id: "consulting"
      title: "AI Consulting"
      description: "Strategic AI implementation guidance"
      icon: <Briefcase className="h-8 w-8" />
      href: "/services/consulting"
    },
    {
      id: "talent"
      title: "AI Talent"
      description: "Connect with top AI professionals"
      icon: <Users className="h-8 w-8" />
      href: "/talent"
    }
  ];

  return (
    <div className="min-h-screen bg-zion-blue">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <GradientHeading
            level="h1"
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            All Categories
          </GradientHeading>
          <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">
            Explore our extensive range of AI services and products. Find
            exactly what you're looking for to enhance your business or personal
            projects.
          </p>
        </div>
        <ErrorBoundary>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map(category => (
              <CategoryCard
                key={category.id}
                title={category.title}
                description={category.description}
                icon={category.icon}
                href={category.href}
              />
            ))}
          </div>
        </ErrorBoundary>
      </div>
    </div>
  );
}