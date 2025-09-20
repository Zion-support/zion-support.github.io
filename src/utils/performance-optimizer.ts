interface Service {
id: string;
name: string;
}

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 9d7313116a64aea01fdf8aaa2b42f67aaee4a840
// Performance optimization utilities;
export const optimizeImages: any = () => {;
const images = document.querySelectorAll("img");
images.forEach(img => {
if (!img.loading) {
img.loading = "lazy";
}
if (!img.decoding) {
img.decoding = "async";
}
});
};

export const preloadCriticalResources = null;
"/css/critical.css";
];

criticalResources.forEach(resource => {
const link = document.createElement("link");
link.rel = "preload";
link.href = resource;
link.as = resource.endsWith(".css") ? "style" : "font";
document.head.appendChild(link);
});
};

export const optimizeBundleSize: any = () => {;
// Dynamic imports for non-critical components;
const loadComponent = componentName => {    return import(`./components/${componentName}`)
}
return { loadComponent }
};
link.rel = "preload";
<<<<<<< HEAD
link.href = resource, link.as = resource.endsWith(".css") ? "style" : "font";
=======
link.href = resource; link.as = resource.endsWith(".css") ? "style" : "font";
=======
>>>>>>> 8c478e615056772e765dbc204462fa984d447432
>>>>>>> 9d7313116a64aea01fdf8aaa2b42f67aaee4a840
