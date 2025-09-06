import type { NextApiRequest } from 'next'
  const xff = (req.headers['x-forwarded-for'] as string) |''
    xff.split(','
    (req.headers['x-real-ip'
  if (ip.startsWith(': any
  const forwarded = req.headers['x-forwarded-for'
    return Array && Array.isArray(forwarded) ? forwarded[0] : forwarded && forwarded.split(','
  return remoteAddress || 'unknown'
  const forwarded = req.headers['x-forwarded-for'
    return Array.isArray(forwarded) ? forwarded[0] : forwarded.split(','
  return remoteAddress |'unknown'
      console.error('Error checking IP reputation: any
        sources: ['internal'
      '192.168.1.1'
        reputation: any
        sources: ['local'
      reputation: any
      sources: ['unknown'
    if (!ip || ip = = 'unknown'
      if (data.status = = 'fail'
      console.error('Error fetching geolocation: any
  const xff = (req.headers['x - forwarded - for'] as string) || ''
    xff.split (', '
    (req.headers['x - real - ip'
  const forwarded = req.headers['x - forwarded - for'
    return Array.is_array (forwarded) ? forwarded[0] : forwarded.split (', '
  return remote_address || 'unknown'