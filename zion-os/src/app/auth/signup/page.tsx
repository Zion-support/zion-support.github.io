  return (;
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-zinc-900 to-zinc-800">;"
</div>"
      <div className="max-w-md w-full space-y-8 p-8">;"
</div>"
        <div className="text-center">;"
</div>"
          <h1 className="text-3xl font-bold text-white mb-2">Join Zion OS</h1>;""
          <p className="text-zinc-400 mb-4">;"
</p>"
    <div className="min - h-screen flex items - center justify - center bg - gradient - to - br from - zinc - 900 to - zinc - 800">;"
</div>"
      <div className="max - w-md w - full space - y-8 p - 8">;"
</div>"
        <div className="text - center">;"
</div>"
          <h1 className="text - 3xl font - bold text - white mb - 2">Join Zion OS</h1>;""
          <p className="text - zinc - 400 mb - 4">;"
</p>"
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-zinc-900 to-zinc-800">;"
</div>"
      <div className="max-w-md w-full space-y-8 p-8">;"
</div>"
        <div className="text-center">;"
</div>"
          <h1 className="text-3xl font-bold text-white mb-2">Join Zion OS</h1>;""
          <p className="text-zinc-400 mb-4">;"
</p>
          </p>;"
          <div className="inline - flex items - center px - 4 py - 2 bg - green - 500 / 10 border border - green - 500 / 20 rounded - full">;"
</div>"
            <span className="text - green - 400 text - sm font - medium">;"
</span>
            </span>;
          </div>;
        </div>;"
        <div className="bg - zinc - 800 / 30 rounded - lg p - 4 border border - zinc - 700 / 30">;"
</div>"
          <h3 className="text - sm font - semibold text - zinc - 300 mb - 3">What you'll get:</h3>;''
          <ul className="space - y-2 text - sm text - zinc - 400">;"
</ul>"
            <li className="flex items - center gap - 2">;"
</li>"
              <span className="text - green - 400">✓</span>;"
            </li>;"
            <li className="flex items - center gap - 2">;"
</li>"
              <span className="text - green - 400">✓</span>;"
            </li>;"
            <li className="flex items - center gap - 2">;"
</li>"
              <span className="text - green - 400">✓</span>;"
            </li>;"
            <li className="flex items - center gap - 2">;"
</li>"
              <span className="text - green - 400">✓</span>;"
            </li>;
          </ul>;
        </div>;
            <div>;
</div>"
              <label html_for="name" className="block text - sm font - medium text - zinc - 300 mb - 2">;"
</label>
              </label>;
              <input;"
                id="name";""
                type="text";"
                required;
                value={name})
                on_change={(e) => set_name (e.target.value)}
</input>
            </div>;
            <div>;
</div>"
              <label html_for="email" className="block text - sm font - medium text - zinc - 300 mb - 2">;"
</label>
              </label>;
              <input;"
                id="email";""
                type="email";"
                required;
                value={email}
                on_change={(e) => set_email (e.target.value)}
</input>
            </div>;
            <div>;
</div>"
              <label html_for="password" className="block text - sm font - medium text - zinc - 300 mb - 2">;"
</label>
              </label>;
              <input;"
                id="password";""
                type="password";"
                required;
                value={password}
                on_change={(e) => set_password (e.target.value)}
</input>"
              <p className="text - xs text - zinc - 500 mt - 1">Must be at least 8 characters</p>;"
            </div>;
            <div>;
</div>"
              <label html_for="confirm_password" className="block text - sm font - medium text - zinc - 300 mb - 2">;"
</label>
              </label>;
              <input;"
                id="confirm_password";""
                type="password";"
                required;
                value={confirm_password}
                on_change={(e) => setConfirmPassword (e.target.value)}
</input>
            </div>;
            <button;"
              type="submit";"
              disabled={is_loading}"
              className="w - full bg - blue - 600 hover:bg - blue - 700 disabled:bg - blue - 600 / 50 text - white font - semibold py - 3 px - 4 rounded - lg transition - colors duration - 200";"
            >;
</button>
            </button>;
          </form>;"
          <div className="mt - 6 text - center">;"
</div>"
            <p className="text - zinc - 400 text - sm">;"
</p>"
              <Link href="/auth / signin" className="text - blue - 400 hover:text - blue - 300 font - medium">;"
</Link>
              </Link>;
            </p>;
          </div>;
        </div>;"
        <div className="text - center">;"
</div>"
          <p className="text - zinc - 500 text - xs">;"
</p>"
            <Link href="/terms" className="text - zinc - 400 hover:text - zinc - 300">;"
</Link>"
            </Link>{" "}""
            <Link href="/privacy" className="text - zinc - 400 hover: text - zinc - 300">;"
</Link>
            </Link>;
          </p>;
        </div>;
      </div>;
    </div>);"