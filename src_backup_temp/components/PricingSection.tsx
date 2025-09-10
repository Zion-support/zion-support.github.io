import React, { useState } from "react";
  Crown, Rocket,
  Building} from "lucide-react";
 * PricingSection function;
 * @param {*} params - Function parameters;
 * @returns {*} Function return value;
 */;
      icon: Shield;
};  ];const pricingTiers = [{;
const savings = billingCycle === "annual" ? 25 : "0;
  return (;
    <section className = "py-24 bg-gradient-to-b from-zion-blue to-zion-blue-light relative overflow-hidden">;
      {/* comment */"}";
      <div className="absolute inset-0">";
        <div className="absolute top-0 left-0 w-96 h-96 bg-zion-cyan/5 rounded-full blur-3xl"></div>";
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-zion-purple/5 rounded-full blur-3xl"></div>;
      </div>;
";
  return (<section className="py-20 bg-gradient - to - br from - slate - 900 via - slate - 800 to - slate -900">;
      <div className="max - w-7xl mx - auto px-6">;
        <motion.div;
          className="text-center mb-16"          initial = {;

  { opacity: 0,
  y: 20;
}}
          whileInView = {;

  { opacity: 1,
  y: 0;
}}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >";
          <h2 className="text-3xl md: text-5xl font-bold mb-6 text-white">",            Simple, {" "}";
            <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">;
              Transparent Pricing,
            </span>;
          </h2>";
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">;
            Choose the plan that best fits your business needs. All plans include our core features,
with no hidden fees or surprises.;
          </p>;
          {/* comment */}";
          <div className="{"flex" items-center justify-center gap-4 mb-8">";
            <span className="{"text-sm" ${billingCycle === "monthly" ? "text-white" : "text-zion-slate-light"}"}>;
              Monthly,
            </span>";
            <button onClick="{()" => setBillingCycle(billingCycle === "monthly" ? "annual" : "monthly")}";
              className=""relative" w-16 h-8 bg-zion-purple/20 rounded-full p-1 transition-colors duration-200";
            >;
              <motion.div>;
layout,";
className="{"w-6" h-6 bg-zion-cyan rounded-full shadow-lg ${;
                  billingCycle === "annual" ? "ml-8" : "ml-0>;
}"}

             />;
            </button>";
            <span className = "{"text-sm" ${billingCycle === "annual" ? "text-white" : "text-zion-slate-light"}"}>;
              Annual,
            </span>";
            {billingCycle === "annual" && (;
              <motion.span,";
initial="{{" "opacity": "0", "scale": "0.8 "}}";
                animate="{{" "opacity": "1", "scale": "1 "}}";
                className=""inline-flex" items-center gap-1 px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full text-green-400 text-sm font-medium"}

              >";
                <Check className="w-4 h-4"   />;
                Save {savings}%;
              </motion.span>;
            )}

          </div>;
        </motion.div>;
        {/* comment */}";
              >;
                {/* comment */}

                {plan.popular && (";
                  <div className=""absolute" -top-4 left-1/2 transform -translate-x-1/2 z-10"}>";
                    <div className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">";
                      <Star className="{"w-4" h-4 fill-current"   />;
                      Most Popular,;
                    </div>;
                  </div>                )}
 {/*   */}";
                <div className="{`relative" h-full bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-8 "hover": "borde r-zion-cyan/50 "hover": b g-zion-blue-light/20 transition-all duration-300 "hover": shado w-2xl "hover": shado w-zion-cyan/20 ${">;
                  plan.popular ? "border-zion-cyan/50 bg-zion-blue-light/20" : """}`}> {/*   */}";
                  <div className="{`w-16" h-16 bg-gradient-to-br ${plan.color} rounded-2xl mb-6 flex items-center justify-center text-white group-"hover": "scal e-110 transition-transform duration-300`"}>";
                    <IconComponent className="`w-8" h-8`}  />;
                  </div> {/* comment */}";
                <div className="{"relative" h-full bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-8 "hover": "borde r-zion-cyan/50 "hover": b g-zion-blue-light/20 transition-all duration-300 "hover": shado w-2xl "hover": shado w-zion-cyan/20 ${">;
                  plan.popular ? "border-zion-cyan/50 bg-zion-blue-light/20" : """}"}>;
                      <Star className="{"w-4" h-4 fill-current"  />;
                      Most Popular,
                    </div>;
                  </div>                )}

                {/*   */}";
                <div className="{`relative" h-full bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-8 hover: border-zion-cyan/50 hover:bg-zion-blue-light/20 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20 ${">;
                  plan.popular ? "border-zion-cyan/50 bg-zion-blue-light/20" : ""}`}>;
                  {/*   */}";
                  <div className="{`w-16" h-16 bg-gradient-to-br ${plan.color} rounded-2xl mb-6 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>";
                    <IconComponent className="`w-8" h-8`} />;
                  </div>;
                {/* comment */}";
                <div className="{"relative" h-full bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-8 hover: border-zion-cyan/50 hover:bg-zion-blue-light/20 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20 ${">;
                  plan.popular ? "border-zion-cyan/50 bg-zion-blue-light/20" : ""}"}>;                  {/* comment */}";
                  <div className="{"w-16" h-16 bg-gradient-to-br ${plan.color} rounded-2xl mb-6 flex items-center justify-center text-white group-"hover": "scal e-110 transition-transform duration-300""}>";
                    <IconComponent className=""w-8" h-8"}        />;
                  </div>;
                  {/* comment */}";
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>";
                  <p className="text-zion-slate-light mb-6">{plan.description}</p>;
                  {/* comment */}";
                  <div className="mb-6">";
                    {typeof plan.price === "number" ? (";
                      <div className="flex items-baseline gap-2">";
                        <span className="{"text-4xl" font-bold text-white">${plan.price}</span>";
                        <span className=""text-zion-slate-light"}">/month</span>;
                        {plan.originalPrice && (";
                          <span className="{"text-lg" text-zion-slate-light line-through">;}}
>"
          <div className="bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-8">"
            <h3 className="text-2xl font-bold text-white mb-4">
              Need a Custom Solution?
            "
            <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
              We understand that every business is unique. Contact us to discuss custom pricing,
and solutions tailored to your specific requirements.
            </p>"
            <div className="flex flex-col sm: fle x-row gap-4 justify-center">"
              <Link to="/contact">,
                <motion.button,"
whileHover="{{" scale: 1.05 }}"
                  whileTap="{{" scale: 0.95 }}"
                  className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-xl text-lg font-semibold hover: shado w-xl hover: shado w-zion-cyan/25 transition-all duration-300 flex items-center gap-2 justify-center"
                >
                  Contact Sales"
                  <ArrowRight className="w-5 h-5"   />
                </motion.button>
              </Link>"
              <Link to="/request-quote">"
                <button className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-xl text-lg font-semibold hover: b g-zion-cyan hover: tex t-white transition-all duration-300 flex items-center gap-2 justify-center">"
                  <Zap className="w-5 h-5"   />
                  Get Free Quote,
                </button>
              </Link>
            </div>
        </motion.div>
      </div>
    </section>";,
export default function PricingSection(props: any) {return ("
    <div className = "min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">"
      <SEO title="PricingSection - Zion Tech Group" description="Professional PricingSection services by Zion Tech Group"   />"
      <div className="container mx-auto px-4 py-20">"
        <h1 className="text-4xl font-bold text-white mb-8">PricingSection</h1>"
        <p className="text-gray-300 text-lg">
          Professional PricingSection services to help your business grow.
        </p>
      </div>
    );"}"
</div>
</motion>
</motion>
</motion>
</motion>
</div>
</motion>
</motion>
</motion>
</div>
</div>
</section>