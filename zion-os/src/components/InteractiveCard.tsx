    <Link;
      href={href}
      className={`group block p - 8 rounded - 2xl border border - white / 10 hover:border - white / 30 bg - black / 20 hover:bg - black / 40 transition - all duration - 500 transform hover:scale - 105 hover:shadow - 2xl backdrop - blur - sm hover - lift ${class_name}`}
      onMouseEnter={() => setIsHovered (true)}
      onMouseLeave={() => setIsHovered (false)}
      aria - label={`Navigate to ${title} page`}
>;
      <div className=&quot;relative & quot;>;
        {/* Animated background */}
        <div;
          className={`absolute inset - 0 bg - gradient - to - r ${color} rounded - xl opacity - 0 group - hover:opacity - 10 transition - opacity duration - 500 blur - xl`}
        />;
        {/* Icon */}
            {title}
          </h3>;
          <p className=&quot;text - gray - 400 leading - relaxed text - lg mb - 6&quot;>;
            {description}
          </p>;
          {/* Custom children or default arrow */}
          }}
        />;
      </div>;
    </Link>);
}
    <InteractiveCard;
      title={title}
      description={description}
      icon={icon}
      href={href}
      className={class_name}
>;
      {stats && (
        <div className=&quot;mt - 6 pt - 6 border - t border - white / 10 & quot;>;
          <div className=&quot;grid grid - cols - 2 gap - 4&quot;>;
            {stats.map ((stat, index) => (
              <div key={index} className=&quot;text - center & quot;>;
                <div className=&quot;text - 2xl font - bold text - white & quot;>{stat.value}</div>;
                <div className=&quot;text - sm text - gray - 400 & quot;>{stat.label}</div>;
              </div>))}
          </div>;
        </div>)}
    </InteractiveCard>);
}
