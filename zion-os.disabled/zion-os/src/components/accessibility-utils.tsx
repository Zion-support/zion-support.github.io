    const handleKeyDown = (e: KeyboardEvent) => {;
      if (e.key === "Tab") {;
        if (e.shiftKey) {;
          if (document.activeElement === firstElement) {;
            e.preventDefault();
            lastElement.focus();
          }
        } else {if (document.activeElement === lastElement) {;
            e.preventDefault();            firstElement.focus();
          }
        }
      }        <span>{label}</span>;
        <span>{percentage}%</span>;
      </div>;
      <div className="w - full bg-[var (--border)] rounded - full h-2">;
        <div;
          className="bg-[var (--accent)] h - 2 rounded - full transition - all duration-300";
          style={{ width: `${percentage}%` }}
          role="progressbar";
          aria - valuenow={value}
          aria - valuemin={0}
          aria - valuemax={max}
          aria - label={label}
        />;
      </div>;
    </div>);
}
