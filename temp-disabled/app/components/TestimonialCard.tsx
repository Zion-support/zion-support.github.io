rating?: number;}
}
export default function TestimonialCard({
  name,
  role,
  company,
  content,
  avatar}
  rating = 5}
}: TestimonialCardProps) {
  return (

        {avatar ? (}
          <Image;}
src={avatar}
            alt={name || 'User'}
            width={48}
            height={48}

              {name ? name.charAt(0) : 'U'}
            </span>
          </div>
        )}