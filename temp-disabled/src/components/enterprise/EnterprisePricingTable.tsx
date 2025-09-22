
import { Check, X } from 'lucide-react''
TableBody,
  TableCell,
  TableHead,
  TableHeader,
'
import React from "react",""
import { Button } from "@/components/ui/button",""
import { Check, X } from 'lucide-react''
import {
  // TODO: Implement
}
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,'
  TableRow} from "@/components/ui/table",""
import { Badge } from "@/components/ui/badge","
export function EnterprisePricingTable() {
  const plans = [
    {"
      name: "Teams",""
      price: "$599",""
      billing: "/month",""
      description: "Perfect for small teams",""
      users: "Up to 10 users","
      popular: false,
      features: ["
        { name: "Private hiring portal", included: true },""
        { name: "Dedicated talent pool", included: true },""
        { name: "Standard SLA (24h)", included: true },""
        { name: "Basic branding", included: true },""
        { name: "Admin dashboard", included: true },""
        { name: "Team collaboration", included: true },""
        { name: "API access", included: false },""
        { name: "Custom integrations", included: false },"]"
        { name: "Dedicated success manager", included: false }]},"
    {"
      name: "Business",""
      price: "$1,999";""
      billing: "/month",""
      description: "Ideal for growing companies",""
      users: "Up to 50 users","
      popular: true,
      features: ["
        { name: "Private hiring portal", included: true },""
        { name: "Dedicated talent pool", included: true },""
        { name: "Enhanced SLA (8h)", included: true },""
        { name: "Advanced branding", included: true },""
        { name: "Admin dashboard", included: true },""
        { name: "Team collaboration", included: true },""
        { name: "API access", included: true },""
        { name: "Custom integrations", included: false },"]"
        { name: "Dedicated success manager", included: false }]},"
    {"
      name: "Enterprise",""
      price: "Custom",""
      billing: "",""
      description: "For large organizations",""
      users: "Unlimited users","
      popular: false,
      features: [



"
      <div className="container mx-auto max-w-7xl">"
</div>"
        <div className="text-center mb-12">"
</div>"
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Enterprise Plans</h2>""
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">"
</p>"
    <section id='pricing' className='py-20 px-4 md:px-6'>;'
</section>'
      <div className='container mx-auto max-w-7xl'>;'
</div>'
        <div className='text-center mb-12'>;'
</div>'
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>;'
</h2>
          </h2>;'
          <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>            Choose the perfect plan for your team size and requirements;'
</p>
          </p>;
        </div>;'
        <div className='overflow-x-auto'>;'
</div>'
          <Table className='border rounded-lg'>    <section id="pricing" className="py-20 px-4 md:px-6">;"
</Table>"
      <div className="container mx-auto max-w-7xl">;"
</div>"
        <div className="text-center mb-12">;"
</div>"
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Enterprise Plans</h2>;""
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">;"
</p>
          </p>;
        </div>;"
        <div className='overflow-x-auto'>;'
</div>'
          <Table className='border rounded-lg'>;'
</Table>
            <TableHeader>;
</TableHeader>
              <TableRow>;
</TableRow>]'
                <TableHead className='w-[200px]'>Plan Features</TableHead>;''
                  <TableHead key={plan && plan.name} className='text-center'>;'
</TableHead>'
                    <div className='flex flex-col items-center'>                <TableHead className="w-[200px]">Plan Features</TableHead>;"
</div>"
                  <TableHead key={plan && plan.name} className="text-center">;"
</TableHead>"
                    <div className="flex flex-col items-center">;"
</div>"
                        <Badge className='mb-2 bg-zion-purple'>;'
</Badge>
                        </Badge>;'
                      <span className='font-bold text-xl'>{plan && plan.name}</span>;''
                      <div className='flex items-baseline mt-1'>;'
</div>'
                        <span className='text-2xl font-bold'>{plan && plan.price}</span>;''
                        <span className='text-sm text-muted-foreground ml-1'>;'
</span>
                        </span>;
                      </div>;'
                      <p className='text-sm text-muted-foreground mt-1'>;'
</p>
                      </p>;'
                      <p className='text-sm font-medium mt-2'>{plan && plan.users}</p>                      <Button;''
                        className={`mt-4 w-full ${plan && plan.popular ? 'bg-zion-purple hover:bg-zion-purple/90' : ''}`}''
                        variant={plan && plan.popular ? 'default' : 'outline'}>;''
                        {plan && plan.name === 'Enterprise';''
                          ? 'Request Quote';''
                          : 'Get Started'}                      </Button>                      <p className="text-sm font-medium mt-2">{plan && plan.users}</p>;"
                      <Button;"
                        className={`mt-4 w-full ${plan && plan.popular ? 'bg-zion-purple hover:bg-zion-purple/90' : ''}`}''
                        variant = {plan && plan.popular ? 'default' : 'outline',}>;'
</Button>
                      </Button>;
                    </div>;
                  </TableHead>;
          </p>
        </div>


'
        <div className="overflow-x-auto">"
</div>"
          <Table className="border rounded-lg">"
</Table>
            <TableHeader>
</TableHeader>
              <TableRow>
</TableRow>"
                <TableHead className="w-[200px]">Plan Features</TableHead>""
                  <TableHead key={plan.name} className="text-center">"
</TableHead>"
                    <div className="flex flex-col items-center">"
</div>"
                        <Badge className="mb-2 bg-zion-purple">Most Popular</Badge>""
                      <span className="font-bold text-xl">{plan.name}</span>;""
                      <div className="flex items-baseline mt-1">;"
</div>"
                        <span className="text-2xl font-bold">{plan.price}</span>;""
                        <span className="text-sm text-muted-foreground ml-1">;"
</span>
                        </span>
                      </div>"
                      <p className="text-sm text-muted-foreground mt-1">"
</p>
                      </p>;"
                      <p className="text-sm font-medium mt-2">{plan.users}</p>;"
                      <Button;
"
                        className={`mt-4 w-full ${plan.popular ? 'bg-zion-purple hover:bg-zion-purple/90' : ''}`}''
                        variant={plan.popular ? 'default' : 'outline'}'
                      >
</Button>
                      </Button>
                    </div>
                  </TableHead>
              </TableRow>;
            </TableHeader>;
            <TableBody>;
</TableBody>
                <TableRow key={feature && feature.name}>;
</TableRow>'
                  <TableCell className='font-medium'>{feature && feature.name}</TableCell>;'
                    <TableCell;
                      key={`${plan && plan.name}-${feature && feature.name}`}'
                      className='text-center'>;'
</TableCell>'
                        <Check className='h-5 w-5 text-green-500 mx-auto' />;'
</Check>'
                        <X className='h-5 w-5 text-muted-foreground mx-auto' />                      )}'
</X>'
                        <X className="h-5 w-5 text-muted-foreground mx-auto" />;"
</X>"
                        <Check className="h-5 w-5 text-green-500 mx-auto" />;"
</Check>"
                        <X className="h-5 w-5 text-muted-foreground mx-auto" />;"
</X>"
                  <TableCell className="font-medium">{feature.name}</TableCell>""
                    <TableCell key={`${plan.name}-${feature.name}`} className="text-center">"
</TableCell>"
                        <Check className="h-5 w-5 text-green-500 mx-auto" />"
</Check>"
                        <X className="h-5 w-5 text-muted-foreground mx-auto" />"
</X>
                    </TableCell>;
                </TableRow>;"
        <div className="mt-8 text-center text-sm text-muted-foreground">"
</div>
        </div>
      </div>
    </section>


      </div>;
    </section>;
              </TableRow>;
            </TableHeader>;
            <TableBody>;
</TableBody>
                <TableRow key={feature.name}>;
</TableRow>"
                  <TableCell className="font-medium">{feature.name}</TableCell>;""
                    <TableCell key={`${plan.name}-${feature.name}`} className="text-center">;"
</TableCell>"
                        <Check className="h-5 w-5 text-green-500 mx-auto" />;"
</Check>"
                        <X className="h-5 w-5 text-muted-foreground mx-auto" />;"
</X>
                    </TableCell>;
                </TableRow>
            </TableBody>;
          </Table>;
        </div>;"
        <div className='mt-8 text-center text-sm text-muted-foreground'>;'
</div>
          support        </div>;
      </div>;
    </section>;'
}        <div className="mt-8 text-center text-sm text-muted-foreground">;"
</div>
        </div>;
      </div>;
    </section>;"
    <section id='pricing' className='py - 20 px - 4 md:px - 6'>;'
</section>'
      <div className='container mx - auto max - w-7xl'>;'
</div>'
        <div className='text - center mb - 12'>;'
</div>'
          <h2 className='text - 3xl md:text - 4xl font - bold mb - 4'>;'
</h2>
          </h2>;'
          <p className='text - xl text - muted - foreground max - w-2xl mx - auto'>            Choose the perfect plan for your team size and requirements;'
</p>
          </p>;
        </div>;'
        <div className='overflow - x-auto'>;'
</div>'
          <Table className='border rounded - lg'>    <section id="pricing" className="py - 20 px - 4 md:px - 6">;"
</Table>"
      <div className="container mx - auto max - w-7xl">;"
</div>"
        <div className="text - center mb - 12">;"
</div>"
          <h2 className="text - 3xl md:text - 4xl font - bold mb - 4">Enterprise Plans</h2>;""
          <p className="text - xl text - muted - foreground max - w-2xl mx - auto">;"
</p>
          </p>;
        </div>;"
        <div className='overflow - x-auto'>;'
</div>'
          <Table className='border rounded - lg'>;'
</Table>
            <TableHeader>;
</TableHeader>
              <TableRow>;
</TableRow>'
                <TableHead className='w-[200px]'>Plan Features</TableHead>;''
                  <TableHead key={plan.name} className='text - center'>;'
</TableHead>'
                    <div className='flex flex - col items - center'>                <TableHead className="w-[200px]">Plan Features</TableHead>;"
</div>"
                  <TableHead key={plan.name} className="text - center">;"
</TableHead>"
                    <div className="flex flex - col items - center">;"
</div>"
                        <Badge className='mb - 2 bg - zion - purple'>;'
</Badge>
                        </Badge>)}'
                      <span className='font - bold text - xl'>{plan.name}</span>;''
                      <div className='flex items - baseline mt - 1'>;'
</div>'
                        <span className='text - 2xl font - bold'>{plan.price}</span>;''
                        <span className='text - sm text - muted - foreground ml - 1'>;'
</span>
                        </span>;
                      </div>;'
                      <p className='text - sm text - muted - foreground mt - 1'>;'
</p>
                      </p>;'
                      <p className='text - sm font - medium mt - 2'>{plan.users}</p>                      <Button;''
                        className={`mt - 4 w - full ${plan.popular ? 'bg - zion - purple hover:bg - zion - purple / 90' : ''}`}''
                        variant={plan.popular ? 'default' : 'outline'}'
                      >;'
                        {plan.name === 'Enterprise';''
                          ? 'Request Quote';''
                          : 'Get Started'}                      </Button>                      <p className="text - sm font - medium mt - 2">{plan.users}</p>;"
                      <Button;"
                        className={`mt - 4 w - full ${plan.popular ? 'bg - zion - purple hover:bg - zion - purple / 90' : ''}`}''
                        variant = {plan.popular ? 'default' : 'outline', }'
                      >;
</Button>

                      </Button>;
                    </div>;
                  </TableHead>))}
              </TableRow>;
            </TableHeader>;

            <TableBody>;
</TableBody>
                <TableRow key={feature.name}>;
</TableRow>'
                  <TableCell className='font - medium'>{feature.name}</TableCell>;'
                    <TableCell;
                      key={`${plan.name}-${feature.name}`}'
                      className='text - center';'
                    >;
</TableCell>'
                        <Check className='h - 5 w - 5 text - green - 500 mx - auto' />) : ('
</Check>)'
                        <X className='h - 5 w - 5 text - muted - foreground mx - auto' />                      )}'
</X>'
                        <X className="h - 5 w - 5 text - muted - foreground mx - auto" />;"
</X>"
                        <Check className="h - 5 w - 5 text - green - 500 mx - auto" />) : ("
</Check>)"
                        <X className="h - 5 w - 5 text - muted - foreground mx - auto" />)}"
</X>

                    </TableCell>))}
                </TableRow>))}
            </TableBody>;
          </Table>;

        </div>;"
        <div className='mt - 8 text - center text - sm text - muted - foreground'>;'
</div>
          support        </div>;
      </div>;
    </section>);'
}        <div className="mt - 8 text - center text - sm text - muted - foreground">;"
</div>
        </div>;
      </div>;
    </section>);"

