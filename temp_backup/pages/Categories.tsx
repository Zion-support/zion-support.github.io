
import { useEffect, useState } from "react";
import { CategoriesSection } from "@/components/CategoriesSection";
<<<<<<< HEAD
<<<<<<< HEAD
// import { GradientHeading } from "@/components/GradientHeading";
// import LoaderOverlay from "@/components/LoaderOverlay"; // Assuming a loading spinner component exists
// import { ErrorBoundary } from "@/components/GlobalErrorBoundary"; // Import ErrorBoundary
=======
=======
>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204
<<<<<<< HEAD
import { GradientHeading } from "@/components/GradientHeading";
import LoaderOverlay from "@/components/LoaderOverlay"; // Assuming a loading spinner component exists
import { ErrorBoundary } from "@/components/GlobalErrorBoundary"; // Import ErrorBoundary
=======
// import { GradientHeading } from "@/components/GradientHeading";
// import LoaderOverlay from "@/components/LoaderOverlay"; // Assuming a loading spinner component exists
// import { ErrorBoundary } from "@/components/GlobalErrorBoundary"; // Import ErrorBoundary
>>>>>>> origin/main
<<<<<<< HEAD
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3
=======
=======
// import { GradientHeading } from "@/components/GradientHeading";
// import LoaderOverlay from "@/components/LoaderOverlay"; // Assuming a loading spinner component exists
// import { ErrorBoundary } from "@/components/GlobalErrorBoundary"; // Import ErrorBoundary
>>>>>>> origin/main
>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204

// Define a basic type for Category - adjust as per actual API response
interface CategoryType {
  id: string;
  name: string;
  description?: string;
  // Add other relevant fields based on your API structure for categories
  iconName?: string; // Example field if categories have icons
  itemCount?: number; // Example field for number of items in a category
}

export default function Categories() {
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch("/api/services"); // Endpoint for categories/services
        if (!response.ok) {
          throw new Error(`API error: ${response.statusText}`);
        }
        const data: CategoryType[] = await response.json();
        setCategories(data);
      } catch (e) {
        setError(e as Error);
        console.error("Failed to fetch categories:", e);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return (
    <>
      <div className="min-h-screen bg-zion-blue">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
<<<<<<< HEAD
<<<<<<< HEAD
            {/* <GradientHeading level="h1" className="text-4xl md:text-5xl font-bold mb-4">
              Browse Categories
=======
=======
>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204
<<<<<<< HEAD
            <GradientHeading level="h1" className="text-4xl md:text-5xl font-bold mb-4">
              Browse Categories
            </GradientHeading>
=======
            {/* <GradientHeading level="h1" className="text-4xl md:text-5xl font-bold mb-4">
              Browse Categories
<<<<<<< HEAD
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3
=======
=======
            {/* <GradientHeading level="h1" className="text-4xl md:text-5xl font-bold mb-4">
              Browse Categories
>>>>>>> origin/main
>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204
            </GradientHeading> */}
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Browse Categories
            </h1>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/main
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3
=======
>>>>>>> origin/main
=======
>>>>>>> origin/main
>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204
            <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">
              Explore our extensive range of AI services and products organized by category.
              Find exactly what you're looking for to enhance your business or personal projects.
            </p>
          </div>

<<<<<<< HEAD
<<<<<<< HEAD
          {/* <ErrorBoundary fallback={<p className="text-red-500 text-center">Could not load content. Please try again later.</p>}> */}
            {isLoading && (
              <div className="flex justify-center items-center h-64">
=======
=======
>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204
<<<<<<< HEAD
          <ErrorBoundary fallback={<p className="text-red-500 text-center">Could not load content. Please try again later.</p>}>
            {isLoading && (
              <div className="flex justify-center items-center h-64">
                <LoaderOverlay />
=======
          {/* <ErrorBoundary fallback={<p className="text-red-500 text-center">Could not load content. Please try again later.</p>}> */}
            {isLoading && (
              <div className="flex justify-center items-center h-64">
<<<<<<< HEAD
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3
=======
=======
          {/* <ErrorBoundary fallback={<p className="text-red-500 text-center">Could not load content. Please try again later.</p>}> */}
            {isLoading && (
              <div className="flex justify-center items-center h-64">
>>>>>>> origin/main
>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204
                {/* <LoaderOverlay /> */}
                <div className="text-center py-8">
                  <p className="text-muted-foreground">Loading categories...</p>
                </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/main
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3
=======
>>>>>>> origin/main
=======
>>>>>>> origin/main
>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204
              </div>
            )}
            {error && (
              <div className="text-center text-red-500 py-8">
                <p>Error loading categories: {error.message}</p>
                <p>Please try again later.</p>
              </div>
            )}
            {!isLoading && !error && (
              // Pass fetched categories to CategoriesSection
              // This assumes CategoriesSection can accept a 'categories' prop
              // and will render them. If CategoriesSection fetches its own data,
              // this structure or CategoriesSection itself will need adjustment.
              <CategoriesSection showTitle={false} categories={categories} />
            )}
<<<<<<< HEAD
<<<<<<< HEAD
          {/* </ErrorBoundary> */}
=======
=======
>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204
<<<<<<< HEAD
          </ErrorBoundary>
=======
          {/* </ErrorBoundary> */}
>>>>>>> origin/main
<<<<<<< HEAD
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3
=======
=======
          {/* </ErrorBoundary> */}
>>>>>>> origin/main
>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204
        </div>
      </div>
    </>
  );
}
