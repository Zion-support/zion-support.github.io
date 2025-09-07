className?: string;}
}
export default function ServiceCard({
  title,
  href,
  description,
  bullets = [],
  icon}
  className = ''}
}: ServiceCardProps) {

  return (
    <Link;}
href={href}
}
      className={`group block p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-300 hover:-translate-y-1 ${className}`}
     />

        {icon && (}
          <div className="text-3xl mr-4 group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>

      <p className="text-gray-600 mb-4 group-hover:text-gray-700 transition-colors duration-300">
        {description}
      </p>
      {bullets.length > 0 && (

            </li>
          ))}
        </ul>
      )}
      {/* Hover indicator */}

          <path strokeLinecap=\"round\" strokeLinejoin=\"round\" strokeWidth={2} d=\"M9 5l7 7-7 7\" />
        </svg>
      </div>
    </Link>