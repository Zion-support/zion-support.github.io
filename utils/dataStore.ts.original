
export async function readReviews(): Promise<Review[]> {
  await ensureFilesExist();
  return fs.readJson(REVIEWS_PATH);
}

export async function writeReviews(reviews: Review[]): Promise<void> {
  await fs.writeJson(REVIEWS_PATH, reviews, { spaces: 2 });
}

}

export async function upsertReview(newReview: Review): Promise<void> {
  const reviews = await readReviews();
  if (idx >= 0) {
    reviews[idx] = newReview;
  } else {
    reviews.push(newReview);
  }
  await writeReviews(reviews);
}

export async function getProjectReviews(projectId: string): Promise<Review[]> {
  const reviews = await readReviews();
  return role === 'client' ? 'talent' : 'client';
}

export async function hasExistingReview(
  projectId: string,
  fromRole: 'client' | 'talent',
