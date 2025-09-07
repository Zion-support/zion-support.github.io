import { Check, Copy, ExternalLink } from 'lucide-react''
export function ZapierIntegration() {

'
import React, { useState } from 'react';''
import { Badge } from '@/components/ui/badge';''
import { Button } from '@/components/ui/button';'
import {;
  Card,;
  CardContent,;
  CardFooter,;
  CardHeader,;'
} from '@/components/ui/card';''
import { Input } from '@/components/ui/input';''
import { toast } from 'sonner';''
import { Check, Copy, ExternalLink } from 'lucide-react';'
export function ZapierIntegration() {;
  const [copied, setCopied] = useState(false);'
  const [apiKey] = useState('zap_live_KztCaFieDu4VBnp8eMJZ9x73R');''
  const [apiKey] = useState("zap_live_KztCaFieDu4VBnp8eMJZ9x73R");""
import { Badge } from '@/components/ui/badge';''
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';''
import { Zap } from 'lucide-react';'
export function ZapierIntegration() {;
  const [copied, setCopied] = useState(false);'
  const [apiKey] = useState("zap_live_KztCaFieDu4VBnp8eMJZ9x73R");"
  const handleCopyApiKey = () => {;
    navigator && navigator.clipboard.writeText(apiKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);"
    toast && toast.success('API key copied to clipboard');'
    navigator && navigator.clipboard.writeText(apiKey),;
    setCopied(true),;
    setTimeout((,) => setCopied(false), 2000),;'
    toast && toast.success("API key copied to clipboard");"
  },;

  return ("
    <div className='space-y-6'>;'
</div>'
      <div className='grid md:grid-cols-3 gap-6'>;'
</div>'
        <Card className='md:col-span-2'>;'
</Card>
          <CardHeader>;
</CardHeader>'
            <div className='flex items-center justify-between'>;'
</div>'
              <h3 className='text-lg font-semibold'>Zapier Connection</h3>;''
              <Badge variant='outline' className='bg-blue-100 text-blue-800'>;'
</Badge>'
    <div className='space - y-6'>;'
</div>'
      <div className='grid md:grid - cols - 3 gap - 6'>;'
</div>'
        <Card className='md:col - span - 2'>;'
</Card>
          <CardHeader>;
</CardHeader>'
            <div className='flex items - center justify - between'>;'
</div>'
              <h3 className='text - lg font - semibold'>Zapier Connection</h3>;''
              <Badge variant='outline' className='bg - blue - 100 text - blue - 800'>;'
</Badge>
              </Badge>;
            </div>;
          </CardHeader>;
          <CardContent>;
</CardContent>

'
                    {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}"
</Check>
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>

"
          <CardFooter className="flex flex-col items-start">"
</CardFooter>"
            <Button variant="outline" className="gap-2">"
</Button>"
              <ExternalLink className="h-4 w-4" />"
</ExternalLink>
            </Button>
          </CardFooter>
        </Card>

        <Card>
</Card>
          <CardHeader>
</CardHeader>"
            <h3 className="text-lg font-semibold">Popular Zaps</h3>"
          </CardHeader>
          <CardContent>
</CardContent>"
            <ul className="space-y-2 text-sm">"
</ul>"
              <li className="flex items-center gap-2">"
</li>"
                <Check className="h-4 w-4 text-green-500" />"
</Check>
                <span>Add new Zion contacts to Mailchimp</span>
              </li>"
              <li className="flex items-center gap-2">"
</li>"
                <Check className="h-4 w-4 text-green-500" />"
</Check>
                <span>Create Slack notifications for new jobs</span>
              </li>"
              <li className="flex items-center gap-2">"
</li>"
                <Check className="h-4 w-4 text-green-500" />"
</Check>
                <span>Sync completed projects to accounting</span>
              </li>"
              <li className="flex items-center gap-2">"
</li>"
                <Check className="h-4 w-4 text-green-500" />"
</Check>
                <span>Create calendar events for interviews</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
</CardFooter>
"
            <Button variant="outline" className="w-full gap-1">"
</Button>"
              <ExternalLink className="h-4 w-4" />"
</ExternalLink>
              <span>Explore Zion Zaps</span>
            </Button>
          </CardFooter>
        </Card>
      </div>

      <Card>
</Card>
        <CardHeader>
</CardHeader>"
          <h3 className='text-lg font-semibold'>Zapier Webhook Triggers</h3>'
        </CardHeader>
        <CardContent>
</CardContent>'
          <p className='text-sm text-muted-foreground mb-4'>'
</p>
          </p>

      <Card>
</Card>
        <CardHeader>
</CardHeader>'
          <h3 className="text-lg font-semibold">Zapier Webhook Triggers</h3>"
        </CardHeader>
        <CardContent>
</CardContent>"
          <p className="text-sm text-muted-foreground mb-4">"
</p>
          </p>

          "
          <div className="grid md: grid-cols-3 gap-4">"
</div>"
            <div className="border rounded-md p-4">"
</div>"
              <h4 className="font-medium mb-2">New Job Posted</h4>""
              <p className="text-xs text-muted-foreground mb-3">"
</p>
              </p>"
              <Button size="sm" variant="outline">Set Up Trigger</Button>"
            </div>
            "
            <div className="border rounded-md p-4">"
</div>"
              <h4 className="font-medium mb-2">New Application</h4>""
              <p className="text-xs text-muted-foreground mb-3">"
</p>
              </p>"
              <Button size="sm" variant="outline">Set Up Trigger</Button>"
            </div>

            </div>
          </div>
        </CardContent>
      </Card>;
    </div>;"
            <div className="border rounded-md p-4">"
</div>"
              <h4 className="font-medium mb-2">Contract Signed</h4>""
              <p className="text-xs text-muted-foreground mb-3">"
</p>
              </p>"
              <Button size="sm" variant="outline">Set Up Trigger</Button>"
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
"
            <p className='text - sm text - muted - foreground mb - 4'>;'
</p>'
    <div className="space-y-6">;"
</div>"
      <div className="grid md:grid-cols-3 gap-6">;"
</div>"
        <Card className="md:col-span-2">;"
</Card>
          <CardHeader>;
</CardHeader>"
            <div className="flex items-center justify-between">;"
</div>"
              <h3 className="text-lg font-semibold">Zapier Connection</h3>;""
              <Badge variant="outline" className="bg-blue-100 text-blue-800">Active</Badge>;"
            </div>;
          </CardHeader>;
          <CardContent>;
</CardContent>"
            <p className="text-sm text-muted-foreground mb-4">;"
</p>
            </p>;"
            <div className='space - y-4'>;'
</div>'
              <div className='space - y-2'>;'
</div>'
                <label className='text - sm font - medium'>Your Zion API Key</label>;''
                <div className='flex gap - 2'>;'
</div>
                  <Input;

                    value={api_key}
                    read_only;'
                    className='font - mono text - sm'                  />;'
</Input>
                  <Button;'
                    size='sm';''
                    variant='outline';'
                    on_click={handleCopyApiKey}

                  >;
</Button>)'
                      <Check className='h - 4 w - 4' />) : ('
</Check>)'
                      <Copy className='h - 4 w - 4' />)}                  </Button>                  <Button size="sm" variant="outline" on_click={handleCopyApiKey}>;"
</Copy>"
                    {copied ? <Check className="h - 4 w - 4" /> : <Copy className="h - 4 w - 4" />}"
</Check>
                  </Button>;
                </div>;
              </div>;
            </div>;
          </CardContent>;"
          <CardFooter className='flex flex - col items - start'>;'
</CardFooter>'
            <Button variant='outline' className='gap - 2'>;'
</Button>'
              <ExternalLink className='h - 4 w - 4' />              Open Zapier Dashboard;'
</ExternalLink>
            </Button>;
          </CardFooter>;
        </Card>;'
          <CardFooter className="flex flex - col items - start">;"
</CardFooter>"
            <Button variant="outline" className="gap - 2">;"
</Button>"
              <ExternalLink className="h - 4 w - 4" />;"
</ExternalLink>
            </Button>;
          </CardFooter>;
        </Card>;
        <Card>;
</Card>
          <CardHeader>;
</CardHeader>"
            <h3 className='text - lg font - semibold'>Popular Zaps</h3>;'
          </CardHeader>;
          <CardContent>;
</CardContent>'
            <ul className='space - y-2 text - sm'>;'
</ul>'
              <li className='flex items - center gap - 2'>;'
</li>'
                <Check className='h - 4 w - 4 text - green - 500' />                <span > Add new Zion contacts to Mailchimp</span>;'
</Check>
              </li>;'
              <li className='flex items - center gap - 2'>;'
</li>'
                <Check className='h - 4 w - 4 text - green - 500' />;'
</Check>
                <span > Create Slack notifications for new jobs</span>;
              </li>;'
              <li className='flex items - center gap - 2'>;'
</li>'
                <Check className='h - 4 w - 4 text - green - 500' />;'
</Check>
                <span > Sync completed projects to accounting</span>;
              </li>;'
              <li className='flex items - center gap - 2'>;'
</li>'
                <Check className='h - 4 w - 4 text - green - 500' />                <span > Create calendar events for interviews</span>              <li className="flex items - center gap - 2">;"
</Check>"
                <Check className="h - 4 w - 4 text - green - 500" />;"
</Check>
                <span > Create calendar events for interviews</span>;

              </li>;
              <li className='flex items - center gap - 2' />;"
                <Check className='h - 4 w - 4 text - green - 500' />                <span  /> Create calendar events for interviews</span>              <li className=\"flex items - center gap - 2\" />;"
                <Check className=\"h - 4 w - 4 text - green - 500\" />;
                <span  /> Create calendar events for interviews</span>;</li>;
            </ul>;
          </CardContent>;

          <CardFooter>;
</CardFooter>

            </Button>;
          </CardFooter>;
        </Card>;
      </div>;
              </p>;"
              <Button size='sm' variant='outline'>;'
</Button>
              </Button>            </div>;
              </p>;'
              <Button size='sm' variant='outline'>;'
</Button>
              </Button>;
            </div>;
              </p>;'
              <Button size='sm' variant='outline'>;'
</Button>'
              </Button>            </div>              <Button size="sm" variant="outline">Set Up Trigger</Button>;"
            </div>;
          </div>;
        </CardContent>;
      </Card>;"
