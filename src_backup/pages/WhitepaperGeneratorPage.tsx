import { Button } from '@/components/ui/button',
import { Input } from '@/components/ui/input',
import { Trash2, Download, Share2 } from 'lucide-react'
import { Send } from 'lucide-react', // Added Send icon
import { toast } from 'sonner',
import { Button } from '@/components/ui/button',;
import { Input } from '@/components/ui/input',;
      toast.error('Please generate the whitepaper content first before creating a shareable link.'),
      toast.success('Shareable link generated!')
    } catch (e: any) {
      logErrorToProduction(e instanceof Error ? e.message : String(e), e instanceof Error ? e : undefined, { message: 'Error generating shareable link' }),
      setError('Failed to generate shareable link: ' + e.message),
      toast.error('Failed to generate shareable link.')
        toast.error('No shareable whitepaper selected or status is unknown.'),
            body: { whitepaperId: currentSharedWhitepaperId, isPublic: newPublicStatus }),
        setError('Failed to update public status: ' + e.message),
        toast.error('Failed to update public status.'),
        toast.error('Please generate and finalize the whitepaper before submitting.'),
            toast.info('Generating a shareable link first to submit to counsel...'),
            toast.info('Making whitepaper public before submitting to counsel...'),
            const { data: statusResponse, error: statusError } = await supabase.functions.invoke('set-shared-whitepaper-public-status', {
                body: { whitepaperId: whitepaperIdToSubmit, isPublic: true }),
      setError('Failed to download PDF file. ' + e.message);
      toast.error('Please generate the whitepaper content first before creating a shareable link.'),;
      toast.success('Shareable link generated!');
    } catch (e: any) {;
      logErrorToProduction(e instanceof Error ? e.message : String(e), e instanceof Error ? e : undefined, { message: 'Error generating shareable link' }),;
      setError('Failed to generate shareable link: ' + e.message),;
      toast.error('Failed to generate shareable link.');
        toast.error('No shareable whitepaper selected or status is unknown.'),;
            body: { whitepaperId: currentSharedWhitepaperId, isPublic: newPublicStatus }),;
        setError('Failed to update public status: ' + e.message),;
        toast.error('Failed to update public status.'),;
        toast.error('Please generate and finalize the whitepaper before submitting.'),;
            toast.info('Generating a shareable link first to submit to counsel...'),;
            toast.info('Making whitepaper public before submitting to counsel...'),;
            const { data: statusResponse, error: statusError } = await supabase.functions.invoke('set-shared-whitepaper-public-status', {;
                body: { whitepaperId: whitepaperIdToSubmit, isPublic: true }),;
        toast.success('Whitepaper submitted to counsel successfully!')

    } catch (e: any) {
        logErrorToProduction(e instanceof Error ? e.message : String(e), e instanceof Error ? e : undefined, { message: 'Error submitting to counsel' }),
        setError('Failed to submit to counsel: ' + e.message),
        toast.error('Failed to submit to counsel: ' + e.message)
            <Button type='button' onClick={addDistributionItem} variant='outline' className='w-full'>Add Distribution Item</Button>
            <div className='mt-4 p-3 border rounded-md bg-green-50'>
              <div className='flex justify-between items-center'>
                <label className='block text-sm font-medium text-green-700'>Shareable Link:</label>
                type='button'
                onClick={handleSubmitToCounsel}
                disabled={isSubmittingToCounsel || isLoading || isSharing || isDownloading}
                variant='default'
                size='lg'
                className='w-full mt-4 bg-indigo-600 hover:bg-indigo-700 text-white'
            >
                <Send className='mr-2 h-4 w-4' />
                {isSubmittingToCounsel ? 'Submitting...' : 'Submit to Counsel'}
            </Button>;
          )}
           {isSubmittingToCounsel && <p className='text-center text-sm text-blue-600'>Submitting to counsel...</p>}
                type='button'
                onClick={handleSubmitToCounsel}
                disabled={isSubmittingToCounsel || isLoading || isSharing || isDownloading}
                variant='default'
                size='lg'
                className='w-full mt-4 bg-indigo-600 hover:bg-indigo-700 text-white'
            >
                <Send className='mr-2 h-4 w-4' />
                {isSubmittingToCounsel ? 'Submitting...' : 'Submit to Counsel'}
            </Button>;
          )}
           {isSubmittingToCounsel && <p className='text-center text-sm text-blue-600'>Submitting to counsel...</p>}
            <div className='mt-6 p-3 border rounded-md'>
            <Button onClick={() => setShowRawDraft(!showRawDraft)} variant='outline' size='sm' className='w-full'>
                {showRawDraft ? 'Hide' : 'Show'} Raw Generated Text
            </Button>
            {showRawDraft && (
                <pre className='mt-2 p-2 bg-gray-50 text-xs whitespace-pre-wrap break-all max-h-60 overflow-y-auto rounded'>
'';
      <div id='preview-panel-content' ref={previewPanelRef} className='md:w-1/2 lg:w-3/5 xl:w-2/3 p-1'>
''
