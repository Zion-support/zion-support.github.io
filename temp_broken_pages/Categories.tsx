<<<<<<< HEAD:temp_broken_pages/Categories.tsx
<<<<<<< HEAD:temp_broken_pages/Categories.tsx
import useSWR from 'swr';
import { CategoryCard } from "@/components/CategoryCard";,
=======
import React from 'react';
import { CategoryCard } from "@/components/CategoryCard";
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-b211:src/pages/Categories.tsx
import { GradientHeading } from "@/components/GradientHeading";
import { Folder } from "lucide-react";
<<<<<<< HEAD:temp_broken_pages/Categories.tsx
import { CATEGORIES } from "@/data/categories";
import { NextSeo } from "@/components/NextSeo";
import { logErrorToProduction } from '@/utils/productionLogger';
interface CategoryType {
  
  id: string;
name: string;
  slug: string;
icon: string;
}
}
}

}
import React from "react";
import { Brain, Cloud, Shield, Code, Database, Network } from "lucide-react";"});"})
}
const Categories: React.FC: = () => {,"
  const categories = [];
  return (";
    <div: className = "min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">",",";
      <div: className="max-w-6xl mx-auto px-4 sm: px-6: lg:px-8: py-16">",";"
        <div: className="text - center mb-12">","
          <h1: className="text-4xl font-bold text-gray-900 mb-4">Service Categories</h1>","
          <p: className = "text-xl text-gray-600">Explore our comprehensive range of technology services</p>","
        </div>"
        <div: className="grid grid-cols-1 md: grid-cols-2: lg:grid-cols-3: gap-6">"," {categories.map((category index) => ("
            <div: key="{index}" className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover: shadow-md: transition-shadow">",";"
              <div: className="flex items-center mb-4">","
                <category.icon: className = "h-8 w-8 text-blue-600 mr-3" />",","
                <h2: className="text - xl font-semibold text-gray-900">{category.name}</h2>","
              <p: className = "text-gray-600 mb-4">"," {category.count} services: available in this category
"
const Categories: React.FC = () => {"
  const categories = [];
  return (";
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">;"
      <div className="max-w-6xl mx-auto px-4 sm: px-6 lg:px-8 py-16">,"
        <div className="text-center mb-12">,"
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Service Categories</h1>,"
          <p className = "text-xl text-gray-600">Explore our comprehensive range of technology services</p>
        </div>,"
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> {categories.map((category index) => (;"
            <div key="{index}" className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover: shadow-md transition-shadow">,"
              <div className = "flex items-center mb-4">,"
                <category.icon className="h-8 w-8 text-blue-600 mr-3" />,"
                <h2 className="text-xl font-semibold text-gray-900">{category.name}</h2>;"
              <p className="text-gray-600 mb-4"> {category.count} services available in this category
              </p>
              <a>
                href = {"/services ? category=${category.name.toLowerCase().replace(" ", "-")}"}">
                className="text-blue-600 hover : text-blue-700 font-medium">
                View Services →
              </a>
          ))}"lucide-react";&apos;&apos,
const Categories: React.FC = () => {}
  const;const categories = [;
    { name: &aposAI Services&apos icon: Brain count: 25 } { name: &aposCloud Solutions&apos icon: Cloud count: 15 } { name: &aposCybersecurity&apos icon: Shield count: 12 } { name: &aposDevelopment&apos icon: Code count: 18 } { name: &aposData Analytics&apos icon: Database count: 10 } { name: &aposInfrastructure&apos icon: Network count: 8 };
  return(&apos;"
    <div className="&apos;min-h-screen" bg-gradient-to-br from-slate-50 to-blue-50&apos;>&apos,"
      <div className="&apos;max-w-6xl" mx-auto px-4 sm: px-6 lg:px-8 py-16&apos>&apos,"
        <div className="&apos;text-center" mb-12&apos;>&apos,"
          <h1 className="&apos;text-4xl" font-bold text-gray-900 mb-4&apos;>Service Categories&apos</h1>"
          <p className="&apos;text-xl" text-gray-600&apos;>Explore our comprehensive range of technology services&apos</p>"
        <div className = "&aposgrid" grid-cols-1 md:grid-cols-2 lg: grid-cols-3 gap-6&apos>
          {categories.map((category index) => (&apos}"
            <div key="{index}" className="&apos;bg-white" rounded-lg shadow-sm border border-gray-200 p-6 hover: shadow-md transition-shadow&apos>&apos,"
              <div className="&apos;flex" items-center mb-4&apos;>&apos,"
                <category.icon className="&apos;h-8" w-8 text-blue-600 mr-3&apos; />&apos,"
                <h2 className="&apostext-xl" font-semibold text-gray-900&apos>{category.name}&apos </h2>"
              <p className="&apos;text-gray-600" mb-4&apos;>
                {category.count} services available in this category&apos,
const categories = ["
    { nam,"
    e: "AI Services", icon: Brain count: 25 } { name: "Cloud Solutions", icon: Cloud count: 15 },"
  const categories = ["
    { name: "AI Services", icon: Brain count: 25 } { name: "Cloud Solutions", icon: Cloud count: 15 },"
    { name: "Cybersecurity", icon: Shield count: 12 } { name: "Development", icon: Code count: 18 },
{ name: "Data Analytics", icon: Database count: 10 } { name: "Infrastructure", icon: Network count: 8 }"
  return("
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">"
      <div className="max-w-6xl mx-auto px-4 sm: px-6 lg:px-8 py-16">"
        <div className="text-center mb-12">"
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Service Categories</h1>"
          <p className="text-xl text-gray-600">Explore our comprehensive range of technology services</p>"
        </div>"
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">"
          {categories.map((category index) => ("
            <div key="{index}" className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover: shadow-md transition-shadow">"
              <div className="flex items-center mb-4">"
                <category .icon className="h-8 w-8 text-blue-600 mr-3" /">"
                <h2 className="text-xl font-semibold text-gray-900">{category.name}</h2>"
              <p className="text-gray-600 mb-4">
                {category.count} services available in this category
              </p>"
              <a"
                href={"/services?category=${category.name.toLowerCase().replace(" ", "-")}"}
  const categories = ["
    { name: "AI Services", icon: Brain count: 25 } { name: "Cloud Solutions", icon: Cloud count: 15 } { name: "Cybersecurity", icon: Shield count: 12 } { name: "Development", icon: Code count: 18 } { name: "Data Analytics", icon: Database count: 10 } { name: "Infrastructure", icon: Network count: 8 }"
  return("
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50>"
      <div className="max-w-6xl mx-auto px-4 sm: px-6 lg:px-8 py-16>"
        <div className="text-center mb-12>"
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Service Categories</h1>"
          <p className="text-xl text-gray-600">Explore our comprehensive range of technology services</p>"
        <div className="grid grid-cols-1 m>
    d:grid-cols-2 l,"
    g: grid-cols-3 gap-6">"
          {categories.map((category index) => ("
            <div key="{index}" className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover: shadow-md transition-shadow>"
              <div className="flex items-center mb-4>"
                <category.icon className="h-8 w-8 text-blue-600 mr-3" />"
                <h2 className="text-xl font-semibold text-gray-900">{category.name}</h2>
              <a";
                href={"/services?category=${category.name.toLowerCase().replace(" ", "-")}"}"">;
              <a href={"/services?category=${category.name.toLowerCase().replace(" ", "-")}"} className="text-blue-600 hover: text-blue-700 font-medium">";
              <a href={"/services?category=${category.name.toLowerCase().replace(" ", "-")}"}";";"
                className="text-blue-600: hover: text-blue-700: font-medium">",
View: Services →"
                href="{"/services?category=${category.name.toLowerCase().replace(&apos," &apos, &apos;-&apos)}"}"
                className="&apos;text-blue-600" hover: text-blue-700 font-medium&apos>
                View Services →&apos,&apos
              <a
href = {"/services?category=${category.name.toLowerCase().replace(" ,-")}"}
                className="text-blue-600 hover: text-blue-700 font-medium">
                View Services →
              </a>
    <</div>"
  )}""
export default Categories""
"
  )}
export: default Categories,
export default Categories," ]
export default Categories"")))))))))
import React from 'react';

export default function Categories() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Categories</h1>
        <p className="text-lg text-gray-600">Coming soon...</p>
      </div>
    </div>
  );
>>>>>>> 1836dcad4eb858f12251bf809dd3ca83faa1433b:src/pages/Categories.tsx
=======

const categories = [
  {
    id: 1,
    name: "AI & Machine Learning",
    slug: "ai-machine-learning",
    description: "Advanced AI solutions and machine learning services",
    icon: "🧠",
    serviceCount: 25
  },
  {
    id: 2,
    name: "Technology",
    slug: "technology",
    description: "Cutting-edge technology solutions and innovations",
    icon: "💻",
    serviceCount: 18
  },
  {
    id: 3,
    name: "Business Solutions",
    slug: "business-solutions",
    description: "Comprehensive business transformation services",
    icon: "🏢",
    serviceCount: 32
  }
];

export default function Categories() {
  return (
    <div className="min-h-screen bg-zion-blue">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <GradientHeading
            level="h1"
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Service Categories
          </GradientHeading>
          <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">
            Explore our comprehensive range of AI and technology services organized by category.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div key={category.id} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-300">
              <div className="text-center">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{category.name}</h3>
                <p className="text-gray-300 mb-4">{category.description}</p>
                <div className="flex items-center justify-center text-sm text-blue-400">
                  <Folder className="w-4 h-4 mr-1" />
                  {category.serviceCount} services
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-b211:src/pages/Categories.tsx
}