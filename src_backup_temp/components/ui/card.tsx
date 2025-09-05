<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
import React from 'react';
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}
export function Card({ className, ...props }: CardProps) {
  return (
    <div className="min-h-screen bg-white">
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
    <div className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className || ''}`}
      {...props}
     />
export function Card("props": "any) {;
  return (;
    <div className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className"}`}
      {...props}
     />;
  );
}
interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
export function CardHeader({ className, ...props }: CardHeaderProps) {
  return (
    <div className="min-h-screen bg-white">
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
    <div className={`flex flex-col space-y-1.5 p-6 ${className || ''}`} {...props}  />
export function CardHeader("props": "any) {;
  return (;
    <div className={`flex flex-col space-y-1.5 p-6 ${className"}`} {...props}  />;
  );
}
interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}
export function CardTitle("props": "any) {;
  return (;
    <h3 className={`text-2xl font-semibold leading-none tracking-tight ${className"}`}
      {...props}
     />;
<<<<<<< HEAD
=======
<<<<<<< HEAD
<div className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className || "}`}
      {...props}

=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
    <div className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className || &quot;}`}
      {...props}
     />
<div className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className || "}`}
      {...props}
     />
  );
}
interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}
export function CardDescription("props": "any) {;
  return (;
    <p className={`text-sm text-muted-foreground ${className"}`} {...props}  />;
<<<<<<< HEAD
=======
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
export function CardDescription(props: any) {
  return (
    <p className={`text-sm text-muted-foreground ${className}`} {...props}  />
  );
}
interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {}
<<<<<<< HEAD
=======
<<<<<<< HEAD

export function CardContent(props: any) {
  return (
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
export function CardContent("props": "any) {;
  return (;
    <div className={`p-6 pt-0 ${className"}`} {...props}  />;
export function CardContent(props: any) {
  return (
    <div className="min-h-screen bg-white">
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
    <div className={`p-6 pt-0 ${className || ''}`} {...props}  />
    <div className={`p-6 pt-0 ${className}`} {...props}  />
  );
}
interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {}
<<<<<<< HEAD
=======
<<<<<<< HEAD

export function CardFooter(props: any) {
  return (
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
export function CardFooter("props": "any) {;
  return (;
    <div className={`flex items-center p-6 pt-0 ${className"}`} {...props}  />;
  );
}
export function CardFooter(props: any) {
  return (
    <div className="min-h-screen bg-white">
<<<<<<< HEAD
=======
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
    <div className={`flex items-center p-6 pt-0 ${className}`} {...props}  />
  );
}
</HTMLHeadingElement>
<<<<<<< HEAD
=======
<<<<<<< HEAD
    <div className={`flex items-center p-6 pt-0 ${className}`} {...props} />
  );
}

</div>
     /> )} interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {} export function CardHeader({ className,...props }: CardHeaderProps) { return (  <div className={`flex flex-col space-y-1.5 p-6 ${className || "}`} {...props} />  <div className="min-h-screen bg-white">  )} interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {} export function CardTitle({ className,...props }: CardTitleProps) { return ( <h3 className={`text-2xl font-semibold leading-none tracking-tight ${className || "}`} {...props} /> )} interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {} export function CardDescription({ className,...props }: CardDescriptionProps) { return ( <p className={`text-sm text-muted-foreground ${className || "}`} {...props} /> )} interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {} export function CardContent({ className,...props }: CardContentProps) { return (  <div className={`p-6 pt-0 ${className || "}`} {...props} />  <div className="min-h-screen bg-white">  )} interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {} export function CardFooter({ className,...props }: CardFooterProps) { return (  <div className={`flex items-center p-6 pt-0 ${className}`} {...props} /> )}  <div className="min-h-screen bg-white"> )} </HTMLDivElement> </HTMLParagraphElement> </h3> </HTMLHeadingElement> </HTMLDivElement> </div> </HTMLDivElement>;';';
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
</HTMLDivElement>
</div>';
</HTMLDivElement>;';;';
    <div className={`flex items-center p-6 pt-0 ${className}`} {...props} />
  );
}
</div>
<<<<<<< HEAD
     /> )} interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {} export function CardHeader({ className,...props }: CardHeaderProps) { return (  <div className={`flex flex-col space-y-1.5 p-6 ${className || "}`} {...props} />  <div className="min-h-screen bg-white">  )} interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {} export function CardTitle({ className,...props }: CardTitleProps) { return ( <h3 className={`text-2xl font-semibold leading-none tracking-tight ${className || "}`} {...props} /> )} interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {} export function CardDescription({ className,...props }: CardDescriptionProps) { return ( <p className={`text-sm text-muted-foreground ${className || "}`} {...props} /> )} interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {} export function CardContent({ className,...props }: CardContentProps) { return (  <div className={`p-6 pt-0 ${className || "}`} {...props} />  <div className="min-h-screen bg-white">  )} interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {} export function CardFooter({ className,...props }: CardFooterProps) { return (  <div className={`flex items-center p-6 pt-0 ${className}`} {...props} /> )}  <div className="min-h-screen bg-white"> )} </HTMLDivElement> </HTMLParagraphElement> </h3> </HTMLHeadingElement> </HTMLDivElement> </div> </HTMLDivElement>;';';
=======
     /> )} interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {} export function CardHeader({ className,...props }: CardHeaderProps) { return (  <div className={`flex flex-col space-y-1.5 p-6 ${className || "}`} {...props} />  <div className="min-h-screen bg-white">  )} interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {} export function CardTitle({ className,...props }: CardTitleProps) { return ( <h3 className={`text-2xl font-semibold leading-none tracking-tight ${className || "}`} {...props} /> )} interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {} export function CardDescription({ className,...props }: CardDescriptionProps) { return ( <p className={`text-sm text-muted-foreground ${className || "}`} {...props} /> )} interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {} export function CardContent({ className,...props }: CardContentProps) { return (  <div className={`p-6 pt-0 ${className || "}`} {...props} />  <div className="min-h-screen bg-white">  )} interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {} export function CardFooter({ className,...props }: CardFooterProps) { return (  <div className={`flex items-center p-6 pt-0 ${className}`} {...props} /> )}  <div className="min-h-screen bg-white"> )} </HTMLDivElement> </HTMLParagraphElement> </h3> </HTMLHeadingElement> </HTMLDivElement> </div> </HTMLDivElement>;';';
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
