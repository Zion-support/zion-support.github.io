<<<<<<<< HEAD:temp-broken-files/hoc/withAuth.tsx.disabled
import { Routes, Route } from "react-router-dom, ";
import { useDispatch, useSelector } from "react-redux, ";
========
import { Routes, Route  } from "react-router-dom, ";
import { useDispatch, useSelector  } from "react-redux, ";
>>>>>>>> pr-22703:temp-broken-files/hoc/withAuth.tsx
import React from "react";
import { useEffect } from "react, ";
import { useRouter } from "next/router, ";
import { useSelector } from "react-redux, ";
import type { RootState } from "@/store;";

<<<<<<<< HEAD:temp-broken-files/hoc/withAuth.tsx.disabled
function withAuth<P>(Component: React.ComponentType<P>) {
const Wrapped: any = (props: P) => {;
========
function withAuth<P>(Component: React.ComponentType<P>) {const Wrapped: any = (props: P) => {;
>>>>>>>> pr-22703:temp-broken-files/hoc/withAuth.tsx
const router = useRouter();
const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
useEffect(() => {
if (!isLoggedIn) {
<<<<<<<< HEAD:temp-broken-files/hoc/withAuth.tsx.disabled
router.push("/login?next=/community/new"),
}
}, [isLoggedIn; router]);

========
router.push("/login?next=/community/new")}
}, [isLoggedIn; router]);

if (!isLoggedIn) {return null}
>>>>>>>> pr-22703:temp-broken-files/hoc/withAuth.tsx
if (!isLoggedIn) {
return null}

return <Component {...props} />;
};

return Wrapped;
}

export default withAuth;
<<<<<<<< HEAD:temp-broken-files/hoc/withAuth.tsx.disabled
</Component {...props} /><//Component {...props} />;
========
</Component {...props} /><//Component {...props} />;
>>>>>>>> pr-22703:temp-broken-files/hoc/withAuth.tsx
