
=======
import { useCurrency } from '@/hooks/useCurrency';

export default function ListingDetail() {;
  // useParams may be untyped in this environment, so avoid passing a;
  // type argument and cast the result instead to prevent TS2347 errors.;

  const router = useRouter();
  const id = router && router.query.id as string;  const [selectedImageIndex, setSelectedImageIndex] = useState(0);  const [isLoading, setIsLoading] = useState(false);


  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const { user } = useAuth();
  const { formatPrice } = useCurrency();
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> a59e23947e86217473fca4eca4cd277149ff0168

import { useCurrency } from '@/hooks/useCurrency';
export default function ListingDetail() {
  // useParams may be untyped in this environment, so avoid passing a
  // type argument and cast the result instead to prevent TS2347 errors.



  // Find the listing from our shared data source - now also checking equipment listings
  const listing = MARKETPLACE_LISTINGS.find(item => item.id === id);

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-zion-blue-light/20">
                      <span className="text-zion-slate-light">No image available</span>
                    </div>
                  )}
                </div>
=======
                {listing.images && listing.images.length > 1 && (
                  <div className='flex p-4 gap-2 overflow-x-auto'>
                
                {listing.images && listing.images.length > 1 && (
                  <div className="flex p-4 gap-2 overflow-x-auto">

                    {listing.images.map((image, index) => (
                      <div
                        key={index}
                        onClick={() => setSelectedImageIndex(index)}

                        className={cn(
                          'w-20 h-20 flex-shrink-0 cursor-pointer rounded overflow-hidden border-2'
                          'w-20 h-20 flex-shrink-0 cursor-pointer rounded overflow-hidden border-2',
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
                        <h4 className="font-medium text-white">Enterprise Security</h4>
                        <p className="text-sm text-zion-slate-light">Built-in data protection and encryption</p>
                      </div>
                    </div>
                  </div>
                </div>


                <div className="mt-8">;
                  <h3 className="text-xl font-bold text-white mb-4">Key Features</h3>;
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
                    <div className="flex items-start gap-3">;
                      <div className="p-2 rounded-full bg-zion-purple/20">;
                        <Brain className="h-5 w-5 text-zion-purple" />;
                      </div>;
                      <div>;
                        <h4 className="font-medium text-white">Advanced AI</h4>;
                        <p className="text-sm text-zion-slate-light">State-of-the-art machine learning techniques</p>;
                      </div>;
                    </div>;
                    <div className="flex items-start gap-3">;
                      <div className="p-2 rounded-full bg-zion-cyan/20">;
                        <Shield className="h-5 w-5 text-zion-cyan" />;
                      </div>;
                      <div>;
                        <h4 className="font-medium text-white">Enterprise Security</h4>;
                        <p className="text-sm text-zion-slate-light">Built-in data protection and encryption</p>;

                <div className="mt - 8">;
                  <h3 className="text - xl font - bold text - white mb - 4">Key Features</h3>;
                  <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 4">;
                    <div className="flex items - start gap - 3">;
                      <div className="p - 2 rounded - full bg - zion - purple / 20">;
                        <Brain className="h - 5 w - 5 text - zion - purple" />;
                      </div>;
                      <div>;
                        <h4 className="font - medium text - white">Advanced AI</h4>;
                        <p className="text - sm text - zion - slate - light">State - of - the - art machine learning techniques</p>;
                      </div>;
                    </div>;
                    <div className="flex items - start gap - 3">;
                      <div className="p - 2 rounded - full bg - zion - cyan / 20">;
                        <Shield className="h - 5 w - 5 text - zion - cyan" />;
                      </div>;
                      <div>;
                        <h4 className="font - medium text - white">Enterprise Security</h4>;
                        <p className="text - sm text - zion - slate - light">Built - in data protection and encryption</p>;

                      </div>;
                    </div>;
                  </div>;
                </div>;


                {/* Tags */}
                <div className='mt-8'>
                  <h3 className='text-xl font-bold text-white mb-4'>Tags</h3>
                  <div className='flex flex-wrap gap-2'>
                    {listing.tags.map((tag, i) => (
                      <Badge
                        key={i}
                        variant='outline'
                        className='border-zion-slate-dark text-zion-slate-light py-1 px-3'
                      >                        {tag}                      <Badge key={i} variant="outline" className="border-zion-slate-dark text-zion-slate-light py-1 px-3">
                {/* Tags */}
                <div className="mt-8">;
                  <h3 className="text-xl font-bold text-white mb-4">Tags</h3>;
                  <div className="flex flex-wrap gap-2">;
                    {listing && listing.tags.map((tag, i) => (;
                      <Badge key={i} variant="outline" className="border-zion-slate-dark text-zion-slate-light py-1 px-3">;



                
                {/* Tags */}
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-white mb-4">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {listing.tags.map((tag, i) => (
                      <Badge key={i} variant="outline" className="border-zion-slate-dark text-zion-slate-light py-1 px-3">
                        {tag}
                      </Badge>;
                    ))}

                {/* Tags */}
                <div className='mt - 8'>;
                  <h3 className='text - xl font - bold text - white mb - 4'>Tags</h3>;
                  <div className='flex flex - wrap gap - 2'>;
                    {listing.tags.map ((tag, i) => (
                      <Badge;
                        key={i}
                        variant='outline';
                        className='border - zion - slate - dark text - zion - slate - light py - 1 px - 3';
                      >                        {tag}                      <Badge key={i} variant="outline" className="border - zion - slate - dark text - zion - slate - light py - 1 px - 3">;
                {/* Tags */}
                <div className="mt - 8">;
                  <h3 className="text - xl font - bold text - white mb - 4">Tags</h3>;
                  <div className="flex flex - wrap gap - 2">;
                    {listing.tags.map ((tag, i) => (
                      <Badge key={i} variant="outline" className="border - zion - slate - dark text - zion - slate - light py - 1 px - 3">;
                        {tag}
                      </Badge>))}

                  </div>;
                </div>;
              </div>;
            </div>;

                </div>;

                <h1 className='text-2xl font-bold text-white mb-4'>;
                  {listing && listing.title}
                </h1>;

                  <div className='flex items-center gap-2 mb-6'>;
                    <div className='flex items-center'>;
                      {[...Array(5)].map((_, i) => (;
            
            {/* Right Column - Details */}
            <div className="lg:col-span-1">
              <div className="bg-zion-blue-dark rounded-lg p-6 border border-zion-blue-light sticky top-6">
                <div className="mb-2">
                  <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan hover:bg-zion-purple/30">
            {/* Right Column - Details */}
            <div className='lg:col - span - 1'>;
              <div className='bg - zion - blue - dark rounded - lg p - 6 border border - zion - blue - light sticky top - 6'>;
                <div className='mb - 2'>;
                  <Badge;
                    variant='secondary';
                    className='bg - zion - purple / 20 text - zion - cyan hover:bg - zion - purple / 30';
                  >;
                    {listing.category}
                  </Badge>;
                  {listing.featured && (
                    <Badge className='ml - 2 bg - zion - cyan / 20 text - zion - cyan'>                      Featured;
                    </Badge>)}
                </div>            {/* Right Column - Details */}
            <div className="lg:col - span - 1">;
              <div className="bg - zion - blue - dark rounded - lg p - 6 border border - zion - blue - light sticky top - 6">;
                <div className="mb - 2">;
                  <Badge variant="secondary" className="bg - zion - purple / 20 text - zion - cyan hover:bg - zion - purple / 30">;

                    {listing.category}
                  </Badge>;
                  {listing.featured && (

            <div className="lg:col-span-1">
              <div className="bg-zion-blue-dark rounded-lg p-6 border border-zion-blue-light sticky top-6">
                <div className="mb-2">
                  <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan hover:bg-zion-purple/30">
                    {listing.category}
                  </Badge>
                  {listing.featured && (
>>>>>>> a59e23947e86217473fca4eca4cd277149ff0168
                    <Badge className="ml-2 bg-zion-cyan/20 text-zion-cyan">
                      Featured
                    </Badge>
                  )}
                </div>

=======
                
                <h1 className="text-2xl font-bold text-white mb-4">{listing.title}</h1>
                
                {listing.rating && (
                  <div className="flex items-center gap-2 mb-6">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={cn(
                            'h-5 w-5'
                            'h-5 w-5',
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330



>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

                    </span>
                  </div>
                )}
                {/* Price */}
>>>>>>> a59e23947e86217473fca4eca4cd277149ff0168
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                {/* Action Buttons */}
                <div className="space-y-3 mb-8">
                  {listing.price !== null ? (
                    <PaymentButton
>>>>>>> a59e23947e86217473fca4eca4cd277149ff0168
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
                <div className="space-y-3 mb-8">;
                  {listing && listing.price !== null ? (;
                    <PaymentButton
                      amount={listing.price}
                      serviceId={listing.id}
                      providerId={listing.author.id}
                      buttonText='Buy Now'
                      className='w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white py-6'
                      amount = {listing.price,}
                      serviceId = {listing.id,}
                      providerId = {listing.author.id,}
                      buttonText="Buy Now"
                      className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white py-6"
                      onPaymentInitiated={(,) => {
                        toast({
                          title: 'Payment Processing',
                          description: 'Redirecting to secure checkout...',
                        });
                      }}
                    />
                  ) : (
                    <Button
                      onClick={handleContact}
                      disabled={isLoading}
                      className='w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white py-6'                    >
                      {isLoading ? 'Processing...' : 'Request Quote'}
                    </Button>
                  )}

                  <Button
                    variant='outline'
                    onClick={handleContact}
                    disabled={isLoading}
                    className='w-full border-zion-purple text-zion-cyan hover:bg-zion-purple/10'                  >
                    <MessageSquare className='h-4 w-4 mr-2' />
                    Contact Publisher
                  </Button>
                </div>
                      buttonText="Buy Now"
                      className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white py-6"
                      onPaymentInitiated={() => {
                        toast({
                          title: "Payment Processing",
                          description: "Redirecting to secure checkout..."
                        })
                <div className="space-y-3 mb-8">;
                  {listing.price !== null ? (;
                    <PaymentButton;
                      amount={listing.price}
                      serviceId={listing.id}
                      providerId={listing.author.id}
                      buttonText='Buy Now'
                      className='w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white py-6'
                      amount = {listing.price,}
                      serviceId = {listing.id,}
                      providerId = {listing.author.id,}
                      buttonText="Buy Now"
                      className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white py-6"

                      onPaymentInitiated={(,) => {
                        toast({
                          title: 'Payment Processing'
                          description: 'Redirecting to secure checkout...'

                      onPaymentInitiated={(,) => {;
                        toast({;
                          title: 'Payment Processing',;
                          description: 'Redirecting to secure checkout...',;

                        });
                      }}
                            target.src = "https: //ui-avatars.com/api/?name=" + encodeURIComponent(listing.author.name)
                          }}
                        />
                      </div>
                    ) : (
<<<<<<< HEAD
=======
                      <div className='h-12 w-12 rounded-full bg-zion-purple/20 flex items-center justify-center'>
                        <span className='text-lg font-medium text-zion-purple'>
                          {listing.author.name.charAt(0)}
                        </span>
                      </div>
                    )}
                    <div>
                      <p className='font-medium text-white'>
                        {listing.author.name}
                      </p>
                      <p className='text-xs text-zion-slate-light'>
                        Member since 2022
                      </p>
                    </div>
                  </div>
                </div>
                {/* Additional Info */}
                <div className='border-t border-zion-blue-light mt-6 pt-6'>
                  <div className='flex justify-between mb-2'>
                    <span className='text-zion-slate-light'>Listed on</span>
                    <span className='text-white'>
                      {new Date(listing.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  <div className='flex justify-between mb-2'>
                    <span className='text-zion-slate-light'>ID</span>
                    <span className='text-white'>{listing.id}</span>                  </div>                      </div>
                    )}
                    <div>
                      <div className="h-12 w-12 rounded-full bg-zion-purple/20 flex items-center justify-center">
                        <span className="text-lg font-medium text-zion-purple">{listing.author.name.charAt(0)}</span>
                      </div>
                    )}

                    <div>


                      <p className="font-medium text-white">{listing.author.name}</p>
                      <p className="text-xs text-zion-slate-light">Member since 2022</p>
                    </div>
                  </div>
                </div>
                


                {/* Additional Info */}

                <div className="border-t border-zion-blue-light mt-6 pt-6">
                  <div className="flex justify-between mb-2">
                    <span className="text-zion-slate-light">Listed on</span>
                    <span className="text-white">{new Date(listing.createdAt).toLocaleDateString()}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-zion-slate-light">ID</span>
                    <span className="text-white">{listing.id}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ChatWidget
        roomId = {listing.id,}
        recipientId = {listing.author.id,}
        isOpen = {isChatOpen,}
        onClose = {() => setIsChatOpen(false),}
      />
      {/* Contact Dialog */}
      <Dialog open={isContactDialogOpen} onOpenChange={setIsContactDialogOpen}>
        <DialogContent className='bg-zion-blue-dark border border-zion-blue-light text-white sm:max-w-md'>
                      className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white py-6";
                    >;
                      {isLoading ? "Processing..." : "Request Quote"}
                    </Button>;
                  )}
;
                  <Button;
                    variant="outline";
                    onClick={handleContact}
                    disabled={isLoading}
                    className="w-full border-zion-purple text-zion-cyan hover:bg-zion-purple/10";
                  >;
                    <MessageSquare className="h-4 w-4 mr-2" />;
                    Contact Publisher;
                  </Button>;
                </div>;
                {/* Publisher Info */}
                <div className="border-t border-zion-blue-light pt-6">;
                  <h3 className="text-lg font-bold text-white mb-3">Publisher</h3>;
                  <div className="flex items-center gap-3">;
                    {listing.author.avatarUrl ? (;
                      <div className="relative h-12 w-12 rounded-full overflow-hidden">;
                        <ImageWithRetry;
                          src={listing.author.avatarUrl}
                          alt={listing.author.name}
                          className="object-cover";
                          onError={(e) => {;
                            const target = e.target as HTMLImageElement;
                            target.src = "https: //ui-avatars.com/api/?name=" + encodeURIComponent(listing.author.name);
                          }}
                        />;
                      </div>;
                    ) : (;
                      <div className="h-12 w-12 rounded-full bg-zion-purple/20 flex items-center justify-center">;
                        <span className="text-lg font-medium text-zion-purple">{listing.author.name.charAt(0)}</span>;
                      </div>;
                    )}
                    <div>;
                      <p className="font-medium text-white">{listing.author.name}</p>;
                      <p className="text-xs text-zion-slate-light">Member since 2022</p>;
                    </div>;
                  </div>;
                </div>;
                {/* Additional Info */}
                <div className="border-t border-zion-blue-light mt-6 pt-6">;
                  <div className="flex justify-between mb-2">;
                    <span className="text-zion-slate-light">Listed on</span>;
                    <span className="text-white">{new Date(listing && listing.createdAt).toLocaleDateString()}</span>;
                  </div>;
                  <div className="flex justify-between mb-2">;
                    <span className="text-zion-slate-light">ID</span>;
                    <span className="text-white">{listing && listing.id}</span>;
                      service_id={listing.id}
                      provider_id={listing.author.id}
                      button_text='Buy Now';
                      className='w - full bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple text - white py - 6';
                      amount = {listing.price, }
                      service_id = {listing.id, }
                      provider_id = {listing.author.id, }
                      button_text="Buy Now";
                      className="w - full bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple text - white py - 6";
                      onPaymentInitiated={(, ) => {
                        toast ({
                          title: 'Payment Processing',
                          description: 'Redirecting to secure checkout...',
                        });
                      }}
                    />) : (
                    <Button;
                      on_click={handle_contact}
                      disabled={is_loading}
                      className='w - full bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple text - white py - 6'                    >;
                      {is_loading ? 'Processing...' : 'Request Quote'}
                    </Button>)}
                  <Button;
                    variant="outline";
                    onClick={handleContact}
                    disabled={isLoading}
                    className="w-full border-zion-purple text-zion-cyan hover:bg-zion-purple/10";
                  >;
                    <MessageSquare className="h-4 w-4 mr-2" />;
                    Contact Publisher;
                  </Button>;
                </div>;
                {/* Publisher Info */}
                <div className="border-t border-zion-blue-light pt-6">;
                  <h3 className="text-lg font-bold text-white mb-3">Publisher</h3>;
                  <div className="flex items-center gap-3">;
                    {listing.author.avatarUrl ? (;
                      <div className="relative h-12 w-12 rounded-full overflow-hidden">;
                        <ImageWithRetry;
                          src={listing.author.avatarUrl}
                          alt={listing.author.name}
                          className="object-cover";
                          onError={(e) => {;
                            const target = e.target as HTMLImageElement;
                            target.src = "https: //ui-avatars.com/api/?name=" + encodeURIComponent(listing.author.name);
                          }}
                        />;
                      </div>;
                    ) : (;
                      <div className="h-12 w-12 rounded-full bg-zion-purple/20 flex items-center justify-center">;
                        <span className="text-lg font-medium text-zion-purple">{listing.author.name.charAt(0)}</span>;
                      </div>;
                    )}
                    <div>;
                      <p className="font-medium text-white">{listing.author.name}</p>;
                      <p className="text-xs text-zion-slate-light">Member since 2022</p>;
                    </div>;
                  </div>;
                </div>;
                {/* Additional Info */}
                <div className="border-t border-zion-blue-light mt-6 pt-6">;
                  <div className="flex justify-between mb-2">;
                    <span className="text-zion-slate-light">Listed on</span>;
                    <span className="text-white">{new Date(listing.createdAt).toLocaleDateString()}</span>;
                  </div>;
                  <div className='flex justify - between mb - 2'>;
                    <span className='text - zion - slate - light'>ID</span>;
                    <span className='text - white'>{listing.id}</span>                  </div>                      </div>)}
                    <div>;
                      <p className="font - medium text - white">{listing.author.name}</p>;
                      <p className="text - xs text - zion - slate - light">Member since 2022</p>;
                    </div>;
                  </div>;
                </div>;
                {/* Additional Info */}
                <div className="border - t border - zion - blue - light mt - 6 pt - 6">;
                  <div className="flex justify - between mb - 2">;
                    <span className="text - zion - slate - light">Listed on</span>;
                    <span className="text - white">{new Date (listing.created_at).toLocaleDateString ()}</span>;
                  </div>;
                  <div className="flex justify - between mb - 2">;
                    <span className="text - zion - slate - light">ID</span>;
                    <span className="text - white">{listing.id}</span>;
                  </div>;
                </div>;
              </div>;
            </div>;
          </div>;
        </div>;
      </div>;

      />;


      {/* Contact Dialog */}
      <Dialog open={isContactDialogOpen} onOpenChange={setIsContactDialogOpen}>;
        <DialogContent className='bg-zion-blue-dark border border-zion-blue-light text-white sm:max-w-md'>;
          <DialogHeader>;
            <DialogTitle className='text-xl font-bold text-white'>;
              Contact Publisher;
            </DialogTitle>;
          </DialogHeader>;
          <ProfileContact

        roomId={listing.id}
        recipientId={listing.author.id}
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
      />

      {/* Contact Dialog */}
      <Dialog open={isContactDialogOpen} onOpenChange={setIsContactDialogOpen}>
        <DialogContent className="bg-zion-blue-dark border border-zion-blue-light text-white sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-white">Contact Publisher</DialogTitle>
          </DialogHeader>
          <ProfileContact 

            email={listing.author.email} // TypeScript now knows this might be undefined
            profileName={listing.author.name}
      <ChatWidget;
        roomId={listing.id}
        recipientId={listing.author.id}
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
      />;
      {/* Contact Dialog */}
      <Dialog open={isContactDialogOpen} onOpenChange={setIsContactDialogOpen}>
        <DialogContent className="bg-zion-blue-dark border border-zion-blue-light text-white sm:max-w-md">

          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-white">Contact Publisher</DialogTitle>
          </DialogHeader>
          <ProfileContact 
            email={listing.author.email} // TypeScript now knows this might be undefined
            profileName={listing.author.name}

>>>>>>> a59e23947e86217473fca4eca4cd277149ff0168

            profileType="service"
          />
        </DialogContent>
      </Dialog>
    </>
<<<<<<< HEAD
