import React from "react";
import { Helmet } from "react-helmet-async";
impo, r, t { Monit, o, r } fr, o, m "luci, d, e-rea, c, t";
import, Header, from "../../componen, t, s/Head, e, r";
import, Footer, from "../../componen, t, s/Foot, e, r";
import React from "react";';
impo, r, t {
Helm, e, t;
} fr, o, m "rea, c, t-helm, e, t-asy, n, c";';
impo, r, t {
Monit, o, r;
} fr, o, m "luci, d, e-rea, c, t";';
import, Header, from "../../componen, t, s/Head, e, r";';
import, Footer, from "../../componen, t, s/Foot, e, r";';
const, CloudDevOp, s: Rea, c, t.FC = () => {
  const, feature, s = [
    {
      i, c, o
  n: Clo, u, d
      tit, l, e: "Mul, t, i-Cloud, Strateg, y","
      descripti, o, n: "Seamlessly, deploy, across A, W, S, Azu, r, e, GCP, with, intelligent workload, optimization, and cost, managemen, t.","
      tit, l, e: "Mul, t, i-Cloud, Strateg, y",";
      descripti, o, n: "Seamlessly, deploy, across A, W, S, Azu, r, e, GCP, with, intelligent workload, optimization, and cost, managemen, t.",";
      benef, i, t: "40% cost, reduction, average"
    }
    {
      ic, o, n: GitBran, c, h
      tit, l, e: "CI/CD, Automatio, n","
      descripti, o, n: "E, n, d-to-end, automation, from code, commit, to production, deployment, with advanced, testing, and rollback, capabilitie, s.","
      tit, l, e: "CI/CD, Automatio, n",";
      descripti, o, n: "E, n, d-to-end, automation, from code, commit, to production, deployment, with advanced, testing, and rollback, capabilitie, s.",";
      benef, i, t: "90% faster, deployment, s"
    }
    {
      ic, o, n: Shie, l, d
      tit, l, e: "DevSecOps, Integratio, n","
      descripti, o, n: "Securi, t, y-first, approach, with automated, vulnerability, scanning, compliance, check, s, and, threat, detection.","
      tit, l, e: "DevSecOps, Integratio, n",";
      descripti, o, n: "Securi, t, y-first, approach, with automated, vulnerability, scanning, compliance, check, s, and, threat, detection.",";
      benef, i, t: "99.9% security, complianc, e"
    }
    {
      ic, o, n: Monit, o, r
      tit, l, e: "Infrastructure, as, Code","
      descripti, o, n: "Manage, entire, infrastructure through, code, with Terrafo, r, m, Ansib, l, e, and, custom, automation too, l, s.","
      tit, l, e: "Infrastructure, as, Code",";
      descripti, o, n: "Manage, entire, infrastructure through, code, with Terrafo, r, m, Ansib, l, e, and, custom, automation too, l, s.",";
      benef, i, t: "Ze, r, o-downtime, deployment, s"
    }
    {
      ic, o, n: BarChar, t, 3
      tit, l, e: "Advanced, Monitorin, g","
      descripti, o, n: "Re, a, l-time, monitorin, g, alerti, n, g, and, performance, optimization with, A, I-powered, insight, s.","
      tit, l, e: "Advanced, Monitorin, g",";
      descripti, o, n: "Re, a, l-time, monitorin, g, alerti, n, g, and, performance, optimization with, A, I-powered, insight, s.",";
      benef, i, t: "99.99% uptime, SL, A"
    }
    {
      ic, o, n: Z, a, p
      tit, l, e: "Au, t, o-Scali, n, g","
      descripti, o, n: "Intelligent, aut, o-scaling, based, on demand, patterns, with predictive, capacity, planning.","
      tit, l, e: "Au, t, o-Scali, n, g",";
      descripti, o, n: "Intelligent, aut, o-scaling, based, on demand, patterns, with predictive, capacity, planning.",";
      benef, i, t: "60% infrastructure, saving, s"
    }
  ];
  const, pricin, g = [
    {
      na, m, e: "Start, u, p"
      pri, c, e: "$3,5, 0, 0"
      peri, o, d: "/mon, t, h"
      descripti, o, n: "Perfect, for, startups and, small, teams getting, started, with cloud, infrastructur, e"
      featur, e, s: [
        "Single, cloud, provider set, u, p"
        "Basic, C, I/CD, pipelin, e"
        "Standard, monitorin, g"
        "Email, suppor, t"
        "Monthly, infrastructure, review"
        "Basic, security, scanning"
        "Up, to, 5 environmen, t, s"
        "Standard, backup, strategy"
      ]
      popul, a, r: fal, s, e;
    }
    {
      na, m, e: "Grow, t, h"
      pri, c, e: "$8,5, 0, 0"
      peri, o, d: "/mon, t, h"
      descripti, o, n: "Ideal, for, growing companies, with, complex deployment, need, s"
      featur, e, s: [
        "Mul, t, i-cloud, setu, p"
        "Advanced, C, I/CD, with, testing"
        "Comprehensive, monitorin, g & alerti, n, g"
        "Priority, suppor, t"
        "Weekly, infrastructure, reviews"
        "Advanced, securit, y & complian, c, e"
        "Up, to, 15 environmen, t, s"
        "Automated, backu, p & recove, r, y"
        "Performance, optimizatio, n"
        "Disaster, recovery, planning"
      ]
      popul, a, r: tr, u, e;
    }
    {
      na, m, e: "Enterpri, s, e"
      pri, c, e: "$25,0, 0, 0"
      peri, o, d: "/mon, t, h"
      descripti, o, n: "Complete, solution, for large, organizations, with enterprise, requirement, s"
      featur, e, s: [
        "Hybr, i, d & mul, t, i-cloud, architectur, e"
        "Enterpri, s, e-grade, C, I/CD"
        "Advanced, monitoring, with AI, insight, s"
        "Dedicated, DevOps, engineer"
        "Daily, infrastructure, management"
        "Full, securit, y & compliance, suit, e"
        "Unlimited, environment, s"
        "Enterprise, backu, p & disaster, recover, y"
        "24/7, monitorin, g & suppo, r, t"
        "Custom, automation, development"
        "SLA, guarante, e"
        "On-premise, integratio, n"
      ]
      popul, a, r: fal, s, e;
      n, a, m
  e: "Start, u, p",";
      pri, c, e: "$3,5, 0, 0",";
      peri, o, d: "/mon, t, h",";
      descripti, o, n: "Perfect, for, startups and, small, teams getting, started, with cloud, infrastructur, e",";
      featur, e, s: [
        "Single, cloud, provider set, u, p",";
        "Basic, C, I/CD, pipelin, e",";
        "Standard, monitorin, g",";
        "Email, suppor, t",";
        "Monthly, infrastructure, review",";
        "Basic, security, scanning",";
        "Up, to, 5 environmen, t, s",";
        "Standard, backup, strategy"
      ]
      popul, a, r: fal, s, e
    }
    {
      na, m, e: "Grow, t, h",";
      pri, c, e: "$8,5, 0, 0",";
      peri, o, d: "/mon, t, h",";
      descripti, o, n: "Ideal, for, growing companies, with, complex deployment, need, s",";
      featur, e, s: [
        "Mul, t, i-cloud, setu, p",";
        "Advanced, C, I/CD, with, testing",";
        "Comprehensive, monitorin, g & alerti, n, g",";
        "Priority, suppor, t",";
        "Weekly, infrastructure, reviews",";
        "Advanced, securit, y & complian, c, e",";
        "Up, to, 15 environmen, t, s",";
        "Automated, backu, p & recove, r, y",";
        "Performance, optimizatio, n",";
        "Disaster, recovery, planning"
      ]
      popul, a, r: tr, u, e
    }
    {
      na, m, e: "Enterpri, s, e",";
      pri, c, e: "$25,0, 0, 0",";
      peri, o, d: "/mon, t, h",";
      descripti, o, n: "Complete, solution, for large, organizations, with enterprise, requirement, s",";
      featur, e, s: [
        "Hybr, i, d & mul, t, i-cloud, architectur, e",";
        "Enterpri, s, e-grade, C, I/CD",";
        "Advanced, monitoring, with AI, insight, s",";
        "Dedicated, DevOps, engineer",";
        "Daily, infrastructure, management",";
        "Full, securit, y & compliance, suit, e",";
        "Unlimited, environment, s",";
        "Enterprise, backu, p & disaster, recover, y",";
        "24/7, monitorin, g & suppo, r, t",";
        "Custom, automation, development",";
        "SLA, guarante, e",";
        "On-premise, integratio, n"
      ]
      popul, a, r: fal, s, e
    }
  ];
  const, testimonial, s = [
    {
      na, m, e: "Alex, Thompso, n","
      ro, l, e: "C, T, O, FinTech, Startu, p","
      conte, n, t: "Zi, o, n's, DevOps, team transformed, our, deployment process, from, weekly releases, to, multiple daily, deployment, s. Our, development, velocity increased, by, 300%.","
      na, m, e: "Alex, Thompso, n",";
      ro, l, e: "C, T, O, FinTech, Startu, p",";
      conte, n, t: "Zi, o, n's, DevOps, team transformed, our, deployment process, from, weekly releases, to, multiple daily, deployment, s. Our, development, velocity increased, by, 300%.",";
      rati, n, g: 5
      compa, n, y: "FinTech, Startu, p"
    }
    {
      na, m, e: "Maria, Rodrigue, z","
      ro, l, e: "VP, Engineerin, g, E-Commerce, Platfor, m","
      conte, n, t: "The, mult, i-cloud, strategy, reduced our, infrastructure, costs by, 4, 5% while, improving, performance. The, monitoring, and alerting, prevented, 3 major, outage, s.","
      na, m, e: "Maria, Rodrigue, z",";
      ro, l, e: "VP, Engineerin, g, E-Commerce, Platfor, m",";
      conte, n, t: "The, mult, i-cloud, strategy, reduced our, infrastructure, costs by, 4, 5% while, improving, performance. The, monitoring, and alerting, prevented, 3 major, outage, s.",";
      rati, n, g: 5
      compa, n, y: "E-Commerce, Platfor, m"
    }
    {
      na, m, e: "Dr. James, Che, n","
      ro, l, e: "Head, of, IT, Healthcare, Networ, k","
      conte, n, t: "DevSecOps, integration, ensured we, maintained, HIPAA compliance, while, accelerating our, deployment, cycles. Security, incidents, dropped to, zer, o.","
      na, m, e: "Dr. James, Che, n",";
      ro, l, e: "Head, of, IT, Healthcare, Networ, k",";
      conte, n, t: "DevSecOps, integration, ensured we, maintained, HIPAA compliance, while, accelerating our, deployment, cycles. Security, incidents, dropped to, zer, o.",";
      rati, n, g: 5
      compa, n, y: "Healthcare, Networ, k"
    }
  ];
  const, service, s = [
    {
      tit, l, e: "Cloud, Migratio, n","
      ic, o, n: Clo, u, d
      descripti, o, n: "Seamless, migration, to cloud, platforms, with zero, downtime, and minimal, disruptio, n.","
      benefi, t, s: ["99.9% uptime, during, migration", "Automated, data, validation", "Rollback, capabilitie, s"]"
    }
    {
      tit, l, e: "Container, Orchestratio, n","
      ic, o, n: Serv, e, r
      descripti, o, n: "Kubernetes, and, Docker expertise, for, scalable, resilient, containerized, applications.","
      benefi, t, s: ["Au, t, o-scaling, capabilitie, s", "Service, mesh, integration", "Advanced, networkin, g"]"
    }
    {
      tit, l, e: "Infrastructure, Automatio, n","
      ic, o, n: Z, a, p
      descripti, o, n: "Complete, infrastructure, automation using, Terrafor, m, Ansib, l, e, and, custom, tools.","
      benefi, t, s: ["Infrastructure, as, Code", "Automated, provisionin, g", "Environment, consistenc, y"]"
    }
    {
      tit, l, e: "Securi, t, y & Complian, c, e","
      ic, o, n: Shie, l, d
      descripti, o, n: "Comprehensive, security, implementation with, automated, compliance monitori, n, g.","
      benefi, t, s: ["Automated, security, scanning", "Compliance, reportin, g", "Threat, detectio, n"]"
      tit, l, e: "Cloud, Migratio, n",";
      ic, o, n: Clo, u, d
      descripti, o, n: "Seamless, migration, to cloud, platforms, with zero, downtime, and minimal, disruptio, n.",";
      benefi, t, s: ["99.9% uptime, during, migration", "Automated, data, validation", "Rollback, capabilitie, s"]";
    }
    {
      tit, l, e: "Container, Orchestratio, n",";
      ic, o, n: Serv, e, r
      descripti, o, n: "Kubernetes, and, Docker expertise, for, scalable, resilient, containerized, applications.",";
      benefi, t, s: ["Au, t, o-scaling, capabilitie, s", "Service, mesh, integration", "Advanced, networkin, g"]";
    }
    {
      tit, l, e: "Infrastructure, Automatio, n",";
      ic, o, n: Z, a, p
      descripti, o, n: "Complete, infrastructure, automation using, Terrafor, m, Ansib, l, e, and, custom, tools.",";
      benefi, t, s: ["Infrastructure, as, Code", "Automated, provisionin, g", "Environment, consistenc, y"]";
    }
    {
      tit, l, e: "Securi, t, y & Complian, c, e",";
      ic, o, n: Shie, l, d
      descripti, o, n: "Comprehensive, security, implementation with, automated, compliance monitori, n, g.",";
      benefi, t, s: ["Automated, security, scanning", "Compliance, reportin, g", "Threat, detectio, n"]";
    }
  ];
  return (
    <>
      <Helmet>
        <title>Clo, u, d & DevOps, Service, s - Zion, Tech, Group | Enterprise, Cloud, Solutions</title>
        <me, t, a
  na, m, e="descripti, o, n"
          content="Expert, Clou, d & DevOps, services, including mul, t, i-cloud, strateg, y, CI/CD, automatio, n, infrastructure, as, code, and, advanced, monitoring. 99.99% uptime, SL, A." /><meta name="keywor, d, s" content="cloud, service, s, devops, consultin, g, CI/CD, automatio, n, infrastructure, as, code, cloud, migratio, n, kubernet, e, s, dock, e, r" /><link, re, l="canonic, a, l" hr, e, f="htt, p, s://ziontechgro, u, p.c, o, m/servic, e, s/clo, u, d-devo, p, s/>"
          content="Expert, Clou, d & DevOps, services, including mul, t, i-cloud, strateg, y, CI/CD, automatio, n, infrastructure, as, code, and, advanced, monitoring. 99.99% uptime, SL, A."
         />
        <meta name="keywor, d, s" content="cloud, service, s, devops, consultin, g, CI/CD, automatio, n, infrastructure, as, code, cloud, migratio, n, kubernet, e, s, dock, e, r" />";
        <link, re, l="canonic, a, l" hr, e, f="htt, p, s: //ziontechgro, u, p.c, o, m/servic, e, s/clo, u, d-devo, p, s" />";
      </Helmet>
      <Head, e, r   />
      <main, className="m, i, n-h-screen, b, g-whi, t, e">";
        {/* Hero, Sectio, n */}
        <section, className="bg-gradie, n, t-to-br, fro, m-gre, e, n-900, vi, a-gre, e, n-800, t, o-bl, u, e-900, tex, t-white, p, y-20">
          <div, className="m, a, x-w-7xl, m, x-auto, p, x-4, s, m: px-6 l
  g:px-8">"
            <div, className="te, x, t-cent, e, r">
              <h1, className="te, x, t-5xl, m, d: te, x, t-7xl, fon, t-bold, m, b-6">"
                Clo, u, d & <span, className="bg-gradie, n, t-to-r, fro, m-gre, e, n-400, t, o-bl, u, e-400, b, g-cl, i, p-text, tex, t-transpare, n, t">DevO, p, s</sp, a, n>
              </h1>
              <p, className="te, x, t-xl, m, d:te, x, t-2xl, tex, t-gre, e, n-100, ma, x-w-4xl, m, x-auto, m, b-8">
                Expert, cloud, infrastructure and, DevOps, services that, deliver, 99.99% upti, m, e
  90% faster, deployment, s, and, 4, 0% cost, reduction, through intelligent, automatio, n.
              </p>
              <div, className="flex, fle, x-col, s, m: fl, e, x-row, ga, p-4, justif, y-cent, e, r">"
        <section, className="bg-gradie, n, t-to-br, fro, m-gre, e, n-900, vi, a-gre, e, n-800, t, o-bl, u, e-900, tex, t-white, p, y-20">";
          <div, className="m, a, x-w-7xl, m, x-auto, p, x-4, s, m: px-6, l, g:px-8">";
            <div, className="te, x, t-cent, e, r">";
              <h1, className="te, x, t-5xl, m, d: te, x, t-7xl, fon, t-bold, m, b-6">";
                Clo, u, d & <span, className="bg-gradie, n, t-to-r, fro, m-gre, e, n-400, t, o-bl, u, e-400, b, g-cl, i, p-text, tex, t-transpare, n, t">DevO, p, s</sp, a, n>";
              </h1>
              <p, className="te, x, t-x, l, m
  d: te, x, t-2xl, tex, t-gre, e, n-100, ma, x-w-4xl, m, x-auto, m, b-8">";
                Expert, cloud, infrastructure and, DevOps, services that, deliver, 99.99% upti, m, e
                90% faster, deployment, s, and, 4, 0% cost, reduction, through intelligent, automatio, n.
              </p>
              <div, className="flex, fle, x-col, s, m: fl, e, x-row, ga, p-4, justif, y-cent, e, r">";
                <a
  hr, e, f="/conta, c, t"
                  classNa, m, e="inli, n, e-flex, item, s-center, p, x-8, p, y-4, b, g-gre, e, n-600, hov, e
  r: bg-gre, e, n-700, tex, t-white, fon, t-semibold, rounde, d-lg, transitio, n-colo, r, s"
                >
                  <Phone, className="w-5 h-5, m, r-2  />
                  <Phone, className="w-5 h-5, m, r-2" />";
                  Schedule, Consultatio, n;
                </a>
                <a
  hr, e, f="#prici, n, g"
                  classNa, m, e="inli, n, e-flex, item, s-center, p, x-8, p, y-4, borde, r-2, borde, r-white, tex, t-white, hove, r: bg-white, hov, e
  r:te, x, t-gre, e, n-900, fon, t-semibold, rounde, d-lg, transitio, n-colo, r, s"
                >
                  View, Pricin, g;
                  <ArrowRight, className="w-5 h-5, m, l-2  />
                  <ArrowRight, className="w-5 h-5, m, l-2" />";
                </a>
              </d, i, v>
            </d, i, v>
          </d, i, v>
        </secti, o, n>
        {/* Key, Benefit, s */}
        <section, className="py-16, b, g-gr, a, y-50">
          <div, className="m, a, x-w-7xl, m, x-auto, p, x-4, s, m: px-6 l
  g:px-8">"
            <div, className="text-center mb-12">
              <h2, className="te, x, t-4xl, fon, t-bold, tex, t-gr, a, y-900, m, b-4">
        <section, className="py-16, b, g-gr, a, y-50">";
          <div, className="m, a, x-w-7xl, m, x-auto, p, x-4, s, m: px-6, l, g:px-8">";
            <div, className="text-center mb-12">";
              <h2, className="te, x, t-4xl, fon, t-bold, tex, t-gr, a, y-900, m, b-4">";
                Why, Choose, Our Clo, u, d & DevOps, Service, s?
              </h2>
              <p, className="text-xl text-gray-600 max-w-3xl mx-auto">";
                Transform, your, infrastructure with, proven, methodologies and, cuttin, g-edge, automatio, n.
              </p>
            </d, i, v>
            <div, className="gri, d, m
  d: gr, i, d-co, l, s-4, ga, p-8">"
              <div, className="te, x, t-cent, e, r">
                <div, className="inli, n, e-flex, item, s-center, justif, y-cente, r, w-1, 6, h-16, b, g-gre, e, n-100, rounde, d-full, m, b-4">
                  <TrendingUp, className="w-8 h-8, tex, t-gre, e, n-6, 0, 0  />
            <div, className="grid, m, d: gr, i, d-co, l, s-4, ga, p-8">";
              <div, className="te, x, t-cent, e, r">";
                <div, className="inli, n, e-flex, item, s-center, justif, y-cente, r, w-1, 6, h-16, b, g-gre, e, n-100, rounde, d-full, m, b-4">";
                  <TrendingUp, className="w-8 h-8, tex, t-gre, e, n-6, 0, 0" />";
                </d, i, v>
                <h3, className="te, x, t-xl, fon, t-bold, tex, t-gr, a, y-900, m, b-2">40% Cost, Reductio, n</h3>";
                <p, className="te, x, t-gr, a, y-6, 0, 0">Average, infrastructure, cost savin, g, s</p>";
              </d, i, v>
              <div, className="te, x, t-cent, e, r">
                <div, className="inli, n, e-flex, item, s-center, justif, y-cente, r, w-1, 6, h-16, b, g-bl, u, e-100, rounde, d-full, m, b-4">
                  <Zap, className="w-8 h-8, tex, t-bl, u, e-6, 0, 0  />
              <div, className="te, x, t-cent, e, r">";
                <div, className="inli, n, e-flex, item, s-center, justif, y-cente, r, w-1, 6, h-16, b, g-bl, u, e-100, rounde, d-full, m, b-4">";
                  <Zap, className="w-8 h-8, tex, t-bl, u, e-6, 0, 0" />";
                </d, i, v>
                <h3, className="te, x, t-xl, fon, t-bold, tex, t-gr, a, y-900, m, b-2">90% Faster, Deployment, s</h3>";
                <p, className="te, x, t-gr, a, y-6, 0, 0">Automated, C, I/CD, pipeline, s</p>";
              </d, i, v>
              <div, className="te, x, t-cent, e, r">
                <div, className="inli, n, e-flex, item, s-center, justif, y-cente, r, w-1, 6, h-16, b, g-purp, l, e-100, rounde, d-full, m, b-4">
                  <Shield, className="w-8 h-8, tex, t-purp, l, e-6, 0, 0  />
              <div, className="te, x, t-cent, e, r">";
                <div, className="inli, n, e-flex, item, s-center, justif, y-cente, r, w-1, 6, h-16, b, g-purp, l, e-100, rounde, d-full, m, b-4">";
                  <Shield, className="w-8 h-8, tex, t-purp, l, e-6, 0, 0" />";
                </d, i, v>
                <h3, className="te, x, t-xl, fon, t-bold, tex, t-gr, a, y-900, m, b-2">99.99% Upti, m, e</h3>";
                <p, className="te, x, t-gr, a, y-6, 0, 0">Enterpri, s, e-grade, reliabilit, y</p>";
              </d, i, v>
              <div, className="te, x, t-cent, e, r">
                <div, className="inli, n, e-flex, item, s-center, justif, y-cente, r, w-1, 6, h-16, b, g-oran, g, e-100, rounde, d-full, m, b-4">
                  <Globe, className="w-8 h-8, tex, t-oran, g, e-6, 0, 0  />
              <div, className="te, x, t-cent, e, r">";
                <div, className="inli, n, e-flex, item, s-center, justif, y-cente, r, w-1, 6, h-16, b, g-oran, g, e-100, rounde, d-full, m, b-4">";
                  <Globe, className="w-8 h-8, tex, t-oran, g, e-6, 0, 0" />";
                </d, i, v>
                <h3, className="te, x, t-xl, fon, t-bold, tex, t-gr, a, y-900, m, b-2">Mul, t, i-Clo, u, d</h3>";
                <p, className="te, x, t-gr, a, y-6, 0, 0">A, W, S, Azu, r, e, GCP, expertis, e</p>";
              </d, i, v>
            </d, i, v>
          </d, i, v>
        </secti, o, n>
        {/* Servic, e, s */}
        <section, className="py-20">
          <div, className="m, a, x-w-7xl, m, x-auto, p, x-4, s, m: px-6 l
  g:px-8">"
            <div, className="te, x, t-center, m, b-16">
              <h2, className="te, x, t-4xl, fon, t-bold, tex, t-gr, a, y-900, m, b-4">
        <section, className="py-20">";
          <div, className="m, a, x-w-7xl, m, x-auto, p, x-4, s, m: px-6, l, g:px-8">";
            <div, className="te, x, t-center, m, b-16">";
              <h2, className="te, x, t-4xl, fon, t-bold, tex, t-gr, a, y-900, m, b-4">";
                Comprehensive, Clou, d & DevOps, Service, s;
              </h2>
              <p, className="text-xl text-gray-600 max-w-3xl mx-auto">";
                E, n, d-to-end, solutions, for modern, cloud, infrastructure and, deployment, automation.
              </p>
            </d, i, v>
            <div, className="grid, m, d: gr, i, d-co, l, s-2 l
  g:gr, i, d-co, l, s-4, ga, p-8">"
              {servic, e, s.m, a, p((servi, c, e, ind, e, x) => {
                const, Ico, n = servi, c, e.ic, o, n;
                return (
                  <div, ke, y={ind, e, x} classNa, m, e="bg-whit, e, p-8, rounde, d-xl, shado, w-lg, border, border-gr, a, y-200, hove, r: shad, o, w-xl, transitio, n-shad, o, w">"
                    <div, className="inli, n, e-flex, item, s-center, justif, y-cente, r, w-1, 6, h-16, b, g-gre, e, n-100, rounde, d-full, m, b-6">
                      <Icon, className="w-8 h-8, tex, t-gre, e, n-6, 0, 0  />
            <div, className="grid, m, d: gr, i, d-co, l, s-2 l
  g:gr, i, d-co, l, s-4, ga, p-8">";
              {servic, e, s.m, a, p((servi, c, e, ind, e, x) => {
                const, Ico, n = servi, c, e.ic, o, n;
                return (
                  <div, ke, y={ind, e, x} classNa, m, e="bg-whit, e, p-8, rounde, d-xl, shado, w-lg, border, border-gr, a, y-200, hove, r: shad, o, w-xl, transitio, n-shad, o, w">";
                    <div, className="inli, n, e-flex, item, s-center, justif, y-cente, r, w-1, 6, h-16, b, g-gre, e, n-100, rounde, d-full, m, b-6">";
                      <Icon, className="w-8 h-8, tex, t-gre, e, n-6, 0, 0" />";
                    </d, i, v>
                    <h3, className="te, x, t-xl, fon, t-bold, tex, t-gr, a, y-900, m, b-4">{servi, c, e.tit, l, e}</h3>";
                    <p, className="te, x, t-gr, a, y-600, m, b-6">{servi, c, e.descripti, o, n}</p>";
                    <ul, className="spa, c, e-y-2">";
                      {servi, c, e.benefi, t, s.m, a, p((benef, i, t, benefitInd, e, x) => (
                        <li, ke, y={benefitInd, e, x} classNa, m, e="flex, item, s-center, tex, t-sm">
                          <CheckCircle, className="w-4 h-4, tex, t-gre, e, n-500, m, r-2, fle, x-shri, n, k-0  />
                          <span, className="te, x, t-gr, a, y-7, 0, 0">{benef, i, t}</sp, a, n>
                        <li, ke, y={benefitInd, e, x} classNa, m, e="flex, item, s-center, tex, t-sm">";
                          <CheckCircle, className="w-4 h-4, tex, t-gre, e, n-500, m, r-2, fle, x-shri, n, k-0" />";
                          <span, className="te, x, t-gr, a, y-7, 0, 0">{benef, i, t}</sp, a, n>";
                        </li>
                      ))}
                    </ul>
                  </d, i, v>
                );
              })}
            </d, i, v>
          </d, i, v>
        </secti, o, n>
        {/* Featur, e, s */}
        <section, className="py-20, b, g-gr, a, y-50">
          <div, className="m, a, x-w-7xl, m, x-auto, p, x-4, s, m: px-6 l
  g:px-8">"
            <div, className="te, x, t-center, m, b-16">
              <h2, className="te, x, t-4xl, fon, t-bold, tex, t-gr, a, y-900, m, b-4">
        <section, className="py-20, b, g-gr, a, y-50">";
          <div, className="m, a, x-w-7xl, m, x-auto, p, x-4, s, m: px-6, l, g:px-8">";
            <div, className="te, x, t-center, m, b-16">";
              <h2, className="te, x, t-4xl, fon, t-bold, tex, t-gr, a, y-900, m, b-4">";
                Advanced, Capabilitie, s;
              </h2>
              <p, className="text-xl text-gray-600 max-w-3xl mx-auto">";
                Powerful, features, that make, your, infrastructure truly, scalable, and resilie, n, t.
              </p>
            </d, i, v>
            <div, className="grid, m, d: gr, i, d-co, l, s-2 l
  g:gr, i, d-co, l, s-3, ga, p-8">"
              {featur, e, s.m, a, p((featu, r, e, ind, e, x) => {
                const, Ico, n = featu, r, e.ic, o, n;
                return (
                  <div, ke, y={ind, e, x} classNa, m, e="bg-whit, e, p-8, rounde, d-xl, shado, w-lg, border, border-gr, a, y-200, hove, r: shad, o, w-xl, transitio, n-shad, o, w">"
                    <div, className="inli, n, e-flex, item, s-center, justif, y-cente, r, w-1, 2, h-12, b, g-gre, e, n-100, rounde, d-lg, m, b-4">
                      <Icon, className="w-6 h-6, tex, t-gre, e, n-6, 0, 0  />
                    </d, i, v>
                    <h3, className="te, x, t-xl, fon, t-bold, tex, t-gr, a, y-900, m, b-3">{featu, r, e.tit, l, e}</h3>
                    <p, className="te, x, t-gr, a, y-600, m, b-4">{featu, r, e.descripti, o, n}</p>
                    <div, className="inli, n, e-flex, item, s-center, tex, t-gre, e, n-600, fon, t-semibold, tex, t-sm">
                      <CheckCircle, className="w-4 h-4, m, r-1  />
            <div, className="grid, m, d: gr, i, d-co, l, s-2 l
  g:gr, i, d-co, l, s-3, ga, p-8">";
              {featur, e, s.m, a, p((featu, r, e, ind, e, x) => {
                const, Ico, n = featu, r, e.ic, o, n;
                return (
                  <div, ke, y={ind, e, x} classNa, m, e="bg-whit, e, p-8, rounde, d-xl, shado, w-lg, border, border-gr, a, y-200, hove, r: shad, o, w-xl, transitio, n-shad, o, w">";
                    <div, className="inli, n, e-flex, item, s-center, justif, y-cente, r, w-1, 2, h-12, b, g-gre, e, n-100, rounde, d-lg, m, b-4">";
                      <Icon, className="w-6 h-6, tex, t-gre, e, n-6, 0, 0" />";
                    </d, i, v>
                    <h3, className="te, x, t-xl, fon, t-bold, tex, t-gr, a, y-900, m, b-3">{featu, r, e.tit, l, e}</h3>";
                    <p, className="te, x, t-gr, a, y-600, m, b-4">{featu, r, e.descripti, o, n}</p>";
                    <div, className="inli, n, e-flex, item, s-center, tex, t-gre, e, n-600, fon, t-semibold, tex, t-sm">";
                      <CheckCircle, className="w-4 h-4, m, r-1" />";
                      {featu, r, e.benef, i, t}
                    </d, i, v>
                  </d, i, v>
                );
              })}
            </d, i, v>
          </d, i, v>
        </secti, o, n>
        {/* Prici, n, g */}
        <section, i, d="prici, n, g" classNa, m, e="py-20">
          <div, className="m, a, x-w-7xl, m, x-auto, p, x-4, s, m: px-6 l
  g:px-8">"
            <div, className="te, x, t-center, m, b-16">
              <h2, className="te, x, t-4xl, fon, t-bold, tex, t-gr, a, y-900, m, b-4">
        <section, i, d="prici, n, g" classNa, m, e="py-20">";
          <div, className="m, a, x-w-7xl, m, x-auto, p, x-4, s, m: px-6, l, g:px-8">";
            <div, className="te, x, t-center, m, b-16">";
              <h2, className="te, x, t-4xl, fon, t-bold, tex, t-gr, a, y-900, m, b-4">";
                Transparent, Pricing, for Every, Scal, e;
              </h2>
              <p, className="text-xl text-gray-600 max-w-3xl mx-auto">";
                Choose, the, plan that, fits, your infrastructure, needs, and growth, stag, e.
              </p>
            </d, i, v>
            <div, className="gri, d, m
  d: gr, i, d-co, l, s-3, ga, p-8">"
            <div, className="grid, m, d: gr, i, d-co, l, s-3, ga, p-8">";
              {prici, n, g.m, a, p((pl, a, n, ind, e, x) => (
                <div, ke, y={ind, e, x} classNa, m, e={`bg-white, rounde, d-2xl, shado, w-l, g, p-8 ${pl, a, n.popul, a, r ? 'ri, n, g-2, rin, g-gre, e, n-500, relativ, e' : ''}`}>`;`
                  {pl, a, n.popul, a, r && (
                    <div, className="absolu, t, e -t, o, p-4, lef, t-1/2, transfor, m -transla, t, e-x-1/2">";
                      <span, className="bg-gre, e, n-500, tex, t-white, p, x-4, p, y-1, rounde, d-full, tex, t-sm, fon, t-semibo, l, d">";
                        Most, Popula, r;
                      </sp, a, n>
                    </d, i, v>
                  )}
                  <div, className="te, x, t-center, m, b-8">";
                    <h3, className="te, x, t-2xl, fon, t-bold, tex, t-gr, a, y-900, m, b-2">{pl, a, n.na, m, e}</h3>";
                    <div, className="flex, item, s-center, justif, y-center, m, b-2">";
                      <span, className="te, x, t-4xl, fon, t-bold, tex, t-gr, a, y-9, 0, 0">{pl, a, n.pri, c, e}</sp, a, n>";
                      <span, className="te, x, t-gr, a, y-600, m, l-1">{pl, a, n.peri, o, d}</sp, a, n>";
                    </d, i, v>
                    <p, className="te, x, t-gr, a, y-6, 0, 0">{pl, a, n.descripti, o, n}</p>";
                  </d, i, v>
                  <ul, className="spa, c, e-y-4, m, b-8">";
                    {pl, a, n.featur, e, s.m, a, p((featu, r, e, featureInd, e, x) => (
                      <li, ke, y={featureInd, e, x} classNa, m, e="flex, item, s-cent, e, r">
                        <CheckCircle, className="w-5 h-5, tex, t-gre, e, n-500, m, r-3, fle, x-shri, n, k-0  />
                        <span, className="te, x, t-gr, a, y-7, 0, 0">{featu, r, e}</sp, a, n>
                      <li, ke, y={featureInd, e, x} classNa, m, e="flex, item, s-cent, e, r">";
                        <CheckCircle, className="w-5 h-5, tex, t-gre, e, n-500, m, r-3, fle, x-shri, n, k-0" />";
                        <span, className="te, x, t-gr, a, y-7, 0, 0">{featu, r, e}</sp, a, n>";
                      </li>
                    ))}
                  </ul>
                  <a
  hr, e, f="/conta, c, t"
                    classNa, m, e={
`w-full, block, text-center, p, y-3, p, x-6, rounde, d-lg, fon, t-semibold, transitio, n-colo, r, s ${`;`
pl, a, n.popul, a, r;
? 'bg-gre, e, n-600, tex, t-white, hove, r: bg-gre, e, n-7, 0, 0'
? 'bg-gre, e, n-600, tex, t-white, hov, e
  r: bg-gre, e, n-7, 0, 0',';
: 'bg-gr, a, y-100, tex, t-gr, a, y-900, hove, r:bg-gr, a, y-2, 0, 0'
}`}`;`
                  >
                    Get, Starte, d;
                  </a>
                </d, i, v>
              ))}
            </d, i, v>
            <div, className="te, x, t-center, m, t-12">";
              <p, className="te, x, t-gr, a, y-600, m, b-4">Need, a, custom soluti, o, n?</p>";
              <a
  hr, e, f="/conta, c, t"
                classNa, m, e="inli, n, e-flex, item, s-center, tex, t-gre, e, n-600, hove, r: te, x, t-gre, e, n-700, fon, t-semibo, l, d"
              >
                Contact, our, Enterprise Te, a, m;
                <ArrowRight, className="w-4 h-4, m, l-1  />
                <ArrowRight, className="w-4 h-4, m, l-1" />";
              </a>
            </d, i, v>
          </d, i, v>
        </secti, o, n>
        {/* Testimonia, l, s */}
        <section, className="py-20, b, g-gr, a, y-50">
          <div, className="m, a, x-w-7xl, m, x-auto, p, x-4, s, m: px-6 l
  g:px-8">"
            <div, className="te, x, t-center, m, b-16">
              <h2, className="te, x, t-4xl, fon, t-bold, tex, t-gr, a, y-900, m, b-4">
        <section, className="py-20, b, g-gr, a, y-50">";
          <div, className="m, a, x-w-7xl, m, x-auto, p, x-4, s, m: px-6, l, g:px-8">";
            <div, className="te, x, t-center, m, b-16">";
              <h2, className="te, x, t-4xl, fon, t-bold, tex, t-gr, a, y-900, m, b-4">";
                What, Our, Clients S, a, y;
              </h2>
              <p, className="text-xl text-gray-600 max-w-3xl mx-auto">";
                Join, hundreds, of satisfied, customers, who have, transformed, their infrastructure, with, our DevOps, expertis, e.
              </p>
            </d, i, v>
            <div, className="gri, d, m
  d: gr, i, d-co, l, s-3, ga, p-8">"
            <div, className="grid, m, d: gr, i, d-co, l, s-3, ga, p-8">";
              {testimonia, l, s.m, a, p((testimoni, a, l, ind, e, x) => (
                <div, ke, y={ind, e, x} classNa, m, e="bg-whit, e, p-8, rounde, d-xl, shado, w-lg, border, border-gr, a, y-2, 0, 0">";
                  <div, className="flex, item, s-center, m, b-4">";
                    {[...Arr, a, y(testimoni, a, l.rati, n, g)].m, a, p((_, i) => (
                      <Star, ke, y={i} classNa, m, e="w-5 h-5, tex, t-yell, o, w-400, fil, l-curre, n, t  />
                      <Star, ke, y={i} classNa, m, e="w-5 h-5, tex, t-yell, o, w-400, fil, l-curre, n, t" />";
                    ))}
                  </d, i, v>
                  <blockquote, className="te, x, t-gr, a, y-700, m, b-6, itali, c">";
                    "{testimoni, a, l.conte, n, t}"
                  </blockquo, t, e>
                  <d, i, v>
                    <div, className="fo, n, t-semibold, tex, t-gr, a, y-9, 0, 0">{testimoni, a, l.na, m, e}</d, i, v>";
                    <div, className="te, x, t-gr, a, y-600, tex, t-sm">{testimoni, a, l.ro, l, e}</d, i, v>";
                    <div, className="te, x, t-gre, e, n-600, tex, t-sm, fon, t-medi, u, m">{testimoni, a, l.compa, n, y}</d, i, v>";
                  </d, i, v>
                </d, i, v>
              ))}
            </d, i, v>
          </d, i, v>
        </secti, o, n>
        {/* CTA, Sectio, n */}
        <section, className="py-20, b, g-gradie, n, t-to-br, fro, m-gre, e, n-900, vi, a-gre, e, n-800, t, o-bl, u, e-900, tex, t-whi, t, e">
          <div, className="m, a, x-w-7xl, m, x-auto, p, x-4, s, m: px-6 l
  g:px-8, tex, t-cent, e, r">"
            <h2, className="te, x, t-4xl, fon, t-bold, m, b-6">
        <section, className="py-20, b, g-gradie, n, t-to-br, fro, m-gre, e, n-900, vi, a-gre, e, n-800, t, o-bl, u, e-900, tex, t-whi, t, e">";
          <div, className="m, a, x-w-7xl, m, x-auto, p, x-4, s, m: px-6, l, g:px-8, tex, t-cent, e, r">";
            <h2, className="te, x, t-4xl, fon, t-bold, m, b-6">";
              Ready, to, Transform Your, Infrastructur, e?
            </h2>
            <p, className="te, x, t-xl, tex, t-gre, e, n-100, ma, x-w-3xl, m, x-auto, m, b-8">";
              Join, hundreds, of companies, already, using our, Clou, d & DevOps, services, to achieve, unprecedented, scalability and, reliabilit, y.
            </p>
            <div, className="flex, fle, x-co, l, s
  m: fl, e, x-row, ga, p-4, justif, y-cent, e, r">"
            <div, className="flex, fle, x-col, s, m: fl, e, x-row, ga, p-4, justif, y-cent, e, r">";
              <a
  hr, e, f="/conta, c, t"
                classNa, m, e="inli, n, e-flex, item, s-center, p, x-8, p, y-4, b, g-gre, e, n-600, hov, e
  r: bg-gre, e, n-700, tex, t-white, fon, t-semibold, rounde, d-lg, transitio, n-colo, r, s"
              >
                <Phone, className="w-5 h-5, m, r-2  />
                <Phone, className="w-5 h-5, m, r-2" />";
                Schedule, Free, Assessment;
              </a>
              <a
  hr, e, f="/ca, s, e-studi, e, s"
                classNa, m, e="inli, n, e-flex, item, s-center, p, x-8, p, y-4, borde, r-2, borde, r-white, tex, t-white, hove, r: bg-white, hov, e
  r:te, x, t-gre, e, n-900, fon, t-semibold, rounde, d-lg, transitio, n-colo, r, s"
              >
                View, Case, Studies;
                <ArrowRight, className="w-5 h-5, m, l-2  />
                <ArrowRight, className="w-5 h-5, m, l-2" />";
              </a>
            </d, i, v>
          </d, i, v>
        </secti, o, n>
      </ma, i, n>
      <Foot, e, r   />
    < />
  );
};
export default CloudDevOps;