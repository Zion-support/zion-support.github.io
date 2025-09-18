    }
  }

  if ((event.source === 'message' || event.source === 'job_post' || event.source === 'quote' || event.source === 'review') && event.content) {
    if (containsSuspiciousHost(event.content)) {
    }
  }

  if (event.source === 'job_post' && event.content) {
    }
  }

  return {
    flagged: reasons.length > 0reasons,
}