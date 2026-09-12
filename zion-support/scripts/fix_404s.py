#!/usr/bin/env python3
"""Fix 404 errors for ziontechgroup.com GitHub Pages using 404.html fallback"""

import json
import os
from datetime import datetime

# Redirect rules: endpoint -> target
REDIRECTS = {
    "/hermes-agents": "/docs/",
    "/hermes-agents/": "/docs/",
    "/documentation": "/docs/",
    "/documentation/": "/docs/",
    "/help": "/docs/",
    "/help/": "/docs/",
    "/consultation": "/docs/",
    "/support": "/docs/"
}

BASE_URL = "https://ziontechgroup.com"

def create_404_handler():
    """Creates 404.html that handles client-side redirects"""
    
    js_redirects = ",\n    ".join([
        f'"{k}": "{v}"' for k, v in REDIRECTS.items()
    ])
    
    html_content = f'''<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Página não encontrada | Zion Tech Group</title>
  <style>
    body {{
      font-family: system-ui, sans-serif;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
      margin: 0;
      background: #1a1a2e;
      color: #eee;
      text-align: center;
    }}
    .container {{
      padding: 20px;
    }}
    h1 {{ color: #ff6b35; }}
    a {{ color: #4d9de0; text-decoration: none; }}
    a:hover {{ text-decoration: underline; }}
  </style>
</head>
<body>
  <div class="container">
    <h1>404 - Página não encontrada</h1>
    <p>Redirecionando para a página correta...</p>
    <p><a href="/docs/">Ir para Documentação</a></p>
  </div>
  <script>
    (function() {{
      var path = window.location.pathname;
      var redirects = {{{js_redirects}}};
      
      if (redirects[path]) {{
        window.location.href = redirects[path];
      }} else {{
        window.location.href = "/docs/";
      }}
    }}());
  </script>
</body>
</html>'''
    
    return html_content

def main():
    """Generate 404.html with redirect logic"""
    public_dir = "public"
    os.makedirs(public_dir, exist_ok=True)
    
    filepath = os.path.join(public_dir, "404.html")
    content = create_404_handler()
    
    with open(filepath, 'w') as f:
        f.write(content)
    
    # Also update individual HTML files for direct access
    for endpoint, target in REDIRECTS.items():
        safe_name = endpoint.strip('/').replace('/', '_')
        filename = f"{safe_name if safe_name else 'index'}.html"
        html_path = os.path.join(public_dir, filename)
        
        html_content = f'''<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="refresh" content="0; url={target}">
  <title>Redirecting...</title>
  <style>
    body {{
      font-family: system-ui, sans-serif;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
      margin: 0;
      background: #1a1a2e;
      color: #eee;
      text-align: center;
    }}
    .container {{
      padding: 20px;
    }}
    a {{ color: #4d9de0; text-decoration: none; }}
  </style>
</head>
<body>
  <div class="container">
    <p>Redirecting to <a href="{target}">{target}</a>...</p>
  </div>
</body>
</html>'''
        
        with open(html_path, 'w') as f:
            f.write(html_content)
    
    report = {
        "timestamp": datetime.utcnow().isoformat() + "Z",
        "404_html": filepath,
        "redirects": list(REDIRECTS.keys()),
        "individual_files": [{
            "endpoint": k,
            "file": v
        } for k, v in [(ep, os.path.join(public_dir, ep.strip('/').replace('/', '_') + (".html" if ep != "/" else "index.html"))) for ep in REDIRECTS.keys()]]
    }
    
    return report

if __name__ == "__main__":
    result = main()
    print(json.dumps(result, indent=2))