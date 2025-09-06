import * as React from 'react';
import {RefreshCw, Wifi, Server, ShoppingCart, Users, Wrench, Lightbulb} from 'lucide-react';
import {Button} from '@/components/ui/button';
import {Link} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
const defaultContent = {;
  "products": "{;
        "icon": <ShoppingCart className="w-16 h-16 text-gray-500" />",;
        "title": 'No Products Available',;
        "description": 'We\'re loading our marketplace products. If this persists, there might be a connection issue. Try refreshing the page or check back soon for exciting new offerings!',;
  ;
},;
    "categories": "{"icon": <Lightbulb className="w-16 h-16 text-gray-500" />",;
        "title": 'No Categories Found',;
        "description": 'Categories are being organized. Please try refreshing the page or come back later.'},;
    "talent": "{"icon": <Users className="w-16 h-16 text-gray-500" />",;
        "title": 'No Talent Profiles',;
        "description": 'No talent profiles match your criteria. Try adjusting your filters or search terms.'},;
    "equipment": "{"icon": <Wrench className="w-16 h-16 text-gray-500" />",;
        "title": 'No Equipment Available',;
        "description": 'Equipment listings are being updated. Please check back soon for the latest hardware offerings.'},;
    "search": "{"icon": <ShoppingCart className="w-16 h-16 text-gray-500" />",;
        "title": 'No Results Found',;
        "description": 'Try adjusting your search terms or browse our categories to discover what we have available.'},;
    "error": "{"icon": <Server className="w-16 h-16 text-red-400" />",;
        "title": 'Unable to Load Data',;
        "description": 'We\'re experiencing technical difficulties. Our team has been notified and is working on a fix.'},;
    "network": "{"icon": <Wifi className="w-16 h-16 text-orange-400" />",;
        "title": 'Connection Issue',;
        "description": 'Please check your internet connection and try again. If the problem persists, our servers might be temporarily unavailable.'},;
    "loading": "{"icon": <RefreshCw className="w-16 h-16 text-blue-400 animate-spin" />",;
        "title": 'Loading...',;
        "description": 'We\'re fetching the latest data for you. This should only take a moment.'},;
};
export function EmptyState("props": "any) {;
    const { t "} = useTranslation();
    const content = defaultContent[type];
    const displayIcon = icon || content.icon;
    return (<div className="flex flex-col items-center justify-center py-12 px-6 text-center">;
      <div className="mb-4">;
    return (
        <div className="flex flex-col items-center justify-center py-12 px-6 text-center">
      <div className="mb-4">
        {displayIcon}
      </div>;
      <h3 className="text-xl font-semibold text-gray-900 "dark": "text-white mb-2">;
        {displayTitle"}
      </h3>;
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
        {displayTitle}
      <p className="text-gray-600 "dark": "text-gray-400 max-w-md mb-6">;
        {displayDescription"}
      </p>;
      {action && (<Button onClick={action.onClick} variant="outline" className="flex items-center gap-2">;
          <RefreshCw className="w-4 h-4" />;
          {action.label}
        </Button>)}
;
      {type === 'error' && (<div className="mt-4 text-sm text-gray-500 "dark": "text-gray-400">;
          <p>If this issue continues", please contact our support team.</p>;
        </div>)}
;
      {type === 'network' && (<div className="mt-4 text-sm text-gray-500 "dark": "text-gray-400">;
          <p>;
            {t('general.check_status_page')"}
            {" "}
            <Link href=""https": "//status.zion.ai" className="underline">;
              {t('general.status_page')"}
            </Link>;
            .;
          </p>;
        </div>)}
    </div>)}
// Specific empty state variants for quick use;
export function ProductsEmptyState("props": "any) {;
    const action = onAddProduct;
        ? {;
            "label": isAuthenticated ? 'Add Product' : 'Login to Add Product'",;
            "onClick": "onAddProduct;
        : onRetry;
            ? { "label": 'Try Again'", "onClick": "onRetry "}
            : "null;
    const customDescription = isAuthenticated;
        ? "We're working on adding new products to our marketplace. Check back soon for exciting new offerings", or add your own!";
        : "We're working on adding new products to our marketplace. Check back soon for exciting new offerings, or log in to add your own!";
    return (<EmptyState type="products" action={action} description={customDescription} />)}
export function CategoriesEmptyState("props": "any) {;
    return (<EmptyState type="categories" action = {;
  onRetry ? { "label": 'Refresh Categories'",;
  "onClick": "onRetry ;
;
;
;
"} : "null"} />);
}
export function TalentEmptyState("props": "any) {;
    return (<EmptyState type="talent" action = {;
  onRetry ? { "label": 'Reset Filters'",;
  "onClick": "onRetry ;
;
;
;
"} : "null"} />);
}
export function EquipmentEmptyState("props": "any) {;
    return (<EmptyState type="equipment" action = {;
  onRetry ? { "label": 'Refresh Listings'",;
  "onClick": "onRetry ;
;
;
;
"} : "null"} />);
}
export function SearchEmptyState("props": "any) {;
    return (<EmptyState type="search" action = {;
  onRetry ? { "label": 'Clear Search'",;
  "onClick": "onRetry ;
;
;
;
"} : "null"} />);
}
export function NetworkErrorState("props": "any) {;
    return (<EmptyState type="network" action = {;
  onRetry ? { "label": 'Try Again'",;
  "onClick": "onRetry ;
;
;
;
"} : "null"} />);
}
export function ServerErrorState("props": "any) {;
    return (<EmptyState type="error" action = {;
  onRetry ? { "label": 'Retry'",;
  "onClick": "onRetry ;
;
;
;
"} : "null"} />);
}
;
export default EmptyState;
</EmptyState>;
</EmptyState>;
</EmptyState>;
</EmptyState>;
</EmptyState>;
</EmptyState>
</EmptyState>
</EmptyState>
</EmptyState>
</EmptyState>
</EmptyState>
</EmptyState>
import * as React from &apos;react&apos;; import {RefreshCw,Wifi,Server,ShoppingCart,Users,Wrench,Lightbulb} from &apos;lucide-react&apos;; import {Button} from &apos;@/components/ui/button&apos;; import {Link} from &apos;react-router-dom&apos;; import {useTranslation} from &apos;react-i18next&apos;; const defaultContent = { products: { icon: <ShoppingCart className=&quot;w-16 h-16 text-gray-500&quot; />,title: &apos;No Products Available&apos;,description: &apos;We\'re loading our marketplace products. If this persists,there might be a connection issue. Try refreshing the page or check back soon for exciting new offerings!&apos;,},categories: {icon: <Lightbulb className=&quot;w-16 h-16 text-gray-500&quot; />,title: &apos;No Categories Found&apos;,description: &apos;Categories are being organized. Please try refreshing the page or come back later.&apos;,},talent: {icon: <Users className=&quot;w-16 h-16 text-gray-500&quot; />,title: &apos;No Talent Profiles&apos;,description: &apos;No talent profiles match your criteria. Try adjusting your filters or search terms.&apos;,},equipment: {icon: <Wrench className=&quot;w-16 h-16 text-gray-500&quot; />,title: &apos;No Equipment Available&apos;,description: &apos;Equipment listings are being updated. Please check back soon for the latest hardware offerings.&apos;,},search: {icon: <ShoppingCart className=&quot;w-16 h-16 text-gray-500&quot; />,title: &apos;No Results Found&apos;,description: &apos;Try adjusting your search terms or browse our categories to discover what we have available.&apos;,},error: {icon: <Server className=&quot;w-16 h-16 text-red-400&quot; />,title: &apos;Unable to Load Data&apos;,description: &apos;We\'re experiencing technical difficulties. Our team has been notified and is working on a fix.&apos;,},network: {icon: <Wifi className=&quot;w-16 h-16 text-orange-400&quot; />,title: &apos;Connection Issue&apos;,description: &apos;Please check your internet connection and try again. If the problem persists,our servers might be temporarily unavailable.&apos;,},loading: {icon: <RefreshCw className=&quot;w-16 h-16 text-blue-400 animate-spin&quot; />,title: &apos;Loading...&apos;,description: &apos;We\'re fetching the latest data for you. This should only take a moment.&apos;,},};; export function EmptyState($1) { const { t } = useTranslation(); const content = defaultContent[type]; const displayIcon = icon || content.icon; return ( <div className=&quot;min-h-screen bg-white&quot;> <div className=&quot;mb-4&quot;> {displayIcon} </div> <h3 className=&quot;text-xl font-semibold text-gray-900 dark:text-white mb-2&quot;> {displayTitle} </h3> <p className=&quot;text-gray-600 dark:text-gray-400 max-w-md mb-6&quot;> {displayDescription} </p> {action && (<Button onClick={action.onClick} variant=&quot;outline&quot; className=&quot;flex items-center gap-2&quot;> <RefreshCw className=&quot;w-4 h-4&quot; /> {action.label} </Button>)} {type === &apos;error&apos; && (<div className=&quot;mt-4 text-sm text-gray-500 dark:text-gray-400&quot;> <p>If this issue continues,please contact our support team.</p> </div> )} {type === &apos;network&apos; && (<divclassName=&quot;mt-4 text-sm text-gray-500 dark:text-gray-400&quot;> <p>&apos;; {t(&apos;general.check_status_page&apos;)} {&quot; &quot;} <Linkhref=&quot;https: {t(&apos;general.status_page&apos;)} </Link> . </p> </div> )} </div> )} export function ProductsEmptyState($1) { const action = onAddProduct ? { label: isAuthenticated ? &apos;Add Product&apos; : &apos;Login to Add Product&apos;,onClick: onAddProduct : onRetry;&apos;;&apos;; ? { label: &apos;Try Again&apos;,onClick: onRetry } : null;&apos;; const customDescription = isAuthenticated&apos;; ? &quot;We&apos;re working on adding new products to our marketplace. Check back soon for exciting new offerings,or add your own!&quot;;&apos;; : &quot;We&apos;re working on adding new products to our marketplace. Check back soon for exciting new offerings,or log in to add your own!&quot;; return (<EmptyState type=&quot;products&quot; action={action} description={customDescription} />)} export function CategoriesEmptyState($1) { return (<EmptyState type=&quot;categories&quot; action = { onRetry ? { label: &apos;Refresh Categories&apos;,onClick: onRetry } : null} />)} export function TalentEmptyState($1) { return (<EmptyState type=&quot;talent&quot; action = { onRetry ? { label: &apos;Reset Filters&apos;,onClick: onRetry } : null} />)} export function EquipmentEmptyState($1) { return (<EmptyState type=&quot;equipment&quot; action = { onRetry ? { label: &apos;Refresh Listings&apos;,onClick: onRetry } : null} />)} export function SearchEmptyState($1) { return (<EmptyState type=&quot;search&quot; action = { onRetry ? { label: &apos;Clear Search&apos;,onClick: onRetry } : null} />)} export function NetworkErrorState($1) { return (<EmptyState type=&quot;network&quot; action = { onRetry ? { label: &apos;Try Again&apos;,onClick: onRetry } : null} />)} export function ServerErrorState($1) { return (<EmptyState type=&quot;error&quot; action = { onRetry ? { label: &apos;Retry&apos;,onClick: onRetry } : null} />)} export default EmptyState; </EmptyState> </EmptyState> </EmptyState>;&apos;;&apos;;
const * as React from "react"; import {RefreshCw,Wifi,Server,ShoppingCart,Users,Wrench,Lightbulb} from "lucide-react"; import {Button} from "@/components/ui/button"; import {Link} from "react-router-dom"; import {useTranslation} from "react-i18next"; const defaultContent = { products: { icon: <ShoppingCart className="w-16 h-16 text-gray-500" />,title: "No Products Available",description: "We\"re loading our marketplace products. If this persists,there might be a connection issue. Try refreshing the page or check back soon for exciting new offerings!",},categories: {icon: <Lightbulb className="w-16 h-16 text-gray-500" />,title: "No Categories Found",description: "Categories are being organized. Please try refreshing the page or come back later.",},talent: {icon: <Users className="w-16 h-16 text-gray-500" />,title: "No Talent Profiles",description: "No talent profiles match your criteria. Try adjusting your filters or search terms.",},equipment: {icon: <Wrench className="w-16 h-16 text-gray-500" />,title: "No Equipment Available",description: "Equipment listings are being updated. Please check back soon for the latest hardware offerings.",},search: {icon: <ShoppingCart className="w-16 h-16 text-gray-500" />,title: "No Results Found",description: "Try adjusting your search terms or browse our categories to discover what we have available.",},error: {icon: <Server className="w-16 h-16 text-red-400" />,title: "Unable to Load Data",description: "We\"re experiencing technical difficulties. Our team has been notified and is working on a fix.",},network: {icon: <Wifi className="w-16 h-16 text-orange-400" />,title: "Connection Issue",description: "Please check your internet connection and try again. If the problem persists,our servers might be temporarily unavailable.",},loading: {icon: <RefreshCw className="w-16 h-16 text-blue-400 animate-spin" />,title: "Loading.",description: "We\"re fetching the latest data for you. This should only take a moment.",},}; export function EmptyState($1) { const { t } = useTranslation(); const content = defaultContent[type]; const displayIcon = icon | content.icon; return ( <div className="min-h-screen bg-white"> <div className="mb-4"> {displayIcon} </div> <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2"> {displayTitle} </h3> <p className="text-gray-600 dark:text-gray-400 max-w-md mb-6"> {displayDescription} </p> {action && (<Button onClick={action.onClick} variant="outline" className="flex items-center gap-2"> <RefreshCw className="w-4 h-4" /> {action.label} </Button>)} {type === "error" && (<div className="mt-4 text-sm text-gray-500 dark:text-gray-400"> <p>If this issue continues,please contact our support team.</p> </div> )} {type === "network" && (<divclassName="mt-4 text-sm text-gray-500 dark:text-gray-400"> <p>"; {t("general.check_status_page")} {" "} <Linkhref="https: {t("general.status_page")} </Link> . </p> </div> )} </div> )} export function ProductsEmptyState($1) { const action = onAddProduct ? { label: isAuthenticated ? "Add Product" : "Login to Add Product",onClick: onAddProduct : onRetry;";"; ? { label: "Try Again",onClick: onRetry } : null;"; const customDescription = isAuthenticated"; ? "We"re working on adding new products to our marketplace. Check back soon for exciting new offerings,or add your own!";"; : "We"re working on adding new products to our marketplace. Check back soon for exciting new offerings,or log in to add your own!"; return (<EmptyState type="products" action={action} description={customDescription} />)} export function CategoriesEmptyState($1) { return (<EmptyState type="categories" action = { onRetry ? { label: "Refresh Categories",onClick: onRetry } : null} />)} export function TalentEmptyState($1) { return (<EmptyState type="talent" action = { onRetry ? { label: "Reset Filters",onClick: onRetry } : null} />)} export function EquipmentEmptyState($1) { return (<EmptyState type="equipment" action = { onRetry ? { label: "Refresh Listings",onClick: onRetry } : null} />)} export function SearchEmptyState($1) { return (<EmptyState type="search" action = { onRetry ? { label: "Clear Search",onClick: onRetry } : null} />)} export function NetworkErrorState($1) { return (<EmptyState type="network" action = { onRetry ? { label: "Try Again",onClick: onRetry } : null} />)} export function ServerErrorState($1) { return (<EmptyState type="error" action = { onRetry ? { label: "Retry",onClick: onRetry } : null} />)} export default EmptyState; </EmptyState> </EmptyState> </EmptyState>;";";"""
import _React from 'react';,
import * as _React from 'react'; import {RefreshCw,Wifi,Server,ShoppingCart,Users,Wrench,Lightbulb} from 'lucide-react'; import {Button} from '@/components/ui/button'; import {Link} from 'react-router-dom'; import {useTranslation} from 'react-i18next'; const defaultContent = { products: { icon: <ShoppingCart className="w-16 h-16 text-gray-500" />,title: 'No Products Available,description: 'We\'re loading our marketplace products. If this persists,there might be a connection issue. Try refreshing the page or check back soon for exciting new offerings!',},categories: {icon: <Lightbulb className="w-16 h-16 text-gray-500" />,title: 'No Categories Found,description: 'Categories are being organized. Please try refreshing the page or come back later.,},talent: {icon: <Users className="w-16 h-16 text-gray-500" />,title: 'No Talent Profiles,description: 'No talent profiles match your criteria. Try adjusting your filters or search terms.,},equipment: {icon: <Wrench className="w-16 h-16 text-gray-500" />,title: 'No Equipment Available,description: 'Equipment listings are being updated. Please check back soon for the latest hardware offerings.,},search: {icon: <ShoppingCart className="w-16 h-16 text-gray-500" />,title: 'No Results Found,description: 'Try adjusting your search terms or browse our categories to discover what we have available.,},error: {icon: <Server className="w-16 h-16 text-red-400" />,title: 'Unable to Load Data,description: 'We\'re experiencing technical difficulties. Our team has been notified and is working on a fix.,},network: {icon: <Wifi className="w-16 h-16 text-orange-400" />,title: 'Connection Issue,description: 'Please check your internet connection and try again. If the problem persists,our servers might be temporarily unavailable.',},loading: {icon: <RefreshCw className="w-16 h-16 text-blue-400 animate-spin" />,title: 'Loading...,description: 'We\'re fetching the latest data for you. This should only take a moment.,},};; export function EmptyState(_) { const { t } = useTranslation(); const content = defaultContent[type]; const displayIcon = icon || content.icon; return ( <div className="min-h-screen bg-white"> <div className="mb-4"> {displayIcon} </div> <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2"> {displayTitle} </h3> <p className="text-gray-600 dark:text-gray-400 max-w-md mb-6"> {displayDescription} </p> {action && (<Button onClick={action.onClick} variant="outline" className="flex items-center gap-2"> <RefreshCw className="w-4 h-4" /> {action.label} </Button>)} {type === 'error' && (<div className="mt-4 text-sm text-gray-500 dark:text-gray-400"> <p>If this issue continues,please contact our support team.</p> </div> )} {type === 'network' && (<divclassName="mt-4 text-sm text-gray-500 dark:text-gray-400"> <p>'; {t('general.check_status_page')} {" "} <Linkhref="https: {t('general.status_page')} </Link> . </p> </div> )} </div> )} export function ProductsEmptyState(_) { const action = onAddProduct ? { label: isAuthenticated ? 'Add Product' : 'Login to Add Product,onClick: onAddProduct : onRetry;';'; ? { label: 'Try Again,onClick: onRetry } : null;'; const customDescription = isAuthenticated'; ? "We're working on adding new products to our marketplace. Check back soon for exciting new offerings,or add your own!";'; : "We're working on adding new products to our marketplace. Check back soon for exciting new offerings,or log in to add your own!"; return (<EmptyState type="products" action={action} description={customDescription} />)} export function CategoriesEmptyState(_) { return (<EmptyState type="categories" action = { onRetry ? { label: 'Refresh Categories,onClick: onRetry } : null} />)} export function TalentEmptyState(_) { return (<EmptyState type="talent" action = { onRetry ? { label: 'Reset Filters,onClick: onRetry } : null} />)} export function EquipmentEmptyState(_) { return (<EmptyState type="equipment" action = { onRetry ? { label: 'Refresh Listings,onClick: onRetry } : null} />)} export function SearchEmptyState(_) { return (<EmptyState type="search" action = { onRetry ? { label: 'Clear Search,onClick: onRetry } : null} />)} export function NetworkErrorState(_) { return (<EmptyState type="network" action = { onRetry ? { label: 'Try Again,onClick: onRetry } : null} />)} export function ServerErrorState(_) { return (<EmptyState type="error" action = { onRetry ? { label: 'Retry,onClick: onRetry } : null} />)} export default EmptyState; </EmptyState> </EmptyState> </EmptyState>;';';