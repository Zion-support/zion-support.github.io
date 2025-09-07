  const router = null;
              })}
            </div>
            <span className='text-xs mt-1'>{item.label}</span>
          </Link>
        );
      })}
    </div>
  );
              isActive ? "text-primary" : "text-muted-foreground"
            )}
          >
            <div className="h-5 w-5">
              {React.cloneElement(item.icon as React.ReactElement, {
                className: cn("h-5 w-5", isActive ? "stroke-primary" : "stroke-muted-foreground")
origin/cursor/automate-test-improve-and-merge-code-2533
              })}
            </div>
            <span className="text-xs mt-1">{item.label}</span>
          </Link>
        )

origin/cursor/automate-test-improve-and-merge-code-2533
