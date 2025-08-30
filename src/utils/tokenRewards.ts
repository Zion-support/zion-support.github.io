

export async function rewardOnboarding(...args: []):  {
  await apiClient('/functions/v1/token-manager/earn', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userId, amount: 50, reason: 'Completed onboarding' }),
  });
}

export async function rewardReferral(...args: []):  {
  await apiClient('/functions/v1/token-manager/earn', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userId, amount: 20, reason: 'Referral' }),
  });
}

export async function rewardFiveStarReview(...args: []):  {
  await apiClient('/functions/v1/token-manager/earn', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userId, amount: 10, reason: '5-star review' }),
  });
}
