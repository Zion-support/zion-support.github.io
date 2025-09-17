  return (
    <div className="fixed top-32 right-6 z-50">
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-2 shadow-2xl">
        <div className="flex flex-col gap-2">
          {themes.map((theme) => {
            const Icon = theme.icon;
            const isActive = currentTheme === theme.id;
            return (
                key={theme.id}
                onClick={() => onThemeChange(theme.id)}
                className={`relative p-3 rounded-xl transition-all duration-300 ${
                  isActive 
                    ? 'bg-gradient-to-br ' + theme.color + ' text-white shadow-lg' 
                    : 'text-gray-400 hover:text-white hover:bg-white/10'
                }`}
                title={theme.label}
                aria-label={`Switch to ${theme.label}`}
              >
                <Icon className="w-5 h-5" />
                {/* Active indicator */}
                {isActive && (
                  <div
                    className="absolute inset-0 rounded-xl border-2 border-white/30"
                  />
                )}
            );
          })}
        </div>
      </div>
      {/* Theme indicator */}
      <div
        className="mt-3 text-center"
      >
        <span className="text-xs text-gray-400 font-medium">
          {currentTheme === 'dark' ? 'Dark' : 'Light'} Mode
        </span>
      </div>
=======
>>>>>>> origin/merge-new-content-1757989975:src/components/ThemeToggle.tsx
    </div>
  );

